import ArticleModule from './index'
import ArticleController from './controller'
import uiRouter from 'angular-ui-router'

describe('ArticleModule', () => {

    "ngInject";
    let $rootScope, $state, $location, $componentController, $compile, $timeout, $q, MockArticleService;

    beforeEach(window.module(ArticleModule, uiRouter));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
        $timeout = $injector.get('$timeout');
        $q = $injector.get('$q');

        MockArticleService = {
            get: (id) => {},
            delete: (id) => {}
        }

        spyOn(MockArticleService, 'get').and.callFake(function(param){
            const deferred = $q.defer();
            if(param == 555) {
                deferred.resolve({
                    _id: "589c67000d17af00115e7b08",
                    title: "123",
                    author: "123",
                    text: "123",
                    dateCreated: "2017-02-09T12:56:32.952Z"
                });
            } else{
                deferred.reject({});
            }
            return deferred.promise;
        });
        spyOn(MockArticleService, 'delete').and.callFake(function(param){
            const deferred = $q.defer();
            if(param == 555) {
               deferred.resolve({});
            } else{
                deferred.reject({});
            }
            return deferred.promise;
        });

    }));

    describe('ArticleModule', () => {
        it('ArticleModule component should be visible when navigates to /article:id', () => {
            $location.url('/article:555');
            $rootScope.$digest();
            $timeout( () => {
                expect($state.current.component).toEqual('app.article');
            });
        });
    });

    describe('ArticleController', () => {

        let controller;
        beforeEach(() => {
            let $scope = $rootScope.$new();
            controller = new ArticleController(MockArticleService, $scope);
        });

        it('controller delete should redirect to list', () => {
            controller.deleteArticle(555);
            $timeout( () => {
                expect(MockArticleService.delete).toHaveBeenCalled();
                expect($state.current.component).toEqual('app.article-list');
            });
        });
    });
});
