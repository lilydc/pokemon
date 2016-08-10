aplicacion.controller("PokemonCtrl", function ($scope, $http) {

    $scope.nuevoPokemon = {
        nombre: "",
        descripcion: "",
        imagen: "",
        numeroDePokemon: "",
        habilidad: "",
        habilidadOculta: "",
        color: "",
        velocidad: "",
        fortaleza: "",
        precision: "",
        resistencia: "",
        salto: ""
    }

    //$scope.botonCrearDeshabilitado = false;

    $scope.ingresarPokemon = function () {

        //$scope.botonCrearDeshabilitado = true;

        $http({
            method: "POST",
            url: "http://localhost:1337/Pokemon",
            data: $scope.nuevoPokemon
        }).then(
            function (respuesta) {

                //$scope.cargarUsuarios();
                $scope.pokemon.push(respuesta.data);
                $scope.resetearNuevoPokemon();
                //$scope.botonCrearDeshabilitado = false;

                console.log(respuesta);
            },
            function (error) {
                //$scope.botonCrearDeshabilitado = false;
                console.log(error);
            });

    }

    $scope.cargarPokemon = function () {

        $http({
            method: "GET",
            url: "http://localhost:1337/Pokemon",
            isArray: true
        }).then(
            function (respuesta) {
                $scope.pokemons = respuesta.data;
                console.log(respuesta);
            },
            function (error) {
                console.log(error);
            });



    }

    $scope.resetearNuevoPokemon = function () {

        $scope.nuevoPokemon = {
            nombre: "",
            descripcion: "",
            imagen: "",
            numeroDePokemon: "",
            habilidad: "",
            habilidadOculta: "",
            color: "",
            velocidad: "",
            fortaleza: "",
            precision: "",
            resistencia: "",
            salto: ""
        }
    }

    $scope.cargarPokemon();

    $scope.editarPokemon = function (pokemon) {
        /* if (pokemon.numeroDePokemon) {
             pokemon.descripcion = pokemon.nuevaFecha
         }*/
        $http({
            method: "PUT",
            url: "http://localhost:1337/Pokemon/" + pokemon.nombre,
            data: {
                nombre: pokemon.nombre,
                descripcion: pokemon.descripcion,
                imagen: pokemon.imagen,
                numeroDePokemon: pokemon.numeroDePokemon,
                habilidad: pokemon.habilidad,
                habilidadOculta: pokemon.habilidadOculta,
                color: pokemon.color,
                velocidad: pokemon.velocidad,
                fortaleza: pokemon.fortaleza,
                precision: pokemon.precision,
                resistencia: pokemon.resistencia,
                salto: pokemon.salto
            }
        }).then(
            function (respuesta) {
                pokemon.mostrar = !pokemon.mostrar
            },
            function (error) {
                console.log(error);
            });
    }

    $scope.eliminarPokemon = function (pokemon) {
        $http({
            method: "DELETE",
            url: "http://localhost:1337/Pokemon/" + pokemon.nombre
        }).then(
            function (respuesta) {

                for (var i = 0; i < $scope.pokemon.length; i++) {
                    if ($scope.pokemons[i].id == pokemon.id) {
                        $scope.pokemons.splice(i, 1);
                    }
                }
            },
            function (error) {
                console.log(error);
            });
    }
});