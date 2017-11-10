import Ember from 'ember'; //Componente hace reutilizable el codigo, reciclar codigo

export default Ember.Component.extend({
	store: Ember.inject.service('store'), //Para que funcione la funcion store
	actions:{
		save(){
			//Logica necesaria para crear un o el elemento
			let evento = this.get('evento');
			//1) Llenar los campos
			// evento.set('nombre', this.get('nombreEvento'));
			// evento.set('inicio', this.get('inicioEvento'));
			// evento.set('fin', this.get('finEvento'));
			//2) Validar los campos
			if( Ember.isBlank( evento.get('nombre')) ){
				alert('el campo de nombre no puede estar vacio');
				return;
			}
			// if(this.get('actividadesArray')){
			// 	this.get('actividadesArray').forEach((a)=>{
			// 		a.set('evento', evento);
			// 	});
			// }
			//3) Mandar a guardar
			evento.save().then(()=>{
				// aquí ya estoy seguro de que se guardó
				// if(this.get('actividadesArray')){
					Ember.RSVP.all(   evento.get('actividades').invoke('save')   ).then(()=>{ //this.get('actividadesArray')
						alert('Ya se guardó');
						this.sendAction('didSave');// transitiontoroute('pantalla') --ve a la pantalla
					})
				// } else{
					// this.sendAction('didSave');
				// }
			}); // asíncrono || then, metodo que crea promesa que asegura que se cumpla la promesa
			// es posible que aun no se haya guardado
		},
		saveActivity(){
			// Inicializa una nueva activity en el store,
			// y le llena sus atributos con las variables del formulario
			let activity = this.get('store').createRecord('activity', {
				evento: this.get('evento'), // Enlazamos la actividad con el evento
				// nombre: this.get('nombreActividad'),
				// inicio: this.get('inicioActividad'),
				// fin: this.get('finActividad'),
			});//es lo mismo que en el save normal
			//La nueva activity creada la insertamos en un arreglo temporal
			// if(!Ember.isPresent(this.get('actividadesArray'))){
			// 	this.set('actividadesArray', [])
			// };
			// this.get('actividadesArray').pushObject(activity);
			//Limpiamos (reset) las variables del formulario
			// this.setProperties({
			// 	nombreActividad: null,
			// 	inicioActividad: null,
			// 	finActividad: null,
			// });
		},
	}
});
