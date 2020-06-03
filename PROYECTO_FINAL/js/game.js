const Game = function() {
    this.world = new Game.World();
    this.update = function() {
        this.world.update();
    }
}

Game.prototype = {
    constructor: Game
}

Game.World = function(friccion = 0.10, gravedad = 2) {

    this.collider = new Game.Collider();
    //variables de movimiento
    this.friccion = friccion;
    this.gravedad = gravedad;

    this.columnas = 38;
    this.filas = 18;

    //instanciacion de objetos
    this.tile_set = new Game.TileSet(32, 10);
    this.personaje = new Game.Personaje();
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
        this.personaje.vy += this.gravedad;
        this.personaje.update();
        this.personaje.vx *= this.friccion;
        //this.personaje.vy*=this.friccion;
        this.sierra.update();
        this.collision(this.personaje);
    }
}

//Tile set
Game.TileSet = function(tile_size, columnas) {
    this.image = new Image();
    this.tile_size = tile_size;
    this.columnas = columnas;
}
Game.TileSet.prototype = { constructor: Game.TileSet };

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
    //constructor Personaje
Game.Personaje = function() {
    Game.Object.call(this, 35, 450, 30, 30);
    this.color1 = "#000000";
    this.color2 = "#00FFFF";
    this.saltando = true;
    this.vx = 0;
    this.vy = 0;
    this.vidas = 3;
}

//funciones jugador
Game.Personaje.prototype = {
    saltar: function() {
        if (!this.saltando) {
            this.saltando = true;
            this.vy -= 20;
        }
    },
    moverIzq: function() {
        this.vx -= 5;
    },
    moverDcha: function() {
        this.vx += 5;
    },
    perderVida: function() {
        this.x = 35;
        this.y = 450;
        this.vidas--;
        this.saltando = false;
        this.vx = 0;
        this.vy = 0;
    },

    update: function() {
        this.aux_x = this.x;
        this.aux_y = this.y;
        this.x += this.vx;
        this.y += this.vy;
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

Object.assign(Game.Personaje.prototype, Game.Object.prototype);
Game.Personaje.prototype.constructor = Game.Personaje;

Object.assign(Game.Sierra.prototype, Game.Object.prototype);
Game.Sierra.prototype.constructor = Game.Sierra;