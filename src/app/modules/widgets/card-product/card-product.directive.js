(function () {
  'use strict';

  angular.module('main').directive('cardProduct', DirectiveFn);

  /**
   * Directive
   *
   * @returns {{restrict: string, scope: {}, bindToController: boolean, controller: ControllerFn, controllerAs: string, templateUrl: string}}
   * @constructor
   */
  function DirectiveFn() {

      return {
          restrict: "EA",
          scope: {
              data: "="
          },
          bindToController: true,
          controller: ControllerFn,
          controllerAs: "vmCardProduct",
          templateUrl: "app/modules/widgets/card-product/card-product.html"
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
