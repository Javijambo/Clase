    <?php
    function Encabezado()
    {
        echo '<HTML>

    <head>
        <title>
            Pruebas con la función include
        </title>
    </head>

    <BODY>
        <center><img src="./images/cabina.jpg"><br>
            <font size=6 face="Times" color="#0000ff">Pruebas PHP</font><br>
            <hr width=75%>
        <? } ?>
        <? function Pie()
        { ?>
            <center>
                <hr width=50%>
                <font size=2 face="Arial" color="#ff0000">Luchando con PHP</font>
                <hr width=50%>
            </center>
    </body>

    </html>';
    }
    function Pie()
    {
        echo '<center><hr width=50%>
    <font size=2 face="Arial" color="#ff0000">Luchando con PHP</font>
    <hr width=50%></center>
    </body>
    </html>';
    }
    function Calcula($a, $b)
    {
        return $a * $b;
    }

    ?>