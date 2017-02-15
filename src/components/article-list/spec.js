import ArticleListModule from './index'
import ArticleListController from './controller'
import uiRouter from 'angular-ui-router'

describe('ArticleList', () => {

    let $rootScope, $state, $location, $componentController, $compile, $timeout, $q, MockArticleService;

    beforeEach(window.module(ArticleListModule, uiRouter));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
        $timeout = $injector.get('$timeout');
        $q = $injector.get('$q');
    }));

    describe('ArticleListModule', () => {
        it('default component should be ArticleList', () => {
            $location.url('/');
            $rootScope.$digest();
            $timeout( () => {
                expect($state.current.component).toEqual('app.article-list');
            });
        });
    });

    describe('ArticleListController', () => {

        // controller specs
        let controller;
        beforeEach(() => {
            MockArticleService = {
                query: () => {}
            }

            spyOn(MockArticleService, 'query').and.callFake(function(){
                const deferred = $q.defer();
                deferred.resolve({articlesCount:2, articles:[{_id:"589c67000d17af00115e7b08", title:"123",author:"123",text:"123", dateCreated:"2017-02-09T12:56:32.952Z"}]});
                return deferred.promise;
            });

            let $scope = $rootScope.$new();
            controller = new ArticleListController(MockArticleService, $scope);
            spyOn(controller, 'runQuery');
        });

        it('controller init should make initial request', () => {
            expect(MockArticleService.query).toHaveBeenCalled();
        });

        it('controller setPageTo should call runQuery', () => {
            controller.setPageTo(2);
            expect(controller.runQuery.calls.count()).toEqual(1);
        });
    });
});
