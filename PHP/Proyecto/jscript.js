function openNav() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        numeroregistro = localStorage.getItem("numerodeorden");
        document.getElementById("myNav").style.width = "100%";
    } else {
        document.getElementById("myNav").style.width = "18%";
    }
}

//===================funcion que devuelve la fecha de hoy en formato date mysql====================================
function mysqlDate(date) {
    date = date || new Date();
    return date.toISOString().split('T')[0];
}


function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

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
    var stock = getCookie(id);
    if (getCookie('user') == "") {
        alert('Inicie sesión o registrese para poder comprar elementos')
    } else {
        if (stock != 0) {
            numeroregistro = localStorage.getItem("numerodeorden");
            var ventana = prompt("Cuantas unidades del producto: " + m + " " + mo + " desea añadir al carrito?");

            if (ventana == 0 || ventana === null) {
                alert("introduzca un valor positivo");
            } else if (ventana <= stock) {
                var nuevostock = stock - ventana;
                $.ajax({
                    url: 'master.php',
                    type: 'POST',
                    data: {
                        'funcion': 'cookie',
                        'x': id,
                        'y': nuevostock,
                    },
                    success: function(response) {
                        $('#todo').append(response);
                    }
                });

                numeroregistro++;
                window.localStorage.setItem("numerodeorden", numeroregistro);
                pedido = "Order." + numeroregistro;
                var valor = t + "|" + id + "|" + ventana + "|" + precio + "|" + ventana;
                window.localStorage.setItem(pedido, valor);
                document.getElementById(id).value = nuevostock;
                alert("Cesta:\n" + "Cantidad: " + ventana + " unidad/es.\n" + "Producto: \n" + m + " " + mo + ".\n \nPulse sobre Carro para acceder a su lista de compra.Gracias");
            } else {
                alert("El stock que tenemos de este producto es " + stock + "\n Por favor pida un numero de unidades dentro del disponible");
            }
        } else {
            alert('No quedan unidades en stock, lo sentimos');
        }
    }
}


var ids = new Array();
var total = 0.00;

function visualizarcarrito() {
    numerodeorden = localStorage.getItem("numerodeorden");
    for (i = 1; i <= numerodeorden; i++) {
        nuevopedido = "Order." + i;
        datos = "";
        datos = localStorage.getItem("Order." + i);
        carro = datos.split("|");
        tabla = carro[0];
        id = carro[1];
        stock = parseInt(carro[2], 10);
        precio = carro[3];
        var date = mysqlDate();
        total = total + (stock * precio);
        $.ajax({
            url: 'master.php',
            type: 'POST',
            data: {
                'funcion': 'carrito',
                'tabla': tabla,
                'p': id,
                'stock': stock,
                'date': date,
            },
            success: function(response) {
                $('#todo').append(response);
            }
        });
    }
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'cookie',
            'x': 'total',
            'y': total.toFixed(2),
        },
        success: function(response) {
            $('#todo').append(response);
        }
    });
    document.getElementById("total").value = total.toFixed(2) + " €";

}


function realizarpedido() {
    var aux = 0;
    total = 0.00;
    numerodeorden2 = localStorage.getItem("numerodeorden");
    var pedido2 = "";
    for (i = 1; i <= numerodeorden2; i++) {
        nuevopedido = "Order." + i;
        datos2 = "";
        datos2 = localStorage.getItem("Order." + i);
        pedido2 = pedido2 + "," + datos;

        datos = localStorage.getItem("Order." + i);
        usuario = getCookie('usuario');
        carro = datos.split("|");
        tabla = carro[0];
        id = carro[1];
        stock = getCookie(id);

        $.ajax({
            url: 'master.php',
            type: 'POST',
            data: {
                'funcion': 'actualizar',
                'tabla': tabla,
                'stock': stock,
                'id': id,
            },
            success: function(response) {
                if (response == "success") {
                    aux = 1;
                }
            }
        });
    }
    usuario = getCookie('usuario');
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'pedido',
            'pedido': pedido2,
        },
        success: function(response) {
            if (aux == 1 && response == "success") {
                localStorage.clear();
                alert('Pedido Realizado con Éxito');
            } else {
                alert('algo salió mal');
            }
        }
    });
}


function login() {
    var usuario = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'login',
            'usuario': usuario,
            'pass': pass,
        },
        success: function(response) {
            if (response == true) {
                alert('Bienvenido')
                location.replace('index.php');
            } else {
                alert('usuario o contraseña incorrectos');
            }
        }
    });

}

function cerarsesion() {
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'fcookie',
        },
        success: function(response) {
            window.location.reload();
            localStorage.clear();
        }
    });
}

function infouser() {
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'verinfo',
        },
        success: function(response) {
            var todo = response.split("|");
            document.getElementById('nick').value = todo[0];
            document.getElementById('pass').value = todo[1];
            document.getElementById('email').value = todo[2];
        }
    });
}

function actualizaruser() {
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'actualizaruser',
            'nick': document.getElementById('nick').value,
            'pass': document.getElementById('pass').value,
            'email': document.getElementById('email').value,
        },
        success: function(response) {
            alert(response);
            document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            location.replace('login.html');
        }
    });
};

function registro() {
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'registro',
            'nick': document.getElementById('nick').value,
            'pass': document.getElementById('pass').value,
            'email': document.getElementById('email').value,
        },
        success: function(response) {
            alert(response);
            location.replace('login.html');
        }
    });
}

function cargarids() {
    var e = document.getElementById("tabla");
    var strUser = e.options[e.selectedIndex].value;
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'cargarid',
            'tabla': strUser,
        },
        success: function(response) {
            $('#form').append(response);
            $('#tabla').attr('disabled', 'disabled');
            $('#cargar').attr('onclick', 'mostrardatos();');
            $('#cargar').html('Mostrar Datos');
        }
    });
}

function refrescar() {
    location.replace('admin.php');
}

function mostrardatos() {
    var e = document.getElementById("tabla");
    var tabla = e.options[e.selectedIndex].value;
    var f = document.getElementById("ids");
    var id = f.options[f.selectedIndex].value;
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'mostrardatos',
            'tabla': tabla,
            'id': id,
        },
        success: function(response) {
            $('#form').append(response);
            $('#cargar').remove();
            $('#ids').attr('disabled', 'disabled');
        }

    });
}

function modificar() {
    var e = document.getElementById("tabla");
    var tabla = e.options[e.selectedIndex].value;
    var f = document.getElementById("ids");
    var id = f.options[f.selectedIndex].value;
    var modelo = document.getElementById('modelo').value;
    var stock = document.getElementById('stock').value;
    var precio = document.getElementById('precio').value;
    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'modificar',
            'tabla': tabla,
            'id': id,
            'modelo': modelo,
            'stock': stock,
            'precio': precio,
        },
        success: function(response) {
            if (response == "success") {
                alert("Modificacion Realizada correctamente");
                location.replace('admin.php');
            }
        }

    });
}

function eliminar() {
    var e = document.getElementById("tabla");
    var tabla = e.options[e.selectedIndex].value;
    var f = document.getElementById("ids");
    var id = f.options[f.selectedIndex].value;

    $.ajax({
        url: 'master.php',
        type: 'POST',
        data: {
            'funcion': 'eliminar',
            'tabla': tabla,
            'id': id,
        },
        success: function(response) {
            if (response == "success") {
                alert("Se ha eliminado el producto correctamente");
                location.replace('admin.php');
            }
        }

    });
}

function comprobaruser() {
    if (getCookie('user') == "") {
        alert('Inicie sesión')
        location.replace('login.html');
    } else {
        infouser();
    }
}