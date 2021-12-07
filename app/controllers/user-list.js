import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        goToEditForm(id) {
            this.transitionToRoute('user', id);
        }
    }
});
