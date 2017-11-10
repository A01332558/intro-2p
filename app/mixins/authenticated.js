import Ember from 'ember';

export default Ember.Mixin.create({
	beforeModel(){
		return this.get("session").fetch().catch(()=>{
			if(this.get("session.isAuthenticated")){
				// return this.transitionTo("/");
			}
			else{
				return this.transitionTo("login");
			}
		})
		// if(this.get("session.isAuthenticated")){}
		// 	else{
		// 		return this.transitionTo("login");
		// 	}
	}
});
