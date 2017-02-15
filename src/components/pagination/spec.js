import PaginationController from './controller'
import uiRouter from 'angular-ui-router'

describe('Pagination', () => {

    let $rootScope;

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
    }));

    describe('PaginationController', () => {

        // controller specs
        let controller, $scope;
        beforeEach(() => {
            $scope = $rootScope.$new();
            spyOn($scope, "$emit");
            controller = new PaginationController($scope);
        });

        it('controller pageRange should return array of pages', () => {
            const pages = controller.pageRange(5);
            expect(pages.length).toEqual(5);
        });

        it('controller changePage should emit setPageTo event', () => {
            controller.changePage(5);
            expect($scope.$emit).toHaveBeenCalledWith("setPageTo", 5);
        });

    });
});
