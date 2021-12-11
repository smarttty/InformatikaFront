import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import Builder from 'ember-flexberry-data/query/builder';
import FilterOperator from 'ember-flexberry-data/query/filter-operator';

export default Component.extend({
  orders: null,
  user: null,
  store: service(),

  actions: {
    createOrder() {
      this.get('store').createRecord('order', {
        user: this.get('user')
      });
    },

    saveOrders() {
      return all(this.orders.map((order => order.save())))
        .then(() => {
          let builder = new Builder(this.get('store'), 'order')
            .select('name')
            .where('user.id', FilterOperator.Eq, this.get('user.id'));
          this.get('store').query('order', builder.build()).then((orders) => {
            orders.forEach((order) => order.set('user', this.get('user')));
            this.set('orders', orders.sortBy('name'));
          });
        })
    }
  }
});
