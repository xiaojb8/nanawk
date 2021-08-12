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
    'pay_type'=>'payType',
    'pay_amount'=>'payAmount',
    'create_time'=>'createTime'
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
$sql = 'select * from `consume` where `userid` = '.$result['id'].' order by `'.$sort.'` '.$sortType;
$dl_result = mysqli_fetch_all($DBs->query($sql));
$rows = [];
$record_num = count($dl_result);
$start = $showPage*$pageSize-$pageSize;
if($start>=$record_num){
    $start = 0;
    $showPage = 1;
}
$end = $showPage*$pageSize;
for($i=$start;$i<$end;$i++){
    if(!isset($dl_result[$i])){
        break;
    }
    $signal = $dl_result[$i];
    if(is_null($signal[2])){
        $targetAgentId = 'null';
    }else{
        $targetAgentId='"'.$signal[2].'"';
    }
    if(is_null($signal[3])){
        $targetAgentAccount = '';
    }else{
        $targetAgentAccount=$signal[3];
    }
    $row = json_decode('{
			"payAmount": '.$signal[5].',
			"id": '.$signal[0].',
			"extendCourseId": null,
			"createTime": {
				"time": '.strtotime($signal[6]).',
				"minutes": 14,
				"seconds": 11,
				"hours": 15,
				"month": 11,
				"year": 120,
				"timezoneOffset": -480,
				"day": 3,
				"date": 9
			},
			"targetAgentAccount": "'.$targetAgentAccount.'",
			"detail": "小八牛逼小八牛逼",
			"extendOrderId": 0,
			"payType": '.$signal[4].',
			"agentId": '.$signal[1].',
			"targetAgentId": '.$targetAgentId.',
			"courseId": "",
			"commission": null
		}',true);
    array_push($rows,$row);
}
$pageTotal = ceil($record_num/$pageSize);
$nextPage = $showPage + 1;
if($nextPage>$pageTotal){
    $nextPage='null';
}
$navigatepageNums = array();
for($i=0;$i<$pageTotal;$i++){
    array_push($navigatepageNums,$i+1);
}
$prePage = $showPage-1;
$obj = json_decode('{
		"total": '.$record_num.',
		"lastPage": '.$pageTotal.',
		"nextPage": '.$nextPage.',
		"hasNextPage": true,
		"orderBy": "",
		"pages": '.$pageTotal.',
		"pageSize": '.$pageSize.',
		"navigatePages": '.$pageSize.',
		"hasPreviousPage": false,
		"navigatepageNums": '.json_encode($navigatepageNums).',
		"size": '.$pageSize.',
		"pageNum": '.$showPage.',
		"prePage": '.$prePage.',
		"endRow": '.$end.',
		"isLastPage": '.$showPage.',
		"startRow": 1,
		"firstPage": 1,
		"navigateLastPage": 4,
		"navigateFirstPage": 1,
		"isFirstPage": true
	}',true);
$obj['list']=$rows;
exit(return_data(true,$obj));
?>