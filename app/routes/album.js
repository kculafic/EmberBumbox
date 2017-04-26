import Ember from 'ember';
import albums from '../models/album-fixtures';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('album', params.album_id)
  }
});
