(function () {
  'use strict';

  angular.module('main').directive('cardProduto', DirectiveFn);

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
          controllerAs: "vmCardProduto",
          templateUrl: "app/modules/widgets/card-produto/card-produto.html"
      };

  }

  /**
   * Controller Function
   *
   * @constructor
   */
  function ControllerFn() {
      var vm = this;
      vm.produto = {};
      vm.produto.imageurl = 'https://i.pinimg.com/736x/72/9e/ab/729eab53deed60267c202c140ab75ae5.jpg';
      vm.produto.rate = 4;
      vm.produto.likes = 100;
      vm.produto.dislikes = 10;
      vm.produto.preco = 1550.00;
  }
})();
