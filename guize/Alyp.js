[Script]
阿里云盘首页简化 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/apps\/v1\/users\/home\/widgets, requires-body=1,script-path=mock.js, argument=("?items")->$1:null，，"test"&("?recentUsed")->$1:null，，"test1"

阿里云盘vip = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/business\/v1\.0\/users\/vip/info, requires-body=1,script-path=mock.js, argument=("?vipList")->$1: [{"code": "svip.20t"，， "promotedAt": 1675574551，， "expire": 4077667351，， "name": "8TB超级会员"} ]，，"test"&("?level")\s?:\s?("(.+?)"|\d|null)->$1: "20t"&("?name")\s?:\s?("(.+?)"|\d|null)->$1: "20T超级会员"

阿里云盘vip容量和限制 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/v2\/databox\/get_personal_info, requires-body=1,script-path=mock.js, argument=("?total_size")\s?:\s?("(.+?)"|\d|null)->$1: 1125888647843555573.76&("?spu_id")\s?:\s?("(.+?)"|\d|null)->$1: "svip"&("?name")\s?:\s?("(.+?)"|\d|null)->$1: "超级会员"&("?is_expires")\s?:\s?("(.+?)"|\d|null)->$1: false&("?clarity_limit")->"test"，，"quota": 3}，，{"feature_id": "video"，，"feature_attr_id": "clarity_limit"，，"quota": -1}，，{"feature_id": "video"，，"feature_attr_id": "test"

阿里云盘vip容量和限制1 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/adrive\/v1\/user\/driveCapacityDetails, requires-body=1,script-path=mock.js, argument=("?drive_total_size")\s?:\s?("(.+?)"|\d|null)->$1: 1125888647843555573.76

阿里云盘vip容量明细 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/adrive\/v1\/user\/capacityDetails, requires-body=1,script-path=mock.js, argument=("?expired")\s?:\s?("(.+?)"|\d|null)->$1: "permanent"&("?size")\s?:\s?("(.+?)"|\d|null)->$1: 1125888647843555573.76

阿里云盘vip描述 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/business\/v1\/users\/me\/vip\/info, requires-body=1,script-path=mock.js, argument=("?description")\s?:\s?("(.+?)"|\d|null)->$1: "永久有效"&("?rightButtonText")\s?:\s?("(.+?)"|\d|null)->$1: "还续撒费"&("?level")\s?:\s?("(.+?)"|\d|null)->$1: "20t"

#阿里云盘图标自定义 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/adrive\/v1\/app\/logos, requires-body=1,script-path=mock.js, argument=("?labelCode")\s?:\s?("(.+?)"|\d|null)->$1: "acquired"
#&("?code")\s?:\s?("(.+?)"|\d|null)->$1: "2023-jan-daily-checkin"

[MITM]
hostname = %APPEND% api.aliyundrive.com
