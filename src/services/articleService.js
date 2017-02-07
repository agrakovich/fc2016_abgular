import config from '../config'

export default class ArticleService {

    constructor($http, $q) {
        'ngInject';

        this.$http = $http;
        this.$q = $q;
    };

    save(article) {
        const request = {};

        if (article._id) {
            request.url = `${config.apiUrl}${config.articlesRoute}/${article._id}`;
            request.method = 'PUT';
            delete article._id;
        } else {
            request.url = `${config.apiUrl}${config.articlesRoute}`;
            request.method = 'POST';
        }

        request.data = { ...article };
        return this.$http(request)
            .then(res => res.data.article);
    };

    get(id) {
        const deferred = this.$q.defer();

        if (!id.replace(' ', '')) {
            deferred.reject('Article id is empty');
            return deferred.promise;
        }

        this.$http({
            url: `${config.apiUrl}${config.articlesRoute}/${id}`,
            method: 'GET'
        })
        .then(res => deferred.resolve(res.data.article))
        .catch(err => deferred.reject(err));

        return deferred.promise;
    };

    delete(id) {
        return this.$http({
            url: `${config.apiUrl}${config.articlesRoute}/${id}`,
            method: 'DELETE'
        });
    };

    query(params) {
        const request = {
            url: `${config.apiUrl}${config.articlesRoute}`,
            method: 'GET',
            params: params.filters ? params.filters : null
        };
        return this.$http(request).then((res) => res.data);
    };

};