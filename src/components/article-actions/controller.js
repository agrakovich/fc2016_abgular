export default class ArticleActionsCtrl {

    constructor(ArticleService, $state) {
        "ngInject";

        this.ArticleService = ArticleService;
        this.$state = $state;
    };

    deleteArticle() {
        this.ArticleService.delete(this.article.__id)
            .then(success => this.$state.go("app.article-list"))
            .catch(err => this.$state.go("app.article-list"));
    };
};