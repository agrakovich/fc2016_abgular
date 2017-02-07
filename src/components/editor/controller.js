class EditorCtrl {

    constructor(ArticleService, article, $state) {
        "ngInject";

        this.ArticleService = ArticleService;
        this.$state = $state;

        if (!article) {
            this.article = {
                title: "",
                author: "",
                text: ""
            };
        } else {
            this.article = article;
        }
    };

    submit() {
        this.isSubmitting = true;

        this.ArticleService.save(this.article)
            .then(newArticle => this.$state.go("app.article", {id: newArticle._id}))
            .catch(err => this.errors = err.data.errors )
            .finally(() => this.isSubmitting = false );
    };

};

export default EditorCtrl;