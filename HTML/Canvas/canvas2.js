//mensajes antes de comenzar el juego por si usuario quiere cambiar configuracion
var filas = prompt("¿Cuantas filas quieres que tenga el juego ? (Por defecto 3)");
var columnas = prompt("¿Cuantas columnas quieres que tenga el juego ? (Por defecto 5)");

//seleccionamos el elemento canvas para dibujar en el
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//seleccionamos el elemento canvas superior para dibujar en el cronometro vidas y puntuacion
var superior = document.getElementById("superior");
var ctxsuperior = superior.getContext("2d");

//seleccionamos elemento de instrucciones
var inst = document.getElementById("instrucciones");

//creamos variable x e y para indicar donde pondremos la bola al comenzar
var x = canvas.width / 2;
var y = canvas.height * 0.75; // la bola comienza en un cuarto de la altura desde abajo

var x2 = (canvas.width / 2) - (canvas.width / 10);
var y2 = canvas.height * 0.75;

//creamos varibales dx y dy para despues usarlas en el movimiento de la bola
var dxInicial = -2;
var dyInicial = -2;
var dx = dxInicial;
var dy = dyInicial;

var dxInicial2 = -2;
var dyInicial2 = -2;
var dx2 = dxInicial2;
var dy2 = dyInicial2;

// ballRadius mantendrá el radio del círculo dibujado y dependera del tamaño del canvas 
var ballRadius = canvas.width / 50;
var ballRadius2 = canvas.width / 50;

// creamos variable para la velocidad de la paleta y la inicialicamos a 20 (resultado de operacion para que la velocidad vaya acorde al tamaño )
var velocidad = canvas.width / 50;

//definimos la paleta para golpear la bola.
var paddleHeightInicial = canvas.width / 50;
var paddleWidthInicial = canvas.width / 5;
var paddleHeight = paddleHeightInicial;
var paddleWidth = paddleWidthInicial;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - paddleHeight;

//variables para comprobar si se pulsa el boton
var rightPressed = false;
var leftPressed = false;

//Variable para el numero de filas, si el usuario no introduce ninguna por defecto pondremos 3
var brickRowCount;
if (filas === "") {
    var brickRowCount = 3;
} else {
    var brickRowCount = filas;
}

//Variable para el numero de columnas, si el usuario no introduce ninguna por defecto pondremos 5
var brickColumnCount;
if (columnas === "") {
    var brickColumnCount = 5;
} else {
    var brickColumnCount = columnas;
}

//calculamos ancho del ladrillo dependiendo de las columnas 
var brickWidth = (canvas.width - (120 + (brickColumnCount - 1) * 10)) / brickColumnCount; //calculamos la anchura, restando al canvas 120(60+60 de margenes laterales) + espacio entre ladrillos*espacios que necesitamos y lo dividimos entre las columnas para que nos quede ajustado

//calculamos alto del ladrillo dependiendo de filas para que nos entren todas en un tercio del juego mas o menos(0.7)
var brickHeight;
if ((canvas.height - (60 + (brickRowCount - 1) * 10)) / brickRowCount > 40) {
    brickHeight = 40;
} else {
    brickHeight = (canvas.height * 0.7 - (60 + (brickRowCount - 1) * 10)) / brickRowCount;
};
var brickPadding = 10;
var brickOffsetTop = 60;
var brickOffsetLeft = 60;

//variable para contador de ladrillos
var score = 0;

///variable para tiempo cronometro
var tiempo = 0;
var tiempoms = 0;

//variable para las vidas del jugador
var lives = 3;


//metemos ladrillos en matriz bidimensional 
var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        //si status es 1 se dibujara si vale 0 no porque habra sido golpeado
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

//comprobamos que si se han pulsado las teclas de mov de paleta
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//comprobamos que si se hay movimiento del raton
document.addEventListener("mousemove", mouseMoveHandler, false);

var doblebola = false;
var raton = false;
//comprobamos si se a pulsado la tecla de derecha o izquierda y pondremos en true su valor
function keyDownHandler(e) {
    if (e.keyCode == 39) { //flecha derecha
        rightPressed = true;
    }
    else if (e.keyCode == 37) { //flecha izquierda
        leftPressed = true;
    }
    if (e.keyCode == 68) { //tecla D activamos la segunda bola 
        doblebola = true;
    }
    if (e.keyCode == 82) { //tecla R activamos el raton
        raton = true;
    }
    if (e.keyCode == 107) { //tecla + aumentamos velocidad de las dos bolas, y el inicial para cuando se resetee. If para no ponerle una velocidad imposible 
        if (dx > -6) {
            dx -= 0.1;
            dy -= 0.1;
            dxInicial -= 0.1;
            dyInicial -= 0.1;
        }
        if (dx2 > -6) {
            dx2 -= 0.1;
            dy2 -= 0.1;
            dxInicial2 -= 0.1;
            dyInicial2 -= 0.1;
        }
    }
    if (e.keyCode == 109) { //tecla - disminuimos velocidad de las dos bolas, y el inicial para cuando se resetee. If para comprobar que siempre tengan movimiento aunque sea minimo
        if (dx < -0.2) {
            dx += 0.1;
            dy += 0.1;
            dxInicial += 0.1;
            dyInicial += 0.1;
        }
        if (dx2 < -0.2) {
            dx2 += 0.1;
            dy2 += 0.1;
            dxInicial2 += 0.1;
            dyInicial2 += 0.1;
        }
    }
    if (e.keyCode == 56) { //tecla 8 disminuimos velocidad de la paleta
        if (velocidad > 10) {
            velocidad -= 10;
        }
    }
    if (e.keyCode == 57) { //tecla 9 aumentamos velocidad de la paleta
        if (velocidad < 60) {
            velocidad += 10;
        }

    }
}
//comprobamos si se a despulsado la tecla de derecha o izquierda y pondremos en false su valor
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}
//con el movimiento del raton hacemos que la paleta se mueva de un lado hacia el otro
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (raton) {
        if (relativeX > 0 && relativeX < canvas.width && paddleWidth == paddleWidthInicial) {
            paddleX = relativeX - paddleWidth / 2;
        }
    }


}

//dibujamos la bola en el canvas
function drawBall(x, y, r) {
    //siempre para añadir algo al canvas habra que meterlo entre begin y close path.
    ctx.beginPath();
    //indicamos donde comienza la bola y su tamaño y color
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}



//dibujamos la paleta en el canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

//dibujamos ladrillos
function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            //si el ladrillo no a sido golpeado lo dibujamos
            if (bricks[c][r].status == 1) {
                //calculamos en qué posición "x" e "y" se tiene que dibujar cada ladrillo
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

//añadimos contador a pantalla
function drawScore() {
    ctxsuperior.font = "20px Arial";
    ctxsuperior.fillStyle = "#ffffff";
    ctxsuperior.fillText("Puntuacion: " + score, 10, 25);
}

//añadimos cronometro
function drawCron() {
    ctxsuperior.font = "20px Arial";
    ctxsuperior.fillStyle = "#ffffff";
    ctxsuperior.fillText("Tiempo: " + tiempo, 425, 25);
}

//añadimos un contador de vidas
function drawLives() {
    ctxsuperior.font = "20px Arial";
    ctxsuperior.fillStyle = "#ffffff";
    ctxsuperior.fillText("Vidas: " + lives, canvas.width - 75, 25);
}
//audio para la victoria
function playAudio() {
    audio = document.getElementById('victoria');
    audio.play();
}

//comprobaremos en cada fotograma si la bola a chocado con el ladrilo
function collisionDetection() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            //comprobaremos si hay colisión y pondremos el "status" de ese ladrillo a 0 para no volver a pintarlo.
            if (b.status == 1) {
                //en cada ladrillo comprobaremos si el centro de la bola está dentro de las coordenadas de el y si es asi cambiaremos la dirección de la bola. 
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    //añadimos uno al contador de ladrillos colisionados
                    score++;
                }

                //en cada ladrillo comprobaremos si el centro de la bola2 está dentro de las coordenadas de el y si es asi cambiaremos la dirección de la bola. 
                if (x2 > b.x && x2 < b.x + brickWidth && y2 > b.y && y2 < b.y + brickHeight) {
                    dy2 = -dy2;
                    b.status = 0;
                    //añadimos uno al contador de ladrillos colisionados
                    score++;
                }

                //comprobamos que ya se hayan dado todos los ladrillos
                if (score == brickRowCount * brickColumnCount) {
                    playAudio();
                    alert("Enhorabuena has ganado!!!! \nTu tiempo es de: " + tiempo + " segundos");
                    document.location.reload();
                }
            }
        }
    }
}

//cuando perdemos quitamos canvas y ponemos video
function perder() {
    canvas.style.display = "none";
    superior.style.display = "none";
    inst.style.display = "none";
    video = document.getElementById('perder');
    video.play();
    setTimeout('alert("El juego se termino")', 4000); //mandamos mensaje a los 6 segundos para que haya cargado la animacion del video completa
    setTimeout('document.location.reload()', 6000); //recargamos despues de ver el mensaje de gameover y aceptarlo
}

//perdemos vida, reiniciamos bola o bolas 
function reiniciar() {
    x = canvas.width / 2;
    y = canvas.width / 2;
    dx = dxInicial;
    dy = dyInicial;
    x2 = (canvas.width / 2) - (canvas.width / 10);
    y2 = canvas.width / 2;
    dx2 = dxInicial2;
    dy2 = dyInicial2;
    paddleHeight = paddleHeightInicial;
    paddleWidth = paddleWidthInicial;
    paddleX = (canvas.width - paddleWidth) / 2;
    paddleY = canvas.height - paddleHeight;
}

//pintamos barra vertical si es V horizontal si es H
function barra(p) {
    if (p == 'V') {
        paddleHeight = paddleWidthInicial;
        paddleWidth = paddleHeightInicial;
    } else if (p == 'H') {
        paddleHeight = paddleHeightInicial;
        paddleWidth = paddleWidthInicial;
    }
}

//subir,bajar,derecha o izquierda la paleta al pulsar tecla
function moverbarra(p) {

    if (p == 'D') {
        paddleX += velocidad;
    }
    if (p == 'I') {
        paddleX -= velocidad;
    }
    if (p == 'S') {
        paddleY -= velocidad;
    }
    if (p == 'B') {
        paddleY += velocidad;
    }
}

//pintamos todo el canvas y lo hacemos jugable
function draw() {
    //limpiamos el canvas cada vez que ejecutamos la funcion
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxsuperior.clearRect(0, 0, canvas.width, canvas.height);

    //usamos drawBricks() para dibujar ladrillos
    drawBricks();

    //usamos la funcion drawBall() para dibujar la bola
    drawBall(x, y, ballRadius);

    //usamos drawPaddle() para dibujar la paleta
    drawPaddle();

    //comprobamos las colisiones
    collisionDetection();

    //dibujamos contador
    drawScore();

    //dibujamos contador de vidas
    drawLives();

    //dibujamos cronometro
    drawCron();

    //COMPROBAMOS SI LA BOLA1 DA A LA PALETA POR LOS LADOS Y SI NO QUITAMOS VIDA

    //si el valor de x+posicion de la bola es mayor que la anchura del canvas- el radio de la bola  O sea menor que el radio de la bola 
    //haremos que la bola comience a ir hacia el otro lado poniendo el valor de su movimiento en negativos.
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        if (y > paddleY && y < paddleY + paddleHeight) {
            dx = -dx;
        } else {  //si hemos llegado aqui la bola no a dado en paleta y a tocado la parte inferior del tablero asique la quitamos una vida
            lives--;
            if (!lives) {  //si no tienes vidas el juego se acabo
                perder()
            } else {
                reiniciar()
            }
        }
    }

    //COMPROBAMOS QUE LA BOLA1 DE A LA PALETA POR DEBAJO

    if (y + dy < ballRadius) { //si el y de la bola+y de su posicion es inferior al radio cambiaremos el sentido de la bola con negativos porque rebota arriba
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) { //si el valor de y+posicion de la bola es mayor que la altura del canvas-el radio de la bola (parte inferior)
        if (x > paddleX && x < paddleX + paddleWidth) { //si el centro de la bola esta entre los limites derecho e izquierdo de la paleta(rebote en paleta) haremos que cambie el valor de y y suba 
            dy = -dy;
        }
        else {//si hemos llegado aqui la bola no a dado en paleta y a tocado la parte inferior del tablero asique la quitamos una vida
            lives--;
            if (!lives) { //si no tienes vidas el juego se acabo
                perder()
            }
            else {//si te quedan vidas sigue el juego 
                reiniciar()
            }
        }
    }


    if (doblebola) { //si pulsamos la letra D creamos la bola 2 y comprobamos sus golpeos

        drawBall(x2, y2, ballRadius2);;   //usamos la funcion drawBall2() para dibujar la bola2

        //COMPROBAMOS SI LA BOLA2 DA A LA PALETA POR LOS LADOS Y SI NO QUITAMOS VIDA

        if (x2 + dx2 > canvas.width - ballRadius || x2 + dx2 < ballRadius) {
            if (y2 > paddleY && y2 < paddleY + paddleHeight) {
                dx2 = -dx2;
            } else { //si hemos llegado aqui la bola no a dado en paleta y a tocado la parte inferior del tablero asique la quitamos una vida
                lives--;
                if (!lives) { //si no tienes vidas el juego se acabo
                    perder()
                } else {
                    reiniciar()
                }
            }
        }

        //COMPROBAMOS QUE LA BOLA2 DE A LA PALETA POR DEBAJO
        if (y2 + dy2 < ballRadius2) {  //si el y de la bola+y de su posicion es inferior al radio cambiaremos el sentido de la bola con negativos porque toca arriba y rebota
            dy2 = -dy2;
        } else if (y2 + dy2 > canvas.height - ballRadius) { //si el valor de y+posicion de la bola es mayor que la altura del canvas-el radio de la bola (se saldria por arriba)
            if (x2 > paddleX && x2 < paddleX + paddleWidth) { //si el centro de la bola esta ent re los limites derecho e izquierdo de la paleta(rebote en paleta) haremos que cambie el valor de y y suba 
                dy2 = -dy2;
            }
            else { //si hemos llegado aqui la bola no a dado en paleta y a tocado la parte inferior del tablero asique la quitamos una vida
                lives--;
                if (!lives) { //si no tienes vidas el juego se acabo
                    perder()
                }
                else { //si te quedan vidas sigue el juego 
                    reiniciar()
                }
            }
        }

        //añadimos movimiento a la bola 2
        x2 += dx2;
        y2 += dy2;

    }

    //comprobamos la flecha que se pulsa y la movemos
    if (rightPressed && (paddleX + paddleWidthInicial + velocidad) <= canvas.width && paddleY > canvas.height - (paddleHeightInicial * 2)) { //movimiento tecla derecha parte de abajo
        barra('H'); //pitamos barra en horizontal
        paddleY = canvas.height - paddleHeight;
        moverbarra('D'); // movemos barra a la derecha
    } else if (rightPressed && (paddleX + paddleWidthInicial + velocidad) > canvas.width && paddleY > canvas.height - (paddleHeightInicial * 2)) { //pintamos barra vertical en parte derecha abajo
        barra('V');
        paddleY = canvas.height - paddleWidthInicial;
        paddleX = canvas.width - paddleWidth;
    } else if (rightPressed && (paddleY - velocidad >= 0 && paddleX >= canvas.width - paddleHeightInicial)) { //movimiento tecla derecha parte de derecha
        moverbarra('S');
    } else if (rightPressed && (paddleY - velocidad < 0 && paddleX >= canvas.width - paddleHeightInicial)) { //pintamos barra horizontal arriba derecha
        paddleY = 0;
        paddleX = canvas.width - paddleWidthInicial;
        barra('H');
    } else if (rightPressed && (paddleY <= 0 && (paddleX + velocidad > 0 && paddleX <= canvas.width - paddleHeightInicial))) { //movimiento tecla derecha parte de arriba
        moverbarra('I');
    } else if (rightPressed && ((paddleY >= 0 && paddleY + paddleWidthInicial + velocidad <= canvas.height) && paddleX <= 0)) { //movimiento tecla derecha parte de izquierda
        paddleX = 0;
        barra('V');
        moverbarra('B');
    } else if (rightPressed && ((paddleY >= 0 && paddleY + paddleWidthInicial + velocidad > canvas.height) && paddleX <= 0)) { //pintamos barra horizontal abajo izquierda
        paddleY = canvas.height - paddleHeightInicial;
        paddleX = 0;
        barra('H');
    } else if (leftPressed && (paddleY > canvas.height - (paddleHeightInicial * 2) && paddleX - velocidad >= 0)) {  //movimiento tecla izquierda parte de abajo
        moverbarra('I');
    } else if (leftPressed && (paddleY > canvas.height - (paddleHeightInicial * 2) && paddleX - velocidad < 0)) { //pintamos vertical barra en parte izquierda abajo
        barra('V');
        paddleX = 0;
        paddleY = canvas.height - paddleWidthInicial;
    } else if (leftPressed && (paddleY >= 0 && paddleY + paddleWidthInicial + velocidad <= canvas.height) && paddleX >= canvas.width - paddleHeightInicial) { //movimiento tecla izquierda parte de derecha
        barra('V');
        paddleX = canvas.width - paddleWidth;
        moverbarra('B');
    } else if (leftPressed && (paddleY >= 0 && paddleY + paddleWidthInicial + velocidad > canvas.height) && paddleX >= canvas.width - paddleHeightInicial) { //pintamos horizontal la barra abajo derecha
        barra('H');
        paddleY = canvas.height - paddleHeight;
        paddleX = canvas.width - paddleWidth;
    } else if (leftPressed && (paddleX <= 0 && paddleY - velocidad >= 0)) {  //movimiento tecla izquierda parte de izquierda
        moverbarra('S');
    } else if (leftPressed && (paddleX <= 0 && paddleY - velocidad < 0) && paddleWidth==paddleHeightInicial) { //pintamos barra arriba izquierda 
        barra('H');
        paddleY = 0;
    } else if (leftPressed && (paddleY <= 0 && (paddleX >= 0 && paddleX + velocidad <= canvas.width - paddleWidthInicial))) {   //movimiento tecla izquierda parte de arriba  
        moverbarra('D');
    } else if (leftPressed && (paddleY <= 0 && (paddleX >= 0 && paddleX + velocidad >= canvas.width - paddleWidthInicial))) { //pintamos barra vertical en parte derecha arriba
        barra('V');
        paddleX = canvas.width - paddleWidth;
    }

    //añadimos valor a la x e y para moverla la bola en cada repeticion de la funcion
    x += dx;
    y += dy;


    //Con esto draw() se ejecuta una y otra vez con un bucle requestAnimationFrame()
    requestAnimationFrame(draw);

    //guardamos el tiempo de partida para poder mostrarlo en caso de victoria
    tiempoms++;
    tiempo = tiempoms / 100;
}

//usamos la funcion draw para dibujar el juego
draw();