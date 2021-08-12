<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
$result = not_login();
if(!$result){
    exit(return_data(false,null,'你要登录'));
}
if($result['account']=='admin'){
    exit(return_data(false,null,'默认账号禁止修改密码'));
}
function is_nullnull($str)
{
    if (is_null($str) || $str == '') {
        return true;
    } else {
        return false;
    }
}
$yuan = $_REQUEST['yuan'];
$new = $_REQUEST['new'];
$confirm = $_REQUEST['confirm'];
if(password($result['account'],$yuan)!=$result['password']){
    exit(return_data(false,null,'原密码错误'));
}
if($new!=$confirm){
    exit(return_data(false,null,'两次输入密码不一致'));
}
$pattern= '/^[0-9a-z_$]{6,16}$/i'; // i 不区分大小写
if(!preg_match($pattern,$new)){
    exit(return_data(false,null,'新密码格式错误'));
}
$DBs->query("UPDATE `user` SET `password` = '".password($result['account'],$new)."', `token` = '".token($result['account'],$new)."' WHERE `user`.`id` = ".$result['id'].";");
setcookie('Admin-Token');
exit(return_data(true,null,'修改成功，请重新登陆'));
