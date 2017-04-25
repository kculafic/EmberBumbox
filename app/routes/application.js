import Ember from 'ember';

// ******** should perhaps be 'app/models/album-fixtures'
import albums from 'app/models/album-fixtures';

export default Ember.Route.extend({
  model() {
    return albums;
  }
});
