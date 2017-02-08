export default class MinTextLengthDirective {

    constructor() {
        'ngInject';

        this.restrict = 'A';
        this.require = 'ngModel',
        this.scope =  {
            value: '=minTextLength'
        };
    }

    compile() {
        return this.link;
    }

    link(scope, element, attr, ngModel) {
        ngModel.$validators.isMinTextLength = function (value) {
            let status = true;
            let minLength = scope.value;
            if (value && value.length < minLength) {
                status = false;
            }
            return status;
        }
    }
}