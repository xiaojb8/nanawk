<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
$result = not_login();
if(!$result){
    exit(return_data(false,null,'你要登录'));
}
$id = $_REQUEST['id'];
if(!is_numeric($id)){
    exit(return_data(false,null,'错误'));
}
function is_nullnull($str){
    if(is_null($str)||$str==''){
        return true;
    }else{
        return false;
    }
}
$check_result = DB("SELECT * FROM `user` WHERE `id` = '".$id."' and `levelid` = '".$result['id']."'");
if(is_nullnull($check_result)){
    exit(return_data(false,null,'用户不存在'));
}else{
    $DBs->query("UPDATE `user` SET `password` = '".password($check_result['account'],$default_password)."', `token` = '".token($check_result['account'],$default_password)."' WHERE `user`.`id` = ".$id.";");
    exit(return_data(true,null,'重置成功'));
}