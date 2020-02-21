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
      $stateProvider.state('app.unidades', {
          url: '/unidades',
          views: {
              'content@app': {
                  templateUrl: 'app/pages/cadastro/unidades/unidades.html',
                  controller: ControllerFn,
                  controllerAs: 'vmUnidades'
              }
          }
      });
  }

  ControllerFn.$inject = [
      '$location',
      '$http',
      '$state',
  ];

  /**
   * Controller Function
   *
   * @constructor
   * @param $location
   * @param $http
   * @param $state
   */
  function ControllerFn($location, $http, $state) {
      var vm = this;
      vm.state = $state;
      vm.unidades = {};

      $http.get("http://localhost:3333/unidade/")
      .then( function (res) {
          vm.unidades = res.data.unidades;

          initTables();

      }).catch( function (err) {
          console.log(err);
      })

      vm.delete = function (unidade) {
          swal({
              title: 'Tem certeza que deseja excluir?',
              text: 'Excluir: '+ unidade.nome +'\nNão será possível recuperar essa informação!',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: 'Sim, excluir!',
              cancelButtonText: 'Cancelar',
              closeOnConfirm: false,
              showLoaderOnConfirm: true,
              html: false
          }, function () {
              $http.delete('http://localhost:3333/unidade/'+ unidade.id)
              .then(function (res) {
                  console.log(res);
                  swal({
                      title: 'Excluído!',
                      text: res.data.unidade.nome + ', excluída!',
                      type: 'success',
                      confirmButtonText: 'OK',
                      closeOnConfirm: true
                  }, function () {
                      vm.state.reload();
                      // vm.state.go(vm.state.current, {}, {reload: true});
                      // $state.transitionTo($state.current, $stateParams, { 
                      //     reload: true, inherit: false, notify: false 
                      // });
                  })
              })
          })
      }

      function initTables() {
        $(document).ready(function () {
            $('#unidades').DataTable({
                'dom': 'frltip',
                'select': true,
                'paging'      : true,
                'lengthChange': true,
                'searching'   : true,
                'ordering'    : true,
                'info'        : true,
                'autoWidth'   : false,
                'columnDefs': [{
                'targets': 'no-sort',
                'orderable': false,
                }],
                'lengthMenu': [[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, 'Todos']],
                'language': { 
                    'emptyTable': "Sem dados disponíveis",
                    'loadingRecords': "Please wait .. ",
                    'zeroRecords': "No matching records found",
                    "sEmptyTable": "Nenhum registro encontrado",
                    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                    "sInfoPostFix": "",
                    "sInfoThousands": ".",
                    "sLengthMenu": "_MENU_ resultados por página",
                    "sLoadingRecords": "Carregando...",
                    "sProcessing": "Processando...",
                    "sZeroRecords": "Nenhum registro encontrado",
                    "sSearch": "Pesquisar",
                    "oPaginate": {
                        "sNext": "Próximo",
                        "sPrevious": "Anterior",
                        "sFirst": "Primeiro",
                        "sLast": "Último"
                    },
                    "oAria": {
                        "sSortAscending": ": Ordenar colunas de forma ascendente",
                        "sSortDescending": ": Ordenar colunas de forma descendente"
                    }
                }
            })
          });
      }      
  }
})();
