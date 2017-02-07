export default class ArticleActionsCtrl {
        constructor(ArticleService, article, $state) {
            "ngInject";

            this.ArticleService = ArticleService;
            this.$state = $state;
            this.article = article;
        };

        deleteArticle() {
            this.ArticleService.delete(this.article._id)
                .then(success => this.$state.go("app.article-list"))
                .catch(err => this.$state.go("app.article-list"));
        };
};