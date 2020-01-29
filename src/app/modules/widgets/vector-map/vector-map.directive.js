(function () {
    'use strict';

    angular.module('main').directive('vectorMap', DirectiveFn);

    /**
     * Directive
     *
     * @returns {{restrict: string, scope: {data: string}, link: linkFn}}
     * @constructor
     */
    function DirectiveFn() {

        return {
            restrict: "E",
            scope: {
                data: "="
            },
            link: linkFn
        };

    }

    function linkFn($scope, $element, $attrs)  {
        // World map by jvectormap
        $('#' + $attrs.id).vectorMap($scope.data);
    }
})();
