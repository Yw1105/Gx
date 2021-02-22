/*
Netease snail reading unlock vip
By yxiaocai & JO2EY

Surge & QX MITM = p.du.163.com
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});
