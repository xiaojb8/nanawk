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
$user = $_REQUEST['user'];
$platformType = $_REQUEST['platformType'];
$miaoshua = $_REQUEST['miaoshua'];
if(is_nullnull($user)||is_nullnull($platformType)||is_nullnull($miaoshua)){
    exit(return_data(false,null,'信息不全'));
}
if(is_null(json_decode($user))){
    exit(return_data(false,null,'错误'));
}
if($miaoshua!=1&&$miaoshua!=0){
    exit(return_data(false,null,'数据错误'));
}
$user_json = json_decode($user,true);
if(!isset($user_json['checkedCourseList'])){
    exit(return_data(false,null,'请选择课程'));
}
$course_num = count($user_json['checkedCourseList']);
if($course_num<1){
    exit(return_data(false,null,'请选择课程!'));
}
if(is_nullnull($user_json['account'])||is_nullnull($user_json['password'])){
    exit(return_data(false,null,'缺少重要信息'));
}
for($i=0;$i<$course_num;$i++){
    $course = $user_json['checkedCourseList'][$i];
    if(!in_array($course,$user_json['courseList'])){
        exit(return_data(false,null,'数据不合法'));
    }
    if(is_nullnull($course['courseId'])||is_nullnull($course['courseName'])){
        exit(return_data(false,null,'缺少重要数据'));
    }
    switch($platformType){
        case 1:
            if(is_nullnull($course['classId'])){
                exit(return_data(false,null,'缺少重要数据！'));
            }
            break;
            default:
                sleep(0);
    }
}
//exit(return_data(false,null,'下单成功'));
$dl_result = mysqli_fetch_all($DBs->query('select * from `goods`'));
$goods_num = count($dl_result);
$exist = false;
for($i=0;$i<$goods_num;$i++){
    $the_one = $dl_result[$i];
    if($the_one[0]==$platformType){
        if($the_one[3]!=1){
            exit(return_data(false,null,'商品维护中'));
        }else{
            $need_money = ceil($the_one[2]*$result['price']*$course_num*100)/100;
            $exist = true;
            break;
        }
    }
}
if(!$exist){
    exit(return_data(false,null,'平台不存在'));
}
if($need_money>$result['amount']){
    exit(return_data(false,null,'您的余额不足'));
}
$schoolName = addslashes($user_json['schoolName']);
$account = addslashes($user_json['account']);
$password = addslashes($user_json['password']);
$sql = '';
//$check_result = mysqli_fetch_all($DBs->query("select * from `orders` where `platform` = ".$platformType." and `account` = ".$account." and `password` = ".$password.";"));
for($i=0;$i<$course_num;$i++){
    $course = $user_json['checkedCourseList'][$i];
    $sql = "INSERT INTO `orders` (`id`, `userid`, `platform`, `school`, `account`, `password`, `courseid`, `clazzid`, `coursename`, `ms`, `cs`, `exam`, `addtime`) VALUES (NULL, '".$result['id']."','".$platformType."', '".$schoolName."', '".$account."', '".$password."', '".addslashes($course['courseId'])."', '".addslashes($course['classId'])."','".addslashes($course['courseName'])."', '".$miaoshua."', '0', NULL, CURRENT_TIMESTAMP);";
    $insert_result = INSERT($sql);
    //echo $sql;
    if(!$insert_result){
        exit(return_data(true,null,'下单失败！'.mysqli_error($DBs)));
    }
}
$amount_result = $DBs->query("UPDATE `user` SET `amount` = `amount` - ".$need_money." ,`consumed` = `consumed` + ".$need_money." WHERE `user`.`id` = ".$result['id'].";");
//echo "UPDATE `user` SET `amount` =  ".$last_money." WHERE `user`.`id` = ".$result['id'].";";
if(!$amount_result){
    exit(return_data(true,null,'下单失败'));
}
add_consume($result['id'],'2',$need_money);
exit(return_data(true,null,'下单成功'));
