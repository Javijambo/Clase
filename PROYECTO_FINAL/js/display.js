const Display = function(canvas) {
    this.buffer = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");
    this.cartelVidas = document.getElementById("vidas");

    //funcion de dibujar un mapa, recorremos el array y por cada valor seteamos el origena recortar y el destino, después lo dibujamos con dibujarImagen()
    this.dibujaMapa = function(img, img_col, mapa, m_col, tile_size) {
            for (let i = mapa.length - 1; i > -1; --i) {
                //recogemos el valor 
                let value = mapa[i];
                //recogemos el tile
                let origen_x = (value % img_col) * tile_size;
                let origen_y = Math.floor(value / img_col) * tile_size;
                let destino_x = (i % m_col) * tile_size;
                let destino_y = Math.floor(i / m_col) * tile_size;
                //pintamos la tile en el buffer 
                this.buffer.drawImage(img, origen_x, origen_y, tile_size, tile_size, destino_x, destino_y, tile_size, tile_size);
            }

        }
        //funcion de dibujar el personaje 
    this.dibujaObjeto = function(img, origen_x, origen_y, destino_x, destino_y, width, height) {

        this.buffer.drawImage(img, origen_x, origen_y, width, height, Math.round(destino_x), Math.round(destino_y), width, height);
    }

    this.dibujaSierra = function(objeto, c1, c2) {
        this.buffer.fillStyle = c1;
        this.buffer.fillRect(Math.round(objeto.x), Math.round(objeto.y), objeto.width, objeto.height);
        this.buffer.fillStyle = c2;
        this.buffer.fillRect(Math.round(objeto.x + 2), Math.round(objeto.y + 2), objeto.width - 4, objeto.height - 4);
    }

    this.resize = function(width, height, ratio) {
        //para que se reescale correctamente tenemos que comprobar que el ratio de altura : anchura sea el mismo
        if (height / width > ratio) {
            this.context.canvas.height = width * ratio;
            this.context.canvas.width = width;

        } else {
            this.context.canvas.height = height;
            this.context.canvas.width = height / ratio;
        }
        //para que se vean bien en pixel art y no aparezca borroso tras escalado los pixeles
        this.context.imageSmoothingEnabled = false;

    }

    this.gameOver = function() {

        alert("Game Over");
    }
}

Display.prototype = {
    constructor: Display,
    render: function() {
        this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}