import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clickMe: function() {
      alert("Test");
    }
  }
});
