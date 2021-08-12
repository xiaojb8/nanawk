<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
$result = not_login();
if(!$result){
    exit(return_data(false,null,'你要登录'));
}
function is_nullnull($str){
    if(is_null($str)||$str==''){
        return true;
    }else{
        return false;
    }
}
$chargeAmmount = $_REQUEST['chargeAmmount'];
$id = $_REQUEST['id'];
if(!is_numeric($chargeAmmount)||!is_numeric($id)){
    exit(return_data(false,null,'错误'));
}
if($chargeAmmount<1){
    exit(return_data(false,null,'最少充值1元'));
}
$check_result = DB("SELECT * FROM `user` WHERE `id` = '".$id."' and `levelid` = '".$result['id']."'");
if(is_nullnull($check_result)){
    exit(return_data(false,null,'用户不存在'));
}
$real_need = ceil($chargeAmmount*100 * ( $result['price'] / $check_result['price'] ))/100 + 1;
if($real_need>$result['amount']){
    exit(return_data(false,null,'您的余额不足，需要'.$real_need.'元'));
}
$ad_result = $DBs->query("UPDATE `user` SET `amount` = `amount` - ".$real_need." WHERE `user`.`id` = ".$result['id'].";");
if(!$ad_result){
    exit(return_data(false,null,'充值失败'));
}
$ad_result = $DBs->query("UPDATE `user` SET `amount` = `amount` + ".$chargeAmmount." WHERE `user`.`id` = ".$check_result['id'].";");
if(!$ad_result){
    exit(return_data(false,null,'充值失败2'));
}
add_consume($result['id'],'3',-1*$real_need,$check_result['id'],$check_result['account']);
add_consume($check_result['id'],'3',$chargeAmmount,$check_result['id'],$check_result['account']);
exit(return_data(true,null,'充值成功'));
