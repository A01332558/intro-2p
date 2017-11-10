import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
	model(params){
		let id = params.evento_id;
		return this.store.find('event', id);
	},
	actions: {
		borrar(){
			// alert('Borrar desde el route');
			this.get('evento').deleteRecord();

		},
		veALaLista(){
			return this.transitionToRoute('lista-eventos');
		}
	}
});
