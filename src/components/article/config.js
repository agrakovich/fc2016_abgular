const ArticleConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.article", {
        url: "/article/:id",
        controller: "ArticleCtrl",
        controllerAs: "$ctrl",
        //templateUrl: "../src/components/article/template.html",
        template: `<div>
                        <div>
                            <h1 ng-bind="::$ctrl.article.title"></h1>                            
                        </div>
                        <div>
                            <div ng-bind="::$ctrl.article.text"></div>
                        </div>
                        <hr />
                        <span>
                            <a ui-sref="app.editor({ id: $ctrl.article._id })">
                              <i></i> Edit
                            </a>
                    
                            <button ng-click="$ctrl.deleteArticle()">
                              <i></i> Delete
                            </button>
                        </span>
                    </div>`,
        title: "Article",
        resolve: {
            article: (ArticleService, $state, $stateParams) => {
                if($stateParams.id) {
                    return ArticleService.get($stateParams.id)
                        .then(article => {
                            return article;
                        }).catch(err => $state.go("app.notFound"));
                } else {
                    return null;
                }
            }
        }
    });
};

export default ArticleConfig;