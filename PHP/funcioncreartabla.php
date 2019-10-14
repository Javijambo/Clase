
<?php
    function tabla($f,$c)
    {
        print ("<table border=1>");
        $contador=1;
        for($x=$f;$x>0;$x--)
        {
            echo "<tr>";
            for($i=$c;$i>0;$i--)
            {
                echo "<td align=center>";
                print $contador++;
                print "<td>"; 
            }
        }
    }
    tabla(3,4);
?>

