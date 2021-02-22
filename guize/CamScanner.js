/*
CamScanner unlocks pro, Cloud scanning is not available.

QX & Q & Surge Mitm = ap*.intsig.net,
*/

let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1643731200"}}};
$done({body: JSON.stringify(obj)});
