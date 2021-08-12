<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
$result = not_login();
if(!$result){
    exit(return_data(false,null,'你要登录'));
}
function add_vadytg($str){
    if(is_null($str)){
        return null;
    }
    if(preg_match("/[\x{4e00}-\x{9fa5}]+/u", $str)) {
        $len = mb_strlen($str, 'UTF-8');
        if($len >= 3){
            $str = mb_substr($str, 0, 1, 'UTF-8') . '*' . mb_substr($str, -1, 1, 'UTF-8');
        } elseif($len == 2) {
            $str = mb_substr($str, 0, 1, 'UTF-8') . '*';
        }
    } else {
        $len = strlen($str);
        if($len >= 3) {
            $str = substr($str, 0, 1) . '*' . substr($str, -1);
        } elseif($len == 2) {
            $str = substr($str, 0, 1) . '*';
        }
    }
    return $str;
}
if($result['levelid'] == 0){
    $levelName = '无';
    $levelAccount = '无';
    $levelPhone = '无';
    $levelQQ = '无';
}else{
    $level_result = DB("SELECT * FROM `user` WHERE `id` = '".$result['levelid']."' limit 1");
    if(is_null($level_result)){
        $levelName = '已注销';
        $levelAccount = '已注销';
        $levelPhone = '已注销';
        $levelQQ = '已注销';
    }else{
        $levelName = add_vadytg($level_result['nickname']);
        $levelAccount = add_vadytg($level_result['account']);
        $levelPhone = add_vadytg($level_result['phone']);
        $levelQQ = add_vadytg($level_result['qq']);
    }
}
$data = json_decode('{
		"levelQQ": null,
		"phone": null,
		"schoolName": null,
		"payed":  null,
		"levelSchoolName": null,
		"examPrice": null,
		"agentAccount": null,
		"type": "2",
		"amount": null,
		"price": null,
		"consumed": null,
		"token": null,
		"agentName": null,
		"levelName": null,
		"levelAccount": null,
		"qq": null,
		"levelPhone": null
	}',true);
$data['levelQQ'] = $levelQQ;
$data['phone'] = $result['phone'];
$data['schoolName'] = $result['school'];
$data['payed'] = round($result['consumed']+$result['amount'],2);
$data['agentAccount'] = $result['account'];
$data['amount'] = $result['amount'];
$data['price'] = $result['price'];
$data['consumed'] = $result['consumed'];
$data['token'] = $result['token'];
$data['agentName'] = $result['nickname'];
$data['levelName'] = $levelName;
$data['levelAccount'] = $levelAccount;
$data['qq'] = $result['qq'];
$data['levelPhone'] = $levelPhone;
exit(return_data(true,$data));
?>