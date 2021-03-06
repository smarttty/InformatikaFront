import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('desktop');
  this.route('user-list');
  this.route('user', { path: 'user/:id'});
  this.route('user-new');
});

export default Router;
