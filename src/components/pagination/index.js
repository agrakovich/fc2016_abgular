import PaginationCtrl from './controller'
const Pagination = {
    bindings: {
        totalPages: '=',
        currentPage: '='
    },
    controller: PaginationCtrl,
    //templateUrl: './template.html'
    template: `<nav>
    <ul>
        <li ng-class="{active: pageNumber === $ctrl.currentPage }" ng-repeat="pageNumber in $ctrl.pageRange($ctrl.totalPages)" ng-click="$ctrl.changePage(pageNumber)">
            <a href="">{{ pageNumber }}</a>
        </li>
    </ul>`
};

export default Pagination;