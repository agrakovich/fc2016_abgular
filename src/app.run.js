const AppRun = ($rootScope, $state) => {
    "ngInject";

    $rootScope.$on("$stateChangeSuccess", (event, toState) => $rootScope.setPageTitle(toState.title));
    $rootScope.$on("$stateChangeError", console.log.bind(console));

    $rootScope.setPageTitle = (title) => {
        $rootScope.pageTitle = "";
        if (title) {
            $rootScope.pageTitle += title;
            $rootScope.pageTitle += " \u2014 ";
        }
    };

    $rootScope.$state = $state;

};

export default AppRun;