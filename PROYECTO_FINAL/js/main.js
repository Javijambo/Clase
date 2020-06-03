window.addEventListener("load", function(event) {
    var keyDownUp = function(event) {
            controller.keyDownUp(event.type, event.keyCode);
        }
        //reescalado
    var resize = function(event) {

            display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
            display.render();
        }
        //renderizado
    var render = function() {
            display.dibujaMapa(loader.tile_set_image, game.world.tile_set.columnas, game.world.mapa, game.world.columnas, game.world.tile_set.tile_size);
            display.dibujaPersonaje(game.world.personaje, game.world.personaje.color1, game.world.personaje.color2);
            display.dibujaSierra(game.world.sierra, "#A9A9A9", "#C0C0C0");
            display.render();
        }
        //update, setea el movimiento del personaje al que es dependiendo de que tecla hayamos pulsado
    var update = function() {

        if (controller.izq.active) {
            game.world.personaje.moverIzq();
        }
        if (controller.dcha.active) {
            game.world.personaje.moverDcha();
        }
        if (controller.saltar.active) {
            game.world.personaje.saltar();
            controller.saltar.active = false;
        }
        if (game.world.personaje.vidas < 0) {
            display.gameOver();
            game.world.personaje.vidas = 3;
        }
        //añadimos el cartel de  vidas restantes
        display.cartelVidas.innerHTML = "Vidas restantes: " + game.world.personaje.vidas;
        game.update();
    }

    //inicializar
    var loader = new Loader();
    var controller = new Controller();
    var game = new Game();
    var display = new Display(document.querySelector("canvas"));
    var engine = new Engine(1000 / 30, render, update);

    //cargar

    loader.rqJSON("json/nivel" + game.world.id_nivel + ".json", (nivel) => {
        game.world.cargarNivel(nivel);

        loader.rqTileImage("tiles/tiles.png", (imagen) => {
            loader.tile_set_image = imagen;
            resize();
            engine.start();
        })
    })

    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;

    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup", keyDownUp);
    window.addEventListener("resize", resize);
});