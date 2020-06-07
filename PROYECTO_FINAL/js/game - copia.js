const Game = function() {
    this.world = new Game.World();
    this.update = function() {
        this.world.update();
    }
}

Game.prototype = {
    constructor: Game
}

//Tile set
Game.TileSet = function(tile_size, columnas) {

    this.tile_size = tile_size;
    this.columnas = columnas;

    var frame = Game.TileSet.Frame;
    this.array_frames = [
        //mirando derecha [0]
        new frame(196, 38, 21, 26),
        //moviendose dcha [1-6] el frame [4] equivale al salto derecha.
        new frame(166, 6, 21, 26), new frame(197, 6, 21, 26), new frame(229, 6, 21, 26), new frame(262, 6, 21, 26), new frame(293, 6, 21, 26), new frame(325, 6, 21, 26),
        //mirando izq [7]
        new frame(229, 38, 21, 26),
        //moviendose izq [8-14], frame [10] equivale al salto izquierda
        new frame(166, 38, 21, 26), new frame(134, 38, 21, 26), new frame(102, 38, 21, 26), new frame(70, 38, 21, 26), new frame(38, 38, 21, 26), new frame(6, 38, 21, 26),

    ]
}
Game.TileSet.prototype = { constructor: Game.TileSet };

//para definir los frames dentro de los arrays de tiles para cada animacion
Game.TileSet.Frame = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
Game.TileSet.Frame.prototype = { constructor: Game.TileSet.Frame };

Game.World = function(friccion = 0.10, gravedad = 2) {

    this.collider = new Game.Collider();

    //variables de movimiento
    this.friccion = friccion;
    this.gravedad = gravedad;

    this.columnas = 38;
    this.filas = 18;

    //instanciacion de objetos
    this.tile_set = new Game.TileSet(32, 10);
    this.personaje = new Game.Object.Personaje();
    this.sierra = new Game.Sierra();

    this.id_nivel = "1";

    this.height = this.tile_set.tile_size * this.filas;
    this.width = this.tile_set.tile_size * this.columnas;
}

Game.World.prototype = {

    constructor: Game.World,

    //metodo para cargar niveles a partir de jsons
    cargarNivel: function(nivel) {
        this.mapa = nivel.mapa;
        this.columnas = nivel.columnas;
        this.filas = nivel.filas;
        this.id_nivel = nivel.id_nivel;
    },

    //funcion para hacer que no se salga de los limites del mapa
    collision: function(o) {

        var arriba, abajo, izq, dcha, value;

        //valores de columna fila de la esquina superior izquierda 
        arriba = Math.floor(o.getArriba() / this.tile_set.tile_size);
        izq = Math.floor(o.getIzq() / this.tile_set.tile_size);
        value = this.mapa[arriba * this.columnas + izq];
        this.collider.collide(value, o, izq * this.tile_set.tile_size, arriba * this.tile_set.tile_size, this.tile_set.tile_size);

        //esquina superior derecha
        arriba = Math.floor(o.getArriba() / this.tile_set.tile_size);
        dcha = Math.floor(o.getDcha() / this.tile_set.tile_size);
        value = this.mapa[arriba * this.columnas + dcha];
        this.collider.collide(value, o, dcha * this.tile_set.tile_size, arriba * this.tile_set.tile_size, this.tile_set.tile_size);

        //esquina inferior izquierda
        abajo = Math.floor(o.getAbajo() / this.tile_set.tile_size);
        izq = Math.floor(o.getIzq() / this.tile_set.tile_size);
        value = this.mapa[abajo * this.columnas + izq];
        this.collider.collide(value, o, izq * this.tile_set.tile_size, abajo * this.tile_set.tile_size, this.tile_set.tile_size);

        //esquina inferior derecha
        abajo = Math.floor(o.getAbajo() / this.tile_set.tile_size);
        dcha = Math.floor(o.getDcha() / this.tile_set.tile_size);
        value = this.mapa[abajo * this.columnas + dcha];
        this.collider.collide(value, o, dcha * this.tile_set.tile_size, abajo * this.tile_set.tile_size, this.tile_set.tile_size);
    },

    update: function() {

        //actualizar por friccion y gravedad
        this.personaje.vx *= this.friccion;
        this.personaje.vy += this.gravedad;
        this.personaje.moverPersonaje();
        this.personaje.animarPersonaje();

        //this.personaje.vy*=this.friccion;
        this.sierra.update();
        this.collision(this.personaje);
    }
}

//controla las colisiones dependiendo del tile que sea (por ejemplo si colisiona con pinchos, bloques etc)
Game.Collider = function() {
    //colisiones dependiendo del bloque que sea
    this.collide = function(value, object, tile_x, tile_y, tile_size) {
        switch (value) {
            case 0:
                if (this.colisionSuperior(object, tile_y)) return;
                if (this.colisionIzq(object, tile_x)) return;
                if (this.colisionDcha(object, tile_x + tile_size)) return;
                this.colisionInferior(object, tile_y + tile_size);
                break;
            case 2:
                this.colisionSuperior(object, tile_y);
                break;
            case 3:
                this.colisionPinchosSup(object, tile_y - tile_size / 2)
                break;
            case 4:
                this.colisionPinchosInf(object, tile_y + (tile_size / 3.5))
                break;
        }
    }
}

//funciones para cada tipo de colision
Game.Collider.prototype = {
    constructor: Game.Collider,

    //**********************************SUPERIOR***************************** */
    colisionSuperior: function(o, tile_sup) {
        if (o.getAbajo() > tile_sup && o.getAbajoAux() <= tile_sup) {
            o.setAbajo(tile_sup - 0.01);
            o.vy = 0;
            o.saltando = false; //hacemos que deje de saltar si colisiona arriba
            return true;
        }
        return false;
    },

    //**********************************INFERIOR***************************** */
    colisionInferior: function(o, tile_inf) {
        if (o.getArriba() < tile_inf && o.getArribaAux() >= tile_inf) {
            o.setArriba(tile_inf);
            o.vy = 0;
            return true;
        }
        return false;
    },

    //**********************************IZQUIERDA***************************** */
    colisionIzq: function(o, tile_izq) {
        if (o.getDcha() > tile_izq && o.getDchaAux() <= tile_izq) {
            o.setDcha(tile_izq - 0.01);
            o.vx = 0;
            return true;
        }
        return false;
    },

    //**********************************DERECHA***************************** */
    colisionDcha: function(o, tile_dcha) {
        if (o.getIzq() < tile_dcha && o.getIzqAux() >= tile_dcha) {
            o.setIzq(tile_dcha);
            o.vx = 0;
            return true;
        }
        return false;
    },

    colisionPinchosSup: function(o, tile_inf) {
        if (o.getArriba() > tile_inf && o.getArribaAux() <= tile_inf) {
            o.perderVida();
        }
        return false;
    },
    colisionPinchosInf: function(o, tile_inf) {
        if (o.getArriba() < tile_inf && o.getArribaAux() >= tile_inf) {
            o.perderVida();
        }
        return false;
    }
}

//constructor Objeto
Game.Object = function(x, y, width, height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.aux_x = x;
    this.y = y;
    this.aux_y = y;
}

Game.Object.prototype = {
    constructor: Game.Object,
    //gets
    getArriba: function() {
        return this.y;
    },
    getArribaAux: function() {
        return this.aux_y;
    },
    getAbajo: function() {
        return this.y + this.height;
    },
    getAbajoAux: function() {
        return this.aux_y + this.height;
    },
    getIzq: function() {
        return this.x;
    },
    getIzqAux: function() {
        return this.aux_x;
    },
    getDcha: function() {
        return this.x + this.width;
    },
    getDchaAux: function() {
        return this.aux_x + this.width;
    },

    //sets
    setArriba: function(i) {
        this.y = i;
    },
    setArribaAux: function(i) {
        this.aux_y = i;
    },
    setAbajo: function(i) {
        this.y = i - this.height;
    },
    setAbajoAux: function(i) {
        this.aux_y = i - this.height;
    },
    setIzq: function(i) {
        this.x = i;
    },
    setIzqAux: function(i) {
        this.aux_x = i;
    },
    setDcha: function(i) {
        this.x = i - this.width;
    },
    setDchaAux: function(i) {
        this.aux_x = i - this.width;
    },
}

Game.Object.Animator = function(frame_set, delay) {
    this.count = 0;
    if (delay >= 1) {
        this.delay = delay;
    } else { delay = 1; }
    this.frame_set = frame_set;
    this.f_index = 0;
    this.f_value = frame_set[0];
    this.moving = false;
}

Game.Object.Animator.prototype = {
    constructor: Game.Object.Animator,

    //funcion para animar dependiendo si se está moviendo o no
    animar: function() {
        if (this.moving) {
            this.animacion();
        }
    },

    //setear el nuevo array de frames
    setFrame(frame_set, moving, delay = 20, f_index = 0) {
        if (this.frame_set === frame_set) { return; }
        this.count = 0;
        this.delay = delay;
        this.f_index = f_index;
        this.f_value = frame_set[f_index];
        this.moving = moving;
    },

    //funcion para recorrer el array de frames en bucle
    animacion: function() {
        this.count++;
        while (this.count > this.delay) {
            this.count -= this.delay;
            if (this.f_index < this.frame_set.length - 1) {
                this.f_index++;
            } else {
                this.f_index = 0;
            }
            this.f_value = this.frame_set[this.f_index];
        }
    }
}

//constructor Personaje
Game.Object.Personaje = function() {
    Game.Object.call(this, 35, 450, 21, 26);
    Game.Object.Animator.call(this, Game.Object.Personaje.prototype.frames["quieto-dcha"], 10);
    this.vx = 0;
    this.vy = 0;
    this.saltando = true;
    this.ladomira = 1;
    this.vidas = 3;
}

//funciones personaje
Game.Object.Personaje.prototype = {
    constructor: Game.Object.Personaje,

    //arrays para las animaciones
    frames: {
        //arrays animaciones hacia la derecha
        "quieto-dcha": [0],
        "moviendose-dcha": [1, 2, 3, 4, 5, 6],
        "saltando-dcha": [4],
        //arrays animaciones hacia la izquierda
        "quieto-izq": [7],
        "moviendose-izq": [8, 9, 10, 11, 12, 13],
        "saltando-izq": [10],
    },

    //funcion saltar
    saltar: function() {
        if (!this.saltando) {
            this.saltando = true;
            this.vy -= 20;
        }
    },

    //movimiento izq
    moverIzq: function() {
        this.vx -= 50;
        this.ladomira = -1;
    },

    //movimiento dcha
    moverDcha: function() {
        this.vx += 50;
        this.ladomira = 1;
    },

    perderVida: function() {
        this.x = 35;
        this.y = 450;
        this.vidas--;
        this.saltando = false;
        this.vx = 0;
        this.vy = 0;
    },

    moverPersonaje: function() {
        this.aux_x = this.x;
        this.aux_y = this.y;
        this.x += this.vx;
        this.y += this.vy;
    },

    //funcion de animar al personaje
    animarPersonaje: function() {


        if (this.vy < 0) {
            if (this.ladomira < 0) {
                this.setFrame(this.frames["saltando-izq"], false);
            } else {
                this.setFrame(this.frames["saltando-dcha"], false);
            }
        } else if (this.ladomira < 0) {
            if (this.vx < -0.1) {
                this.setFrame(this.frames["moviendose-izq"], true, 5);
            } else {
                this.setFrame(this.frames["quieto-izq"], false);
            }
        } else if (this.ladomira > 0) {
            if (this.vx > 0.1) {
                this.setFrame(this.frames["moviendose-dcha"], true, 5);
            } else {
                this.setFrame(this.frames["quieto-dcha"], false);
            }
        }

        this.animar();
    }
}

Game.Sierra = function() {
    Game.Object.call(this, 465, 525, 15, 15);
    this.vx = 0;
    this.vy = 0;
}
Game.Sierra.prototype = {
    update: function() {
        this.vx += 0.08
        this.x = this.aux_x + Math.cos(this.vx) * 110;
    }
}

Object.assign(Game.Object.Personaje.prototype, Game.Object.prototype);
Object.assign(Game.Object.Personaje.prototype, Game.Object.Animator.prototype);
Game.Object.Personaje.prototype.constructor = Game.Object.Personaje;

Object.assign(Game.Sierra.prototype, Game.Object.prototype);
Game.Sierra.prototype.constructor = Game.Sierra;