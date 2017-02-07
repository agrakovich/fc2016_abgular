const EditorConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.editor", {
        url: "/editor",
        controller: "EditorCtrl",
        controllerAs: "$ctrl",
        //templateUrl: "./template.html",
        template: `<list-errors errors="$ctrl.errors"></list-errors>
                        <form>
                            <fieldset ng-disabled="$ctrl.isSubmitting">
                                <fieldset>
                                    <label>Title
                                        <input name="title" ng-model="$ctrl.article.title" />
                                    </label>
                                </fieldset>
                                <fieldset>
                                    <label>Author
                                        <input name="author" ng-model="$ctrl.article.author" />
                                    </label>
                                </fieldset>
                                <fieldset>
                                    <label>Text
                                        <textarea name="text" ng-model="$ctrl.article.text"></textarea>
                                    </label>
                                </fieldset>
                                <button type="button" ng-click="$ctrl.submit()">Publish</button>
                            </fieldset>
                        </form>`,
        title: "Editor",
        resolve: {
            article: (ArticleService, $state, $stateParams) => {
                if($stateParams._id) {
                    return ArticleService.get($stateParams._id)
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