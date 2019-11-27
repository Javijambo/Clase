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

function comprar(t, i, m, mo) {
    numeroregistro = localStorage.getItem("numerodeorden");
    var ventana = prompt("Cuantas unidades del producto: " + m + " " + mo + " desea añadir al carrito?");


    stock = getCookie(i);

    if (ventana == 0 || ventana === null) {
        alert("introduzca un valor positivo");
    } else if (ventana <= stock) {
        $.ajax({
            url: 'cookie.php',
            type: 'POST',
            data: {
                'cookie': id,
                'stock': stock,
            },
            success: function(response) {
                $('#todo').append(response);
            }
        });
        var nuevostock = stock - ventana;
        numeroregistro++;
        window.localStorage.setItem("numerodeorden", numeroregistro);
        pedido = "Order." + numeroregistro;
        var valor = t + "|" + i + "|" + ventana;
        window.localStorage.setItem(pedido, valor);
        document.getElementById(i).value = nuevostock;
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