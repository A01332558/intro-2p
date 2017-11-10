import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		setGender(gender){
			// Aquí vamos a asignarle valor de Genero al articipante 
			// es un action que responde al click de un input-radio
			// que esta en la vista (template, hbs)
			//
			switch(gender){
				case 1:
				this.set('model.participante.isMasculino', true);
				this.set('model.participante.isFemenino', false);
				break;
				case 2:
				this.set('model.participante.isMasculino', false);
				this.set('model.participante.isFemenino', true);
				break;
			}
		},
		selectActividad(actividad, checked){
			let registroThisEvento;
			if(Ember.isBlank(this.get('model.participante.registros'))){
				registroThisEvento = this.get('model.participante.registros').createRecord({});
			}else{
				registroThisEvento = this.get('model.participante.registros.lastObject');
			}
			if(checked){
				registroThisEvento.get('actividades').pushObject(actividad);	
			} else{
				registroThisEvento.get('actividades').removeObject(actividad);
			}

			
		}
		// guardad(){
			
		// }

	}
});
