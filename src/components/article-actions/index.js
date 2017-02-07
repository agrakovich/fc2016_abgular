import ArticleActionsCtrl from './controller';

const ArticleActions = {
    bindings: {article: "="},
    controller: ArticleActionsCtrl,
    //templateUrl: "/src/components/article-actions/template.html"
    template: `<span>
                    <a ui-sref="app.editor({ id: $ctrl.article._id })">
                      <i></i> Edit
                    </a>
                
                    <button ng-click="$ctrl.deleteArticle()">
                      <i></i> Delete
                    </button>
                </span>`
};

export default ArticleActions;