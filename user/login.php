<?php
if(!isset($_REQUEST['username'])||!isset($_REQUEST['password'])){
    exit('{"failure":true,"code":60204,"message":"信息不全"}');
}
$user_name = addslashes($_REQUEST['username']);
$password = addslashes($_REQUEST['password']);
$password_md5 = md5($user_name.$password);
require $_SERVER['DOCUMENT_ROOT'].'/core/DB.php';
$result = DB("SELECT * FROM `user` WHERE `account` = '".$user_name."' AND `password` = '".$password_md5."' limit 1");
if(is_null($result)){
    exit('{"failure":true,"code":60204,"message":"用户名或密码错误"}');
}
if($result['status']!='1'){
    exit('{"failure":true,"code":60204,"message":"该账号已被限制登录"}');
}
$DBs->query("UPDATE `user` SET `lasttime` = CURRENT_TIMESTAMP WHERE `user`.`id` = ".$result['id'].";");
exit('{"failure":false,"code":20000,"data":{"token":"'.$result['token'].'"}}');
?>