import Ember from 'ember';
// import albums from '../models/album-fixtures';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('album');
  }
});


// export default Ember.Route.extend({
//   model: function() {
//     return albums;
//   }
// });
