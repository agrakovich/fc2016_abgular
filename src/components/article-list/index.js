import angular from 'angular';
import ArticleListConfig from './config';
import ArticleListCtrl from './controller';
import ListPagination from '../pagination';
import ArticlePreview from '../article-preview';
import './style.scss'

const articleListModule = angular.module('app.article-list', []);

articleListModule.config(ArticleListConfig);
articleListModule.controller('ArticleListCtrl', ArticleListCtrl);
articleListModule.component('listPagination', ListPagination);
articleListModule.component('articlePreview', ArticlePreview);


export default articleListModule;