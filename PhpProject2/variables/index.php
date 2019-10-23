<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        // put your code here
        $uno=1;
        
        $tres=2;
        
        echo isset($uno);
        echo ",";
        echo empty($dos);
        echo ",";
        echo var_dump($uno);
        echo ",";
        echo isset($tres);
        echo ",";
        echo empty($tres);
        unset($tres);
        echo",";
        echo empty($tres);
        echo isset($tres);
        
        
        
        ?>
    </body>
</html>
