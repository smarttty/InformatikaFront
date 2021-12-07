import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save().then((user) => {
          this.transitionToRoute('user', user.get('id'));
      });
    }
  }
});
