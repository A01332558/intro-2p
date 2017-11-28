import Ember from 'ember';


export default Ember.Controller.extend( {
	actions:{
		changePicUrl(url){
			this.set('model.picURL', url);
		},
		save(){
			this.get('model').save();
		}
	}
});
