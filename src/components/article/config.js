"use strict";


const ArticleConfig = $stateProvider => {

    "ngInject"
    $stateProvider.state('app.article', {
        url: '/article/:id',
        controller: 'ArticleCtrl',
        controllerAs: '$ctrl',
        templateUrl: '/components/article/template.html',
        title: 'Article',
        resolve: {
            article: (ArticleService, $state, $stateParams) => {
                if($stateParams.id) {
                    return ArticleService.get($stateParams.id)
                        .then(article => {
                            return article;
                        }).catch(err => $state.go('app.notFound'));
                } else {
                    return null;
                }
            }
        }
    });
};

export default ArticleConfig;