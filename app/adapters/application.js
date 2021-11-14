import DS from 'ember-data';
import OData from 'ember-flexberry-data/adapters/odata';
import config from '../config/environment';

export default OData.extend({
  host: config.APP.backendUrls.api,

  init() {
    this.set('headers', {
      'X-Requested-With': 'XMLHttpRequest'
    });
  },

  ajax(url, method, hash = {}) {
    hash.xhrFields = { withCredentials: true };

    return this._super(url, method, hash);
}
});
