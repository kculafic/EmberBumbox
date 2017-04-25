import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('album', {path: '/album/:album_id'
  // });
  this.route('album', {path: '/album/:album_id'})
});

export default Router;
