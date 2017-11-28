import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	firebaseApp: Ember.inject.service(),

	passwordVisibility: false,
	// isWorking: false,

	showError(message){
		this.set('errorMsg', message);
		setTimeout(()=>{
			this.set('errorMsg', null)
		}, 5000); // 1000 == 1 seg
	},

	

	actions: {
		
		togglePasswordVisibility(){
			this.toggleProperty('passwordVisibility');
		},

		signup(){
			// Obtener las variablez del registro
			// email
			// passw
			// passwConf
			let email = this.get('email');
			let password = this.get('password');
			let confirmation = this.get('passwordConfirmation');
			let nombre = this.get('nombre');
			// Otra forma de hacer lo anterior
			// let {email, password, confirmation} = this.hetProperties('email', 'password', 'passwordConfirmation')

			if (password == confirmation){
			// Enviar las variables de email y password a Firebase
				let registrationPromise = this.get('firebaseApp').auth().createUserWithEmailAndPassword(
					email,
					password
				);
				registrationPromise.then((response)=>{
					this.store.createRecord('user', {nombre: nombre, id: response.uid}).save().then(()=>{
						window.swal({
							title: 'Yuju!(:',
							text: 'Te registraste exitosamente',
							confirmButtonText: 'Comencemos /,,/'
						}).then(()=>{
							this.transitionToRoute('lista-eventos');
						});
					});
				});
				// Dentro de este .catch es cuando hay errores en el registro
				registrationPromise.catch((error)=>{
					this.showError(error.message);
				});
			}else{
				//this.set('isWorking', false)
				this.showError("Password and confirmation don't match");
			}
			
			
		}
	}
});
