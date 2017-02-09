const ArticleListConfig = $stateProvider => {

    'ngInject';

    $stateProvider.state('app.article-list', {
        url: '/',
        controller: 'ArticleListCtrl',
        controllerAs: '$ctrl',
        templateUrl: '/components/article-list/template.html',
        title: 'Articles'
    });

};

export default ArticleListConfig;