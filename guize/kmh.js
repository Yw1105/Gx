/*
看漫画极速版 unlock vip, currently off the shelf
From HoGer

Surge & QX MITM = getuserinfo.321mh.com
*/

var body = $response.body;
var url = $request.url;
const path = "/app_api/v5/getuserinfo/";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["isvip"] = "1";
	body = JSON.stringify(obj);
 }
$done({body});
