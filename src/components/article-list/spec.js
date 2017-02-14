import ArticleListModule from './index'
import ArticleDataService from '../../services/articleService'
import uiRouter from 'angular-ui-router'

describe('ArticleList', () => {

    let $rootScope, $state, $location, $componentController, $compile, $timeout, $q, ArticleService;

    beforeEach(window.module(ArticleListModule, uiRouter));

    beforeEach(inject(($injector) => {
        let ArticleService = new ArticleDataService();
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
        $timeout = $injector.get('$timeout');
        $q = $injector.get('$q');
        spyOn(ArticleService, 'query').and.callFake(function(){
            arguments[0].success({items:[{name:1},{name:2},{name:3},{name:4},{name:5}], itemsCount: 11});
        });
    }));

    describe('Module', () => {
        it('default component should be ArticleList', () => {
            $location.url('/');
            $rootScope.$digest();
            $timeout( () => {
                expect($state.current.component).toEqual('app.article-list');
            });
        });
    });

    describe('Controller', () => {

        let controller;
        beforeEach(() => {
            controller = $componentController('app.article-list', {
                $scope: $rootScope.$new(),
                ArticleService: ArticleService
            });
        });

        it('controller init should call setListTo', () => { // erase if removing this.name from the controller
            controller.$onInit();
            expect(ArticleService.query).toHaveBeenCalled();
        });
    });
});
