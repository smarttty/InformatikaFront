import Route from '@ember/routing/route';
import authenticatedRoute from '../mixins/authenticated-route';
import { inject as service } from '@ember/service';
import Builder from 'ember-flexberry-data/query/builder';
import {A} from '@ember/array';
export default Route.extend(authenticatedRoute, {
  
  store: service(),

  model() {
    const userBuilder = new Builder(this.get('store'))
      .from('user')
      .select('login, name')

    return this.get('store').query('user', userBuilder.build());
  },

  setupController(controller, model) {
    controller.set('columns', [
      {
        name: `Логин`,
        valuePath: `login`,
      },
      {
        name: `Имя пользователя`,
        valuePath: `name`,
      },
    ]);

    const rows = A();

    model.forEach(element => {
      rows.pushObject({
        login: element.get('login'),
        name: element.get('name')
      });
    });

    controller.set('rows', rows);
  }
});
