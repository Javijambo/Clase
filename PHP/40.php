<?php
print("<table border=1 align=center>");
echo "<tr>";
$myRange = range(1, 49);
shuffle($myRange);
$i=0;
do{ 
    echo'<td>',$myRange[$i],'<td>';
    $i++;
}
while($i<6);
echo "</tr>";
?>
