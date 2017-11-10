import DS from 'ember-data';

export default DS.Model.extend({
	registros: DS.hasMany('registro'),
	nombre: DS.attr('string'),
	email: DS.attr('string'),


	isMasculino: false,
	isFemenino: false,
});
