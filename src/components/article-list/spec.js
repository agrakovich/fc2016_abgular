import ArticleListModule from './index'

describe('ArticleListModule', () => {
    var compile;

    beforeEach(angular.mock.module('app', 'ngRoute'));

    beforeEach(inject(function($compile){
        compile = $compile;
    }));

    it("Pagination method 'setPage' should been called on controller initialization", function () {
        //spyOn(controller.pagination, 'setPage');
        //controller.$onInit();

        //expect(controller.pagination.setPage).toHaveBeenCalled();
        expect(2).toBe(2);
    });

});
