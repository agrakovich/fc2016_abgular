const ArticleListConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.article-list", {
        url: "/",
        controller: "ArticleListCtrl",
        controllerAs: "$ctrl",
        //templateUrl: "../src/components/article-list/template.html",
        template: `<div ng-hide="!$ctrl.loading">
                        Loading articles...
                    </div>
                    
                    <a ui-sref="app.editor()" class="btn">
                        Post article
                    </a>
                    
                    <div ng-show="!$ctrl.loading && (!$ctrl.articles || !$ctrl.articles.length)">
                        No articles are here... yet.
                    </div>
                    <div class="article-list">
                        <article-preview article="article" ng-repeat="article in $ctrl.articles">
                        </article-preview>
                    </div>
                    <list-pagination total-pages="$ctrl.listConfig.totalPages" current-page="$ctrl.listConfig.currentPage" ng-hide="$ctrl.listConfig.totalPages <= 1">
                    </list-pagination>`,
        title: "Articles"
    });

};

export default ArticleListConfig;