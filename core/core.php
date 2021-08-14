<?php
header("Content-type: text/html; charset=utf-8");
require $_SERVER['DOCUMENT_ROOT'].'/core/DB.php';
require $_SERVER['DOCUMENT_ROOT'].'/core/config.php';
$headers = getallheaders();
if(!isset($headers['X-Token'])){
    $user_token = null;
}else{
    $user_token = $headers['X-Token'];
}
function return_data($success,$obj,$msg='success'){
    $class_data = json_decode('{
        "status": "0010160009",
        "obj": null,
        "code": 20000,
        "success": true,
        "msg": "success"
    }',true);
    $class_data['success'] = $success;
    $class_data['msg'] = $msg;
    if(!is_null($obj)){
        $class_data['obj'] = $obj;
    }
    return json_encode($class_data);
}
function not_login(){
    global $user_token;
    if(is_null($user_token)){
        return false;
    }
    $result = DB("SELECT * FROM `user` WHERE `token` = '".$user_token."' limit 1");
    if(is_null($result)){
        setcookie('Admin-Token');
        return false;
    }else{
        if($result['status']!='1'){
            setcookie('Admin-Token');
            return false;
        }
        return $result;
    }
}
function token($account,$password){
    $salt = 'xiaobanb';
    return md5($account.$salt.$password);
}
function password($account,$password){
    return md5($account.$password);
}
function add_consume($userid,$payType,$payAmount,$targetAgentId=null,$targetAgentAccount=null){
    if(!is_null($targetAgentId)){
        $targetAgentId = '\''.$targetAgentId.'\'';
    }else{
        $targetAgentId = 'NULL';
    }
    if(!is_null($targetAgentAccount)){
        $targetAgentAccount = '\''.$targetAgentAccount.'\'';
    }else{
        $targetAgentAccount = 'NULL';
    }
    return INSERT("INSERT INTO `consume` (`id`, `userid`, `targetAgentId`, `targetAgentAccount`, `payType`, `payAmount`, `createTime`) VALUES (NULL, '".$userid."', ".$targetAgentId.", ".$targetAgentAccount.", '".$payType."', '".$payAmount."', CURRENT_TIMESTAMP);");
}

