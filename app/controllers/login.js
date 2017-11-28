import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),

	actions: {
		sigIn(provider){
			// Codigo para iniciar sesión
			switch(provider){
				case 'facebook':
					this.get('session').open('firebase', {provider: 'facebook'}).then(()=>{
						// El inicio funcionó
						// debugger
						if(this.get("session.isAuthenticated")){
							return this.transitionToRoute("/");
						}
							else{
								return this.transitionToRoute("login");
							}
					}).catch(()=>{
						// Falló el inicio
						// debugger
						if(this.get("session.isAuthenticated")){
							return this.transitionToRoute("/");
						}
							else{
								return this.transitionToRoute("login");
							}
					})
				break;
				case 'email':
					this.get('session').open('firebase', {
						provider: 'password',
						email: this.get('email'),
						password: this.get('password')
					}).then(()=>{
						return this.transitionToRoute('lista-eventos');
					})
					break;
			}
		},
	},
});
