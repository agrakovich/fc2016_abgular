import EditorModule from './index'
import EditorController from './controller'
import uiRouter from 'angular-ui-router'

describe('EditorModule', () => {

    let $rootScope, $state, $location, $componentController, $compile, $timeout, $q, MockArticleService;

    beforeEach(window.module(EditorModule, uiRouter));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
        $timeout = $injector.get('$timeout');
        $q = $injector.get('$q');
    }));

    describe('EditorModule', () => {
        it('NotFoundModule component should be visible when navigates to /editor', () => {
            $location.url('/editor');
            $rootScope.$digest();
            $timeout( () => {
                expect($state.current.component).toEqual('app.aeditor');
            });
        });
    });

    describe('EditorController', () => {

        // controller specs
        let controller;
        beforeEach(() => {
            MockArticleService = {
                save: () => {}
            }

            spyOn(MockArticleService, 'save').and.callFake(function(){
                const deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            });
            let $scope = $rootScope.$new();
            controller = new EditorController(MockArticleService, {}, $scope);
        });

        it('controller submit should call save from service', () => {
            controller.submit();
            expect(MockArticleService.save).toHaveBeenCalled();
        });
    });
});
