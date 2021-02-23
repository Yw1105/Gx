/*
国区wps
by eHpo1

[Script]
http-response ^https?:\/\/account\.wps\.cn\/api\/users requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/yang971105/Gx/main/guize/wps.js

[MITM]
hostname = account.wps.cn
*/

var obj = JSON.parse($response.body);

var id = obj.userid;

obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 1929574244 },
    { spid: "ocr", times: 0, expire_time: 1929574244 },
    { spid: "pdf2doc", times: 0, expire_time: 1929574244 },
    { spid: "pdf_merge", times: 0, expire_time: 1929574244 },
    { spid: "pdf_sign", times: 0, expire_time: 1929574244 },
    { spid: "pdf_split", times: 0, expire_time: 1929574244 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: 0000,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 1929574244,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 1929574244 },
      { memberid: 20, name: "WPS会员", expire_time: 1929574244 },
      { memberid: 12, name: "稻壳会员", expire_time: 1929574244 }
    ]
  },
  wealth: 0,
  expire_time: 1929574244
};

obj.userid = id;

$done({ body: JSON.stringify(obj) });
