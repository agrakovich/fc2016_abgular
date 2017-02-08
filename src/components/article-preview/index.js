import './styles.scss';

const ArticlePreview = {
    bindings: {article: "="},
    //templateUrl: "src/components/article-preview/template.html"
    template: `<div class="preview">
                    <p class="title" ng-bind="$ctrl.article.title"></p>
                    <p class="author" ng-bind="$ctrl.article.author"></p>
                    <a ui-sref="app.article({ id: $ctrl.article._id })">
                        <p>Read more...</p>
                    </a>
                </div>`
};

export default ArticlePreview;