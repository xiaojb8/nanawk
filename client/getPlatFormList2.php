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
$dl_result = mysqli_fetch_all($DBs->query('select * from `goods`'));
$obj = array();
$goods_num = count($dl_result);
for($i=0;$i<$goods_num;$i++){
    $the_one = $dl_result[$i];
    $signal = json_decode('{
		"dictValue": "'.$the_one[0].'",
		"price": '.$the_one[2].',
		"agentPrice": '.$result['price'].',
		"dictName": "'.$the_one[1].'"
	}',true);
    array_push($obj,$signal);
}
exit(return_data(true,$obj));
echo '{
	"status": "0010160009",
	"obj": [{
		"dictValue": "15",
		"price": 6,
		"agentPrice": 0.8,
		"dictName": "广东开放大学"
	}, {
		"dictValue": "1",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "超星"
	}, {
		"dictValue": "7",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "优学院"
	}, {
		"dictValue": "13",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "湖南青马(不可查集)"
	}, {
		"dictValue": "2",
		"price": 0.5,
		"agentPrice": 0.8,
		"dictName": "智慧树"
	}, {
		"dictValue": "11",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "学堂云3"
	}, {
		"dictValue": "14",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "创就业云课堂"
	}, {
		"dictValue": "3",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "高校邦"
	}, {
		"dictValue": "6",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "中国大学"
	}, {
		"dictValue": "12",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "U校园"
	}, {
		"dictValue": "4",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "好大学(不可查集)"
	}, {
		"dictValue": "8",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "云课堂智慧职教"
	}, {
		"dictValue": "16",
		"price": 5,
		"agentPrice": 0.8,
		"dictName": "青书学堂"
	}, {
		"dictValue": "5",
		"price": 1,
		"agentPrice": 0.8,
		"dictName": "名华"
	}],
	"code": 20000,
	"success": true,
	"msg": "成功"
}';
?>