var aplicacion = angular.module("pokemon", ['ui.router']);

aplicacion.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('inicio', {
            url: "/inicio",
            templateUrl: "Vistas/Inicio.html",
            controller: "InicioCtrl"
        })
        .state('pokemon', {
            url: "/pokemon",
            templateUrl: "Vistas/Pokemon.html",
            controller: "PokemonCtrl"
                /*})
.state('tragos', {
        url: "/tragos",
        templateUrl: "Vistas/Tragos.html",
        controller: "TragosCtrl"
    })
    .state('chumas', {
        url: "/usuario/:idUsuario/chuma",
        templateUrl: "Vistas/Chumas.html",
        controller: "ChumasCtrl"
    })
    .state('gastos', {
            url: "/usuario/:idUsuario/chuma/:idChuma/gastos",
            templateUrl: "Vistas/Gastos.html",
            controller: "GastosCtrl"*/
        });
});