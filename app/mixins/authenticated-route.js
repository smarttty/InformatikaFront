import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  session: service(),

  beforeModel(transition) {
    this._super(...arguments);
    this.session.requireAuthentication(transition, 'login');
  }

});