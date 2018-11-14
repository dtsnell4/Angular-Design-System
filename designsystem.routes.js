(function () {

    angular.module('AppCentral.designsystem').config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/:slug/designsystem', {
                templateUrl: 'app/designsystem/designsystem.tpl.html',
                title: 'Design System',
                controller: 'designsystemController',
                controllerAs: 'vm',
            })
            .when('/:slug/sandbox', {
                templateUrl: 'app/designsystem/sandbox.tpl.html',
                title: 'Sandbox',
                controller: 'designsystemController',
                controllerAs: 'vm',
            });
    }
})();