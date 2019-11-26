    var contador = 0;

    function comprar(t, i, m, mo) {
        if (confirm("Añadir el producto :.\n" + m + " " + mo)) {
            contador++;
            pedido = "Order." + contador;
            var valor = t + "|" + i;
            window.localStorage.setItem(pedido, valor);

            alert("Cesta:\n" + "Cantidad: unidad/es.\n" + "Producto: \n" + m + " " + mo ".\n\nPulse sobre Ver Carro para acceder\na su lista de compra.\nGracias");
        }
    }

    function openNav() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            document.getElementById("myNav").style.width = "100%";
        } else {
            document.getElementById("myNav").style.width = "18%";
        }
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }