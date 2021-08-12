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
    'remarks'=>'remarks',
    'school_name'=>'school',
    'agent_account'=>'account',
    'qq'=>'qq',
    'price'=>'price',
    'ammount'=>'amount',
    'agentNum'=>'agentnum',
    'orderNum'=>'ordernum',
    'todayOrderNum'=>'todayordernum',
    'create_time'=>'addtime',
    'login_time'=>'lasttime',
    'status'=>'status',
    'open_permission'=>'permission'
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
$unionAccount = addslashes($_REQUEST['unionAccount']);
if(!is_nullnull($unionAccount)){
    $sql = 'select * from `user` where (`school` like "'.$unionAccount.'%" or `qq` like "'.$unionAccount.'%" or `account` like "'.$unionAccount.'%" or `nickname` like "'.$unionAccount.'%" or `phone` like "'.$unionAccount.'%") and levelid = '.$result['id'].' order by `'.$sort.'` '.$sortType;
}else{
    $sql = 'select * from `user` where levelid = '.$result['id'].' order by `'.$sort.'` '.$sortType;
}
$dl_result = mysqli_fetch_all($DBs->query($sql));
$rows = [];
$agent_num = count($dl_result);
$start = $showPage*$pageSize-$pageSize;
if($start>=$agent_num){
    $start = 0;
    $showPage = 1;
}
$end = $showPage*$pageSize;
for($i=$start;$i<$end;$i++){
    if(!isset($dl_result[$i])){
        break;
    }
    $signal = $dl_result[$i];
    if($signal[12]==$signal[13]){
        $login_time = 'null';
    }else{
        $login_time = '{
				"time": '.strtotime($signal[13]).',
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
				"time": '.strtotime($signal[12]).',
				"minutes": 0,
				"seconds": 54,
				"hours": 15,
				"month": 7,
				"year": 120,
				"timezoneOffset": -480,
				"day": 1,
				"date": 10
			},
			"loginTime": '.$login_time.',
			"phone": "'.$signal[5].'",
			"schoolName": "'.$signal[6].'",
			"superior": "'.$signal[14].'",
			"remarks": "'.$signal[16].'",
			"type": 1,
			"version": 2,
			"gxPrice": 0,
			"id": '.$signal[0].',
			"parentId": '.$signal[14].',
			"todayOrderNum": '.$signal[19].',
			"userId": '.$signal[0].',
			"agentNum": '.$signal[17].',
			"zhPrice": 0,
			"qq": "'.$signal[4].'",
			"cxPrice": 0,
			"status": '.$signal[11].',
			"payed": '.$signal[8].',
			"openPermission": '.$signal[15].',
			"examPrice": null,
			"orderNum": '.$signal[18].',
			"agentAccount": "'.$signal[1].'",
			"agentPassword": "'.$signal[2].'",
			"price": '.$signal[7].',
			"agentName": "'.$signal[3].'",
			"ammount": '.$signal[9].',
			"yxPrice": 0
		}',true);
    array_push($rows,$row);
}
$pageTotal = ceil($agent_num/$pageSize);
$obj = json_decode('{
		"total": '.$agent_num.',
		"createTime": null,
		"phone": "",
		"schoolName": "",
		"sort": "'.$sortz.'",
		"arrearage": null,
		"pageTotal": '.$pageTotal.',
		"remarks": "",
		"type": null,
		"endTime": "",
		"showPage": 1,
		"gxPrice": null,
		"startTime": "",
		"id": null,
		"parentId": '.$result['id'].',
		"unionAccount": "'.$unionAccount.'",
		"userId": null,
		"zhPrice": null,
		"qq": "",
		"cxPrice": null,
		"status": null,
		"openPermission": null,
		"pageSize": '.$pageSize.',
		"agentAccount": "",
		"endRow": 10,
		"agentPassword": "",
		"agentName": "",
		"startRow": 0,
		"sortType": "'.$sortType.'"
	}',true);
$obj['rows']=$rows;
echo return_data(true,$obj);
?>