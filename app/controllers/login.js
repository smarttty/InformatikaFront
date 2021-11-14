import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    session: service('session'),
    actions: {
        login() {
            this.session.authenticate('authenticator:core', {
                userName: this.model.userName,
                password: this.model.password
            });
        }
    }
});
