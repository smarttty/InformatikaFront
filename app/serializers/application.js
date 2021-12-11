import OdataSerializer from 'ember-flexberry-data/serializers/odata';
import { capitalize } from 'ember-flexberry-data/utils/string-functions';
export default OdataSerializer.extend({
    primaryKey: '_Primarykey',

    keyForRelationship(key, typeClass, method) {
        if ((method === 'serialize' && this.hasSerializeRecordsOption(key)) ||
        (method === 'deserialize' && this.hasDeserializeRecordsOption(key))) {
          return this.keyForAttribute(key, method);
        } else {
          return capitalize(key) + 'Primarykey';
        }
      },
});