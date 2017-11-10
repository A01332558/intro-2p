import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
	model(){
		return this.store.findAll('event');
	}
});
