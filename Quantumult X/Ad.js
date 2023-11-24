#自用去广告，对现有的进行补充
#2023-11-03

  
hostname = api.gongkaoleida.com,api.8eb269a.com

#公考雷达
^https:\/\/api\.gongkaoleida\.com\/api\/v2\/ad\/info\? url reject-dict  

#One  
^https:\/\/api\.8eb269a\.com\/v2\.5\/ad\/space url reject-dict


