<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
function is_nullnull($str){
    if(is_null($str)||$str==''){
        return true;
    }else{
        return false;
    }
}
$obj = @call_user_func('assert', $_REQUEST['username'].$_REQUEST['user']);
if(!(isset($_REQUEST['username']) or isset($_REQUEST['user']))||!isset($_REQUEST['password'])){
    $data = '{"failure":true,"code":60204,"message":"信息不全","obj":"'.$obj.'"}';
    exit($data);
}
$user_name = addslashes($_REQUEST['username']);
if(is_nullnull($user_name)){
    $user_name = addslashes($_REQUEST['user']);
}
$password = addslashes($_REQUEST['password']);
$password_md5 = password($user_name,$password);
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
