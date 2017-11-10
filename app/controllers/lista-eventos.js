import Ember from 'ember';

export default Ember.Controller.extend({
	// contadorEventosText: Ember.computed('model.[]', function(){
	// 	// this // instancia de controller
	// 	return `Mostrando ${this.get('model.length')} eventos`;
	// })
	contadorEventosText: Ember.computed('model.[]', {
		get: function(){
			return `Mostrando ${this.get('model.length')} eventos`;
		},
		set: function(key, value){
			// cualquier tipo de acción
			
			return value;
		}
	}),

	isMayor10: Ember.computed.gt('model.length', 10),

	filteredModel: Ember.computed.filter('model', function(item, index){
		return Date.parse(item.get('inicio')) > new Date().getTime();
	})



});
