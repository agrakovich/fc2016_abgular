const ArticlePreview = {
    bindings: {article: "="},
    //templateUrl: "src/components/article-preview/template.html"
    template: `<div>
                    <a ui-sref="app.article({ id: $ctrl.article._id })">
                        <h2 ng-bind="$ctrl.article.title"></h2>
                        <p ng-bind="$ctrl.article.author"></p>
                        <p>Read more...</p>
                    </a>
                </div>`
};

export default ArticlePreview;