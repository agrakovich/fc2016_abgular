const ArticleConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.article", {
        url: "/article/:id",
        controller: "ArticleCtrl",
        controllerAs: "$ctrl",
        //templateUrl: "../src/components/article/template.html",
        template: `<head>
    <link href='//fonts.googleapis.com/css?family=Questrial' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Sanchez:400italic,400' rel='stylesheet' type='text/css'>
</head>
<span class="article-actions">
    <a ui-sref="app.editor({ id: $ctrl.article._id })">
      <i></i> Edit
    </a>

    <button ng-click="$ctrl.deleteArticle()">
      <i></i> Delete
    </button>
</span>
<article class="type-system-geometric">
    <h1 ng-bind="::$ctrl.article.title"></h1>
    <p ng-bind="::$ctrl.article.dateCreated" class="date"></p>
    <p ng-bind="::$ctrl.article.text"></p>
    <hr>
    <p class="author" ng-bind="::$ctrl.author"></p>
</article>`,
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