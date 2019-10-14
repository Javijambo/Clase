<?php

print ("<table border=1 align=center>");
 echo "<tr>";
 $color=0;
 $color2=0;
 $color3=0;
 while ($color<255):
 echo "<tr>"; 
 echo " <td style='background-color :rgb(",$color,",",$color2,",",$color3,")' color=>";
 echo $color;
 $color=$color+5;
 $color2=$color2+5;
 $color3=$color3+5;
 print ("</tr>");
 endwhile;
 echo "</TR>";
print "</table>";
?>
