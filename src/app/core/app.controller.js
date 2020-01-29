(function () {
    'use strict';

    angular.module('main').controller("BaseController", ControllerFn);

    ControllerFn.$inject = ["$state"];

    /**
     * Controller
     *
     * @constructor
     */
    function ControllerFn($state) {
        var vm = this;

        vm.state = $state;
    }

})();