(function () {
  'use strict';

  angular.module('main').config(configFn);

  /**
   * @ngInject
   * @type {string[]}
   */
  configFn.$inject = ['$stateProvider'];

  /**
   * Config
   *
   * @param $stateProvider
   */
  function configFn($stateProvider) {
      $stateProvider.state('app.empresa', {
          url: '/empresa/:empresaId',
          views: {
            'content@app': {
              templateUrl: 'app/pages/cadastro/empresa/empresa.html',
              controller: ControllerFn,
              controllerAs: 'vmEmpresa'
            }
          },
          params: {
            empresaId: null,
            alerts: null,
          }
      });
  }

  ControllerFn.$inject = [
    '$location',
    '$scope',
    '$http',
    '$stateParams',
    '$state',
    '$filter',
];

  /**
   * Controller Function
   *
   * @constructor
   */
  function ControllerFn($location, $scope, $http, $stateParams, $state, $filter ) {
    var vm = this;
    vm.empresa = {};
    vm.empresaId = $stateParams.empresaId;

    vm.$state = $state;
    vm.formSubmitted = false;
    vm.alerts = [];
    vm.$filter = $filter;

    if ($stateParams.alerts) {
        vm.alerts.push($stateParams.alerts)
    }

    if(!vm.empresaId) {
      init();
    } else {
      $http.get("http://localhost:3333/empresa/"+vm.empresaId)
      .then( function (res) {
          vm.empresa = res.data.empresa;
          init();
      }).catch( function (err) {
          console.log(err);
      })
    }

    function init() {
      $(document).ready(function () {
        //Initialize Select2 Elements
        $('.select2').select2()
        //Datemask dd/mm/yyyy
        $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
        //Money Euro
        $('[data-mask]').inputmask()

        $("input[id*='telefone']").inputmask('(99) [9]9999-9999');
        
        $("input[id*='cnpj']").inputmask({
          mask: ['99.999.999/9999-99'],
          keepStatic: true
        });

        $("input[id*='cpf']").inputmask({
          mask: ['999.999.999-99'],
          keepStatic: true
        });
      });
    }

    vm.save = function (isValid) {
      if (isValid) {
        var req = {
          method: 'POST',
          url: 'http://localhost:3333/empresa/',
          // headers: {
          //   'Content-Type': undefined
          // },
          data: JSON.stringify(vm.empresa)
         }

        // var method = 'POST';
        // var url = 'http://localhost:3333/empresa/';

        if (vm.empresaId) {
          req.method = 'PUT';
          req.url = req.url+vm.empresaId
        }
        
        // $http({method, url}, JSON.stringify(vm.empresa))
        $http(req)
        .then( function (res) {
          var msg = 'Emprasa foi atualizada.';

          if(req.method === 'POST') {
            msg = 'Emprasa foi adcionada.';
          }

          var alert = { type: 'success', 'title': 'Successo!', msg };
          $state.go($state.current, { alerts: alert})
        })
        .catch( function (error) {
          console.log(error);
          alert = { type: 'error', 'title': 'Erro!', msg: error.data };
          $state.go($state.current, { alerts: alert})
        })
      } else {
        vm.formSubmitted = true
      }
    }
  }
})();
