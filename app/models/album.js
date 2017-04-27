import DS from 'ember-data';
var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('song'),

  totalDuration: function() {
    var total = 0;
    this.get('songs').forEach(function(song) {
      total += song.get('duration');
    });
    return total;
  }.property('songs.@each.duration')
});
