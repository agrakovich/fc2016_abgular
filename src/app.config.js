const AppConfig = ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';
    
    $stateProvider.state('app', {
        //url: '/articles',
        abstract: true,
        template: '<ui-view/>'
    });

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $urlRouterProvider.otherwise('/');
};

export default AppConfig;