下载地址：http://t.cn/A6MLFAJf

[rewrite_local]

# > 拦截100解锁超级会员
^https?:\/\/tagit\.hyhuo\.com\/cypt\/block100\/get_vip_info$ url script-response-body https://raw.githubusercontent.com/yang971105/Gx/main/guize/Block100SVIPCrack.js

[mitm] 

hostname = tagit.hyhuo.com
*
*
*/
var body = $response.body;
    
body = "lvCQG8cCxqficLk+LttK+L2YRSLM39a3jj+Mfoba4wNaV8x54RYUAWrJvcwwFZemFEWG5xK2FlI8k2hlHsSW7uaAeW45GPxSPt1uvVwPI5zLiMJuHvGycPsqS+ozuIELUsmxd901h+fpVaDUSy+5KRrW+M+mVJRARweO6FjfHosZ/pP8kkty3hz0uDRWb9enH9pG+36Issw9aJCxSkok0Q==";

$done({ body });
