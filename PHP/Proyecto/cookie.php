<?php
$id = $_POST['cookie'];
$stock = $_POST['stock'];
setcookie($id, $stock, time() + (86400 * 30), "/");
