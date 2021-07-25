/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#JAV瑙ｉ攣VIP浼氬憳
^https:\/\/yugedu\.com\/api\/v1\/movies\/(.+)\/play url script-request-header javdba.js

^https:\/\/yugedu\.com\/api\/v1\/movies\/.+ url response-body "success":\d+ response-body "success":1

^https:\/\/yugedu\.com\/api\/v1\/users url script-response-body javdbs.js

[mitm]
hostname = yugedu.com

JAV涓嬭浇鍦板潃锛氾紙娉ㄥ唽濉啓閭€璇风爜锛歴8rvea锛�
https://jcapnred.com/?source=srz8aw

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTgwNDk5LCJ1c2VybmFtZSI6Imlvc2hrajEifQ.0lMg96NyeqTl6hJBcRAGlFynaW_GxUaV4iozIPpaJSI';

$done({headers : modifiedHeaders});
