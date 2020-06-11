window.addEventListener("load", function() {
    var keyDownUp = function(event) {
            controller.keyDownUp(event.type, event.keyCode);
        }
        //reescalado
    var resize = function() {

            display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
            display.render();
        }
        //renderizado
    var render = function() {
            //dibujamos el mapa
            display.dibujaMapa(loader.tile_set_image, game.world.tile_set.columnas, game.world.mapa, game.world.columnas, game.world.tile_set.tile_size);
            //recogemos los frames para la animacion
            let frame_personaje = game.world.tile_set.array_frames[game.world.personaje.f_value];
            //dibujamos el personaje con los frames y la posicion correspondientes
            display.dibujaObjeto(loader.tile_set_image, frame_personaje.x, frame_personaje.y, game.world.personaje.x, game.world.personaje.y, frame_personaje.width, frame_personaje.height);
            for (let i = 0; i < game.world.coins.length; i++) {
                let coin = game.world.coins[i];
                let f = game.world.tile_set.array_frames[coin.f_value];
                display.dibujaObjeto(loader.tile_set_image, f.x, f.y, coin.x, coin.y, f.width, f.height);
            }
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
        //si el personaje colisiona con una puerta inizializa la variable gate la cual indica que nivel cargar
        if (game.world.gate) {
            //paramos el juego
            engine.stop();
            //recogemos el nuevo nivel y lo cargamos
            loader.rqJSON("json/nivel" + game.world.gate.nivel_destino + ".json", (nivel) => {
                //cargamos el nivel
                game.world.cargarNivel(nivel);
                //iniciamos el juego de nuevo
                engine.start();
            });
            return;
        }

    }

    //inicializar
    var loader = new Loader();
    var controller = new Controller();
    var game = new Game();
    var display = new Display(document.querySelector("canvas"));
    var engine = new Engine(1000 / 30, render, update);

    //cargar    
    display.buffer.canvas.height = game.world.height;
    display.buffer.canvas.width = game.world.width;
    display.buffer.imageSmoothingEnabled = false;

    loader.rqJSON("json/nivel" + game.world.id_nivel + ".json", (nivel) => {
        game.world.cargarNivel(nivel);

        loader.rqTileImage("tiles/tiles.png", (imagen) => {
            loader.tile_set_image = imagen;
            resize();
            engine.start();
        })
    })



    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup", keyDownUp);
    window.addEventListener("resize", resize);
});