#!name=人民日报去广告
#!desc=人民日报去广告
#!homepage=https://github.com/deezertidal
#!author=
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/rmrb.png


^https:\/\/app\.peopleapp\.com\/Api\/\d+\/HomeApi\/getContentList url script-response-body https://raw.githubusercontent.com/irenemsIrenes/profiles/master/Quantumult/X/js/people-news.js


hostname = app.peopleapp.com




/**
 * @supported 00D3992C8F27 8B87B7345981
 */


var obj = JSON.parse($response.body);
if (obj.data) {
let cnt = 0
  for (var i = obj.data.length - 1; i >= 0; i--) {
      let item = obj.data[i];
      if (item.view_type && item.view_type.startsWith('advert')) {
          obj.data.splice(i, 1);
          ++cnt;
      }
  }
  //$notify("people news", "ads", "remvoved " + cnt);
}
$done({ body: JSON.stringify(obj) });
