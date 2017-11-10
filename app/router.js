import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-eventos', {path: '/'});
  this.route('evento-detail', {path: 'evento-detail/:evento_id'});
  this.route('nuevo-evento');
  this.route('registration', {path: 'registration/:evento'});
  this.route('login');
  this.route('notifications');
});

export default Router;
