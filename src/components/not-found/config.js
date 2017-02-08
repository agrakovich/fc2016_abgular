const NotFoundConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.notFound", {
        url: "/404",
        //templateUrl: "../src/components/not-found/template.html",
        template: `<div><h1>Not found</h1></div>`,
        title: "Not found"
    });

};

export default NotFoundConfig;