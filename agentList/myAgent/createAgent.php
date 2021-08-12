<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
$result = not_login();
if(!$result){
    exit(return_data(false,null,'你要登录'));
}
if($result['permission']!='1'){
    exit(return_data(false,null,'您没有开户权限'));
}
if($result['amount']<=0){
    exit(return_data(false,null,'账户余额为0，禁止开户'));
}
$agentAccount = $_REQUEST['agentAccount'];
$schoolName = addslashes($_REQUEST['schoolName']);
$agentName = addslashes($_REQUEST['agentName']);
$price = addslashes($_REQUEST['price']);
$qq = addslashes($_REQUEST['qq']);
$phone = addslashes($_REQUEST['phone']);
$remarks = addslashes($_REQUEST['remarks']);
function is_nullnull($str){
    if(is_null($str)||$str==''){
        return true;
    }else{
        return false;
    }
}
//--------------------------------------------------------------------------
if (!preg_match("/^[a-z0-9]*$/",$agentAccount)||mb_strlen($agentAccount)<3||mb_strlen($agentAccount)>16)
{
    exit(return_data(false,null,'用户名为字母或数字，长度3-16'));
}
if (!is_nullnull($schoolName)&&(!preg_match('/^[A-Za-z0-9\x{4e00}-\x{9fa5}]+$/u',$schoolName)||mb_strlen($schoolName)<3||mb_strlen($agentAccount)>16))
{
    exit(return_data(false,null,'学校名错误'));
}
if (!is_nullnull($remarks)&&(!preg_match('/^[A-Za-z0-9\x{4e00}-\x{9fa5}]+$/u',$remarks)||mb_strlen($agentAccount)>100))
{
    exit(return_data(false,null,'备注只能为中英文'));
}
if (!is_nullnull($agentName)&&(!preg_match('/^[A-Za-z0-9\x{4e00}-\x{9fa5}]+$/u',$agentName)||mb_strlen($agentName)<2||mb_strlen($agentName)>16))
{
    exit(return_data(false,null,'姓名错误'));
}
if(!is_numeric($price)){
    exit(return_data(false,null,'价格错误'));
}
$price = ceil($price*100)/100;
if($price<$result['price']){
    exit(return_data(false,null,'单价不能低于您自己'));
}
if(!is_nullnull($qq)&&(!is_numeric($qq)||mb_strlen($qq)<5||mb_strlen($qq)>10)){
    exit(return_data(false,null,'QQ错误'));
}
if (!is_nullnull($phone)&&(!preg_match('/^1[34578]\d{9}$/',$phone)))
{
    exit(return_data(false,null,'手机号码格式错误'));
}
//--------------------------------------------------------------------------
$check_result = DB("SELECT * FROM `user` WHERE `account` = '".$agentAccount."'");
if($check_result){
    exit(return_data(false,null,'用户名已存在'));
}
$agentName= is_nullnull($agentName)?'null':'\''.$agentName.'\'';
$qq= is_nullnull($qq)?'null':'\''.$qq.'\'';
$phone= is_nullnull($phone)?'null':'\''.$phone.'\'';
$schoolName= is_nullnull($schoolName)?'null':'\''.$schoolName.'\'';
$remarks = is_nullnull($remarks)?'null':'\''.$remarks.'\'';
require $_SERVER['DOCUMENT_ROOT'].'/core/config.php';
$add_result = INSERT("INSERT INTO `user` (`id`, `account`, `password`, `nickname`, `qq`, `phone`, `school`, `price`, `token`, `status`, `addtime`, `lasttime`, `levelid`, `permission`, `remarks`) VALUES (NULL, '".$agentAccount."', '".password($agentAccount,$default_password)."', ".$agentName.", ".$qq.", ".$phone.", ".$schoolName.", '".$price."', '".token($agentAccount,$default_password)."', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '".$result['id']."', '0',".$remarks.");");
if($add_result){
    $agent_num = DB("SELECT COUNT(*) FROM `user` WHERE `levelid` = ".$result['id']);
    $DBs->query("UPDATE `user` SET `agentnum` = ".$agent_num[0]." WHERE `user`.`id` = ".$result['id'].";");
    exit(return_data(true,null,'新增成功'));
}else{
    exit(return_data(false,null,'新增失败'));
}