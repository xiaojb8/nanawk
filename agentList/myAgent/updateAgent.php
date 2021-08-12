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
$id = $_REQUEST['id'];
$agentAccount = $_REQUEST['agentAccount'];
$schoolName = addslashes($_REQUEST['schoolName']);
$agentName = addslashes($_REQUEST['agentName']);
$price = addslashes($_REQUEST['price']);
$qq = addslashes($_REQUEST['qq']);
$phone = addslashes($_REQUEST['phone']);
$remarks = addslashes($_REQUEST['remarks']);
if(!is_numeric($id)){
    exit(return_data(false,null,'错误'));
}
$check_result = DB("SELECT * FROM `user` WHERE `id` = '".$id."' and `levelid` = '".$result['id']."'");
if(is_nullnull($check_result)){
    exit(return_data(false,null,'用户不存在'));
}
$sql = "UPDATE `user` SET ";
if (!preg_match("/^[a-z0-9]*$/",$agentAccount)||mb_strlen($agentAccount)<3||mb_strlen($agentAccount)>16)
{
    exit(return_data(false,null,'用户名为字母或数字，长度3-16'));
}else{
    $sql.=" `account` = '".$agentAccount."', ";
}
if (!is_nullnull($schoolName)&&(!preg_match('/^[A-Za-z0-9\x{4e00}-\x{9fa5}]+$/u',$schoolName)||mb_strlen($schoolName)<3||mb_strlen($agentAccount)>16))
{
    exit(return_data(false,null,'学校名错误'));
}elseif (!is_nullnull($schoolName)){
    $sql.=" `school` = '".$schoolName."', ";
}
if (!is_nullnull($remarks)&&(!preg_match('/^[A-Za-z0-9\x{4e00}-\x{9fa5}]+$/u',$remarks)||mb_strlen($agentAccount)>100))
{
    exit(return_data(false,null,'备注只能为中英文'));
}elseif (!is_nullnull($remarks)){
    $sql.=" `remarks` = '".$remarks."', ";
}
if (!is_nullnull($agentName)&&(!preg_match('/^[A-Za-z0-9\x{4e00}-\x{9fa5}]+$/u',$agentName)||mb_strlen($agentName)<2||mb_strlen($agentName)>16))
{
    exit(return_data(false,null,'姓名错误'));
}elseif (!is_nullnull($agentName)){
    $sql.=" `nickname` = '".$agentName."', ";
}
if(!is_numeric($price)){
    exit(return_data(false,null,'价格错误'));
}
$price = ceil($price*100)/100;
if($price<$result['price']){
    exit(return_data(false,null,'单价不能低于您自己'));
}
if($price!=$check_result['price']){
    $amount = floor($check_result['amount']*100 * ( $price / $check_result['price'] ))/100;
    $sql.=" `amount` = '".$amount."', `price` = '".$price."', ";
}
if(!is_nullnull($qq)&&(!is_numeric($qq)||mb_strlen($qq)<5||mb_strlen($qq)>10)){
    exit(return_data(false,null,'QQ错误'));
}elseif (!is_nullnull($qq)){
    $sql.=" `qq` = '".$qq."', ";
}
if (!is_nullnull($phone)&&(!preg_match('/^1[34578]\d{9}$/',$phone)))
{
    exit(return_data(false,null,'手机号码格式错误'));
}elseif (!is_nullnull($phone)){
    $sql.=" `phone` = '".$phone."', ";
}
$sql = substr($sql,0,strlen($sql)-2);
$sql .= " where `id` = ".$id;
$add_result = $DBs->query($sql);
if($add_result){
    if($price!=$check_result['price']){
        add_consume($check_result['id'],'5',$amount-$check_result['amount'],$check_result['id'],$check_result['account']);
    }
    exit(return_data(true,null,'修改成功'));
}else{
    exit(return_data(false,null,'修改失败'));
}