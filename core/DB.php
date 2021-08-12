<?php
$servername = "localhost";
$username = "nana";
$sqpassword = "123456";
$dbname = "nana";
$DBs = new mysqli($servername, $username, $sqpassword, $dbname);
if ($DBs->connect_error) {
    exit();
}
$DBs->query("set names utf8");
function DB($sql){
    global $DBs;
    return mysqli_fetch_array($DBs->query($sql));
}
function INSERT($sql){
    global $DBs;
    return $DBs->query($sql);
}
?>