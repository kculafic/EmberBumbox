import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    console.log(this.store.find('album', params.album_id));
    return this.store.find('album', params.album_id);
  }
});
