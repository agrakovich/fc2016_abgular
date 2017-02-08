const EditorConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.editor", {
        url: "/editor",
        controller: "EditorCtrl",
        controllerAs: "$ctrl",
        //templateUrl: "./template.html",
        template: `<form name="articleForm" novalidate>
    <fieldset ng-disabled="$ctrl.isSubmitting">
        <fieldset>
            <label>Title
                <input name="title" ng-model="$ctrl.article.title" required/>
                <p ng-show="articleForm.title.$invalid && !articleForm.title.$pristine">Title is required!</p>
            </label>
        </fieldset>
        <fieldset>
            <label>Author
                <input name="author" ng-model="$ctrl.article.author" required/>
                <p ng-show="articleForm.author.$invalid && !articleForm.author.$pristine">Author is required!</p>
            </label>
        </fieldset>
        <fieldset>
            <label>Text
                <textarea name="text" required ng-model="$ctrl.article.text" min-text-length="30"></textarea>
                <p ng-show="articleForm.text.$error.isMinTextLength">Article text must be not less than 30 characters!</p>
                <p ng-show="articleForm.text.$invalid && !articleForm.text.$pristine">Article text is required!</p>
            </label>
        </fieldset>
        <button type="button" ng-disabled="articleForm.$invalid" ng-click="$ctrl.submit()">Publish</button>    
    </fieldset>
</form>`,
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