const EditorConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.editor", {
        url: "/editor",
        controller: "EditorCtrl",
        controllerAs: "$ctrl",
        templateUrl: "/components/editor/template.html",
        title: "Editor",
        resolve: {
            article: (ArticleService, $state) => {
                if($state.params && $state.params.id) {
                    return ArticleService.get($state.params.id)
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