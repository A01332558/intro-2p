import Ember from 'ember';
import io from 'npm:socket.io-client';

export default Ember.Service.extend({
	init(){
		let socket = io('http://10.211.55.3:3000'); // must be in a conf file
		this.set('socket', socket);
	}
});
