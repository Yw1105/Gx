
[rewrite_local]

#JAV瑙ｉ攣VIP浼氬憳
^https:\/\/yugedu\.com\/api\/v1\/movies\/(.+)\/play url script-request-header javdba.js

^https:\/\/yugedu\.com\/api\/v1\/movies\/.+ url response-body "success":\d+ response-body "success":1

^https:\/\/yugedu\.com\/api\/v1\/users url script-response-body javdbs.js

[mitm]
hostname = yugedu.com


https://jcapnred.com/?source=srz8aw

*/

let obj = JSON.parse($response.body);
obj = {
  "success" : 1,
  "message" : null,
  "data" : {
    "user" : {
      "id" : 900000,
      "promotion_days" : 999,
      "checkin_days" : 0,
      "want_watch_count" : 0,
      "promotion_code" : "srz8aw",
      "vip_expired_at" : "2099-09-09T22:16:31.000+08:00",
      "username" : "yang778899",
      "share_url" : "https://jav3.app/?source=srz8aw",
      "last_checkin_at" : null,
      "promote_users_count" : 999,
      "email" : "1764520433@qq.com",
      "is_vip" : true,
      "watched_count" : 0
    },
    "banner_type" : "payment"
  },
  "action" : null
}
;

$done({body: JSON.stringify(obj)});
