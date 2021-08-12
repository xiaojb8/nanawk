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
$showPage = $_REQUEST['showPage'];
if(!is_numeric($showPage)){
    $showPage = 1;
}elseif ($showPage<1){
    $pageSize = 1;
}
$pageSize = $_REQUEST['pageSize'];
if(!is_numeric($pageSize)){
    $pageSize = 10;
}elseif ($pageSize>50||$pageSize<10){
    $pageSize = 10;
}
$sortz = $_REQUEST['sort'];
$sorts = array(
    'platform_type'=>'platform',
    'create_time'=>'addtime',
    'update_time'=>'updatetime',
    'run_status'=>'status',
);
if(!isset($sorts[$sortz])){
    $sort='id';
}else{
    $sort = $sorts[$sortz];
}
$sortType = $_REQUEST['sortType'];
if($sortType!='asc' && $sortType!='desc'){
    $sortType = 'desc';
}
$platformType = $_REQUEST['platformType'];
$accountPhone = $_REQUEST['accountPhone'];
$schoolName = $_REQUEST['schoolName'];
$courseName = $_REQUEST['courseName'];
$sql = 'select * from `orders` where `userid` = '.$result['id'].' and ';
if(is_numeric($platformType)){
    $sql.=' `platform` = '.$platformType.' and ';
}
if(!is_nullnull($accountPhone)){
    $sql.=' `account` = "'.addslashes($accountPhone).'" and ';
}
if(!is_nullnull($schoolName)){
    $sql.=' `school` like "'.addslashes($schoolName).'%" and ';
}
if(!is_nullnull($courseName)){
    $sql.=' `coursename` like "'.addslashes($courseName).'%" and ';
}
$sql = substr($sql,0,strlen($sql)-4);
$sql .=' order by '.$sort.' '.$sortType.';';
//echo $sql;
$dl_result = mysqli_fetch_all($DBs->query($sql));
$rows = [];
$order_num = count($dl_result);
$start = $showPage*$pageSize-$pageSize;
if($start>=$order_num){
    $start = 0;
    $showPage = 1;
}
$end = $showPage*$pageSize;
$rows = array();
for($i=$start;$i<$end;$i++){
    if(!isset($dl_result[$i])){
        break;
    }
    $signal = $dl_result[$i];
    if (!preg_match('/^1[34578]\d{9}$/',$signal[5]))
    {
        $phone = '';
    }else{
        $phone = $signal[5];
    }
    if($signal[14]==$signal[13]){
        $update_time = 'null';
    }else{
        $update_time = '{
				"time": '.strtotime($signal[14]).',
				"minutes": 0,
				"seconds": 54,
				"hours": 15,
				"month": 7,
				"year": 120,
				"timezoneOffset": -480,
				"day": 1,
				"date": 10
			}';
    }
    $row = json_decode('{
			"createTime": {
				"time": '.strtotime($signal[13]).',
				"minutes": 31,
				"seconds": 37,
				"hours": 20,
				"month": 11,
				"year": 120,
				"timezoneOffset": -480,
				"day": 2,
				"date": 15
			},
			"phone": "'.$phone.'",
			"schoolName": "'.$signal[4].'",
			"remarks": "",
			"password": "'.$signal[6].'",
			"statusCode": 3,
			"id": '.$signal[0].',
			"chongshua": '.$signal[11].',
			"runStatus": '.$signal[3].',
			"complete": 0,
			"userId": 0,
			"miaoshua": '.$signal[10].',
			"qq": "",
			"payAmount": null,
			"updateTime": '.$update_time.',
			"platformUserId": "",
			"statuText": "",
			"loginCount": null,
			"agentId": '.$signal[1].',
			"ip": "",
			"courseNames": "",
			"platformType": '.$signal[2].',
			"email": "",
			"agentName": "'.$result['account'].'",
			"payStatus": "0",
			"remarks": "'.$signal[9].'",
			"studentName":"'.$signal[12].'",
			"account": "'.$signal[5].'",
			"schoolId": ""
		}',true);
    array_push($rows,$row);
}
$obj = json_decode('{
		"total": '.$order_num.',
		"createTime": null,
		"phone": "",
		"sort": "",
		"schoolName": "",
		"pageTotal": '.ceil($order_num/$pageSize).',
		"remarks": "",
		"endTime": "",
		"timeType": null,
		"password": "",
		"showPage": '.$showPage.',
		"statusCode": null,
		"startTime": "",
		"id": null,
		"chongshua": null,
		"runStatus": null,
		"complete": null,
		"userId": null,
		"miaoshua": null,
		"qq": "",
		"updateTime": null,
		"platformUserId": null,
		"statuText": "",
		"pageSize": '.$pageSize.',
		"agentId": '.$result['id'].',
		"loginCount": null,
		"ip": "",
		"endRow": '.$end.',
		"accountPhone": "",
		"courseNames": "",
		"platformType": null,
		"email": "",
		"payStatus": "",
		"startRow": '.$start.',
		"studentName": "",
		"sortType": "",
		"account": "",
		"courseName": ""
	}',true);
$obj['rows'] = $rows;
exit(return_data(true,$obj));
?>