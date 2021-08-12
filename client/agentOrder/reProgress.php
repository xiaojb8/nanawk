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
$check_result = DB("SELECT * FROM `orders` WHERE `id` = '".$id."' and `userid` = '".$result['id']."'");
if(is_nullnull($check_result)){
    exit(return_data(false,null,'订单不存在'));
}else{
    if($check_result['status']==0){
        exit(return_data(false,null,'排队订单，禁止重刷'));
    }
    $DBs->query("UPDATE `orders` SET `status` = '0' , `updatetime` = CURRENT_TIMESTAMP WHERE `orders`.`id` = ".$id.";");
    exit(return_data(true,null,'重刷成功'));
}