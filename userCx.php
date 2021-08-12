<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
$result = not_login();
if(!$result){
    exit(return_data(false,null,'你要登录'));
}
if($result['amount']<=0){
    exit(return_data(false,null,'您的余额不足'));
}
function is_nullnull($str){
    if(is_null($str)||$str==''){
        return true;
    }else{
        return false;
    }
}
$platformType=$_REQUEST['platformType'];
$schoolName = $_REQUEST['schoolName'];
$account = $_REQUEST['account'];
$password = $_REQUEST['password'];
if(is_nullnull($platformType)||is_nullnull($account)||is_nullnull($password)){
    exit(return_data(false,null,'缺少数据'));
}
$dl_result = mysqli_fetch_all($DBs->query('select * from `goods`'));
$goods_num = count($dl_result);
for($i=0;$i<$goods_num;$i++){
    $the_one = $dl_result[$i];
    if($the_one[0]==$platformType){
        if($the_one[3]!=1){
            exit(return_data(false,null,'商品维护中'));
        }else{
            break;
        }
    }
}
if (!preg_match('/^1[34578]\d{9}$/',$account))
{
    $phone = '';
}else{
    $phone = $account;
}
$obj = json_decode('{
        "phone": "'.$phone.'",
        "schoolName": "'.$schoolName.'",
        "status": true,
        "msg": "",
        "password": "'.$password.'",
        "cookie": "",
        "statusCode": 1,
        "userId": "",
        "userName": "",
        "account": "'.$account.'",
        "schoolId": ""
        }',true);
switch ($platformType){
    case 1:
        require $_SERVER['DOCUMENT_ROOT'].'/api/ck/cx.php';
        $cx = new cx;
        $ck_result=$cx->cxck($schoolName,$account,$password);
        if(!$ck_result){
            $err = $cx->err;
            exit(return_data(false,null,$err));
        }
        $obj['schoolId'] = $cx->fid;
        $obj['courseList'] = $ck_result;
        exit(return_data(true,$obj));
    case 2:
        require $_SERVER['DOCUMENT_ROOT'].'/api/ck/zhs.php';
        $zhs = new zhs();
        $ck_result = $zhs->zhsck($schoolName,$account,$password);
        if(!$ck_result){
            $err = $zhs->err;
            exit(return_data(false,null,$err));
        }
        $obj['courseList'] = $ck_result;
        exit(return_data(true,$obj));
    default:
        exit(return_data(false,null,'无'));
}
