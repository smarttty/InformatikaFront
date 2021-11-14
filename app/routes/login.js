import Route from '@ember/routing/route';
import unauthenticatedRoute from '../mixins/unauthenticated-route';
import moment from 'moment';

export default Route.extend(unauthenticatedRoute, {
    model() {
        return this.store.createRecord('login');
    }
});
