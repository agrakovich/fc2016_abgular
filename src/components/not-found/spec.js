import NotFoundModule from './index'
import uiRouter from 'angular-ui-router'

describe('NotFoundModule', () => {

    let $rootScope, $state, $location, $timeout;

    beforeEach(window.module(NotFoundModule, uiRouter));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $timeout = $injector.get('$timeout');
    }));

    describe('NotFoundModule', () => {
        it('NotFoundModule component should be visible when navigates to /404', () => {
            $location.url('/404');
            $rootScope.$digest();
            $timeout( () => {
                expect($state.current.component).toEqual('app.notFound');
            });
        });
    });
});
