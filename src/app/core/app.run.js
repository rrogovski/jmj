(function () {
    'use strict';

    angular.module('main').run(RunFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    RunFn.$inject = ["UserService", "$location"];

    /**
     * Run
     *
     * @param UserService
     * @param $location
     * @constructor
     */
    function RunFn(UserService, $location) {
        if (!UserService.isLogined()) {
            $location.path("/login");
        }
    }

})();




