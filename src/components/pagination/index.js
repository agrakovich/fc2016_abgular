import PaginationCtrl from './controller';
import './style.scss';

const Pagination = {
    bindings: {
        totalPages: '=',
        currentPage: '='
    },
    controller: PaginationCtrl,
    templateUrl: '/components/pagination/template.html'
};

export default Pagination;