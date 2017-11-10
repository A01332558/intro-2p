import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	beforeModel(){
	// 	return this.get('session').open('firebase').then(()=>{
	// 		if(this.get("session.isAuthenticated")){
	// 			return this.transitionTo("/");
	// 		}
	// 		else{
				
	// 		}
	// 	}).catch(()=>{
	// 		if(this.get("session.isAuthenticated")){
	// 			return this.transitionTo("/");
	// 		}
	// 		else{
				
	// 		}
	// 	})
	// }
		return this.get("session").fetch().catch(()=>{
			if(this.get("session.isAuthenticated")){
				return this.transitionTo("lista-eventos");
			}
		})
	}
});
