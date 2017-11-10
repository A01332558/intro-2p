import Ember from 'ember';

export default Ember.Controller.extend({
	socket: Ember.inject.service(),
	actions:{
		sendNotification(){
			this.get('socket.socket').emit('message', this.get('notificationText'));
			this.get('notificationText', '');
		}
	}
});
