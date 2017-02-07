import angular from 'angular';
import ArticleConfig from './config';
import ArticleCtrl from './controller';


const articleModule = angular.module('app.article', []);

articleModule.config(ArticleConfig);
articleModule.controller('ArticleCtrl', ArticleCtrl);

export default articleModule;