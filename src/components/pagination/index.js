import PaginationCtrl from './controller';
import './styles.scss';

const Pagination = {
    bindings: {
        totalPages: '=',
        currentPage: '='
    },
    controller: PaginationCtrl,
    //templateUrl: './template.html'
    template: `<div class="pagination">
    <ul>
        <li><a  ng-repeat="pageNumber in $ctrl.pageRange($ctrl.totalPages)" ng-click="$ctrl.changePage(pageNumber)">{{ pageNumber }}</a></li>
    </ul>
</div>`
};

export default Pagination;