(function () {
    'use strict';

    angular.module('main').directive('footerLayout', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {}, bindToController: boolean, controller: ControllerFn, controllerAs: string, templateUrl: string}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "EA",
            scope: {},
            bindToController: true,
            controller: ControllerFn,
            controllerAs: "vmFooter",
            templateUrl: "app/modules/footer/footer.html"
        };

    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function ControllerFn() {
        var vm = this;
    }
})();
