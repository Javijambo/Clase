var items = window.localStorage.getItem('numerodeorden');
if (items === null || items.length === 0 || items === 0) {
    window.localStorage.setItem("numerodeorden", 0);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function comprar(t, id, m, mo, precio) {
    numeroregistro = localStorage.getItem("numerodeorden");
    var ventana = prompt("Cuantas unidades del producto: " + m + " " + mo + " desea añadir al carrito?");
    stock = getCookie(id);

    if (ventana == 0 || ventana === null) {
        alert("introduzca un valor positivo");
    } else if (ventana <= stock) {
        var nuevostock = stock - ventana;

        $.ajax({
            url: 'cookie.php',
            type: 'POST',
            data: {
                'cookie': id,
                'stock': nuevostock,
            },
            success: function(response) {
                $('#todo').append(response);
            }
        });
        
        numeroregistro++;
        window.localStorage.setItem("numerodeorden", numeroregistro);
        pedido = "Order." + numeroregistro;
        var valor = t + "|" + id + "|" + ventana + "|" + precio;
        window.localStorage.setItem(pedido, valor);
        document.getElementById(id).value = nuevostock;
        alert("Cesta:\n" + "Cantidad: " + ventana + " unidad/es.\n" + "Producto: \n" + m + " " + mo + ".\n \nPulse sobre Carro para acceder a su lista de compra.Gracias");
    } else {
        alert("El stock que tenemos de este producto es " + stock + "\n Por favor pida un numero de unidades dentro del disponible");
    }

}

function openNav() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        numeroregistro = localStorage.getItem("numerodeorden");
        document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "18%";
    }
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


var ids = new Array();
var total=0.00;
function visualizarcarrito() {
    numerodeorden = localStorage.getItem("numerodeorden");
    for (i = 1; i <= numerodeorden; i++) {
        nuevopedido = "Order." + i;
        datos = "";
        datos = localStorage.getItem("Order." + i);
        carro = datos.split("|");
        tabla = carro[0];
        id = carro[1];
        stock = parseInt(carro[2],10);
        precio = carro[3];
        console.log(tabla);
        console.log(id);
        console.log(stock);
        console.log(precio);
        total = total + (stock * precio);
        $.ajax({
            url: 'carritoaux.php',
            type: 'POST',
            data: {
                'tabla': tabla,
                'p': id,
                'stock': stock,
            },
            success: function(response) {
                $('#todo').append(response);
            }
        });
        document.getElementById("total").value = total.toFixed(2)+" €";
    }
}

function realizarpedido(){
    total=0.00;
    numerodeorden = localStorage.getItem("numerodeorden");
    for (i = 1; i <= numerodeorden; i++) {
        nuevopedido = "Order." + i;
        datos = "";
        datos = localStorage.getItem("Order." + i);
        carro = datos.split("|");
        tabla = carro[0];
        id = carro[1];
        stock = parseInt(carro[2],10);
        precio = carro[3];
        total = total + (stock * precio);

        $.ajax({
            url: 'realizarpedido.php',
            type: 'POST',
            data: {
                'tabla': tabla,
                'p': id,
                'stock': stock,
                'total': total.toFixed(2),
            },
            success: function(response) {
                $('body').append(response);
            }
        });
    }
}