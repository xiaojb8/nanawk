<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/core.php';
if(is_null($user_token)){
    exit('{"code":20000}');
}
$result = DB("SELECT * FROM `user` WHERE `token` = '".$user_token."' limit 1");
if(is_null($result)){
    exit('{"code":20000}');
}else{
    exit('{
	"code": 20000,
	"data": {
		"roles": ["admin"],
		"introduction": "user",
		"avatar": "https://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png",
		"name": "'.$result['account'].'",
		"type": 1,
		"price": '.$result['price'].'
	}
}');
}

?>