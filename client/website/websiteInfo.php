<?php
require $_SERVER['DOCUMENT_ROOT'].'/core/config.php';
echo '{
	"status": "0010160009",
	"obj": {
		"weixinQrcodeDisplay": 0,
		"qq2": "",
		"qq1": "",
		"taobaoLinkDisplay": 0,
		"qq2Display": 0,
		"weixinPublicQrcode": "",
		"cxEnableAdd": 1,
		"version": 0,
		"cxAddUrl": "http://111.229.153.173:6868/add",
		"id": 60,
		"cxQueryUrl": "http://111.229.153.173:6867/userCx",
		"qq1Display": 0,
		"title": "'.$website_name.'",
		"copyRight": "",
		"loginBg": "",
		"zhsEnableAdd": 1,
		"description": "",
		"userId": 230,
		"domain": "'.$_SERVER['HTTP_HOST'].'",
		"partner": "",
		"notice": "请保持余额充足，欠费将不进行后续处理",
		"zfbQrcodeDisplay": 0,
		"redirectUrl": "",
		"key": "",
		"weixinQrcode": "",
		"logo": "",
		"weixinPublicQrcodeDisplay": 0,
		"domainSuffix": "",
		"privateKey": "",
		"qqQunLink": "",
		"websiteHelpInfo": "",
		"weidianLinkDisplay": 0,
		"zhsAddUrl": "http://111.229.153.173:6869/add",
		"domain2": "'.$_SERVER['HTTP_HOST'].'",
		"color": "",
		"qqQun": "",
		"zfbQrcode": "",
		"taobaoLink": "",
		"subdomain": "",
		"payType": 0,
		"qqQunDisplay": 0,
		"weidianLink": ""
	},
	"code": 20000,
	"success": true,
	"msg": "成功"
}';
?>