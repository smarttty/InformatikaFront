import Route from '@ember/routing/route';
import Builder from 'ember-flexberry-data/query/builder';
import FilterOperator from 'ember-flexberry-data/query/filter-operator';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('user', params.id)
    .then((user)=>{
      let builder = new Builder(this.get('store'), 'order')
      .select('name')
      .where('user.id', FilterOperator.Eq, user.get('id'))
      .orderBy('name');
      return this.get('store').query('order', builder.build()).then((orders)=> {
        orders.forEach((order) => order.set('user', user));
        return user
      });
    })
  }
});
