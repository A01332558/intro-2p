import Ember from 'ember';

export default Ember.Component.extend({
	/**
		* @override: ember lifecycle
		*/
	didInsertElement(...params) {
		this._super(...params);
		// Inician todos los plugins externos
		this.$('.collapse').collapse({
			parent: '#lista-actividades',
			toggle: false,
		});
	},

	actions:{
		selectActividad(actividad, checked){
			this.sendAction('selectActividad', actividad, checked);
		}
	},

});
