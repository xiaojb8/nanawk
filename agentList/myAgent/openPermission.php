<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
$result = not_login();
if(!$result){
    exit(return_data(false,null,'你要登录'));
}
$id = $_REQUEST['id'];
$openPermission = $_REQUEST['openPermission'];
if(!is_numeric($id)||($openPermission!='0'&&$openPermission!='1')){
    exit(return_data(false,null,'错误'));
}
if($result['permission']!='1'){
    exit(return_data(false,null,'您没有开户权限，不能修改下级权限'));
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
    $DBs->query("UPDATE `user` SET `permission` = '".$openPermission."' WHERE `user`.`id` = ".$id.";");
    exit(return_data(true,null,'修改成功'));
}