const EditorConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.editor", {
        url: "/editor",
        controller: "EditorCtrl",
        controllerAs: "$ctrl",
        templateUrl: "./template.html",
        title: "Editor",
        resolve: {
            article: (ArticleService, $state, $stateParams) => {
                if($stateParams.slug) {
                    return ArticleService.get($stateParams.slug)
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

export default EditorConfig;