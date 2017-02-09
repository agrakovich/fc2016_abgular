import angular from 'angular';
import appRun from './app.run';
import appConfig from './app.config';
import './app.scss';
import 'angular-ui-router';
//import 'angular-sanitize';
//import 'bootstrap';
import 'fontawesome';
import 'textangular';
import 'textAngular/dist/textAngular-sanitize';
import 'textAngular/dist/textAngular.css';
import './components/editor';
import './components/article-list';
import './components/article';
import './components/not-found';
import './services';

const requires = [
    'ui.router',
    'textAngular',
    'app.services',
    'app.article',
    'app.article-list',
    'app.editor',
    'app.notFound',
];

window.app = angular.module('app', requires);

angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});