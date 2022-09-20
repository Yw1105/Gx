#羊了个羊次数

[rewrite_local]
^https:\/\/.+\.easygame2021\.com\/.+ url response-body "daily_count":\d+,"topic_count":\d+, response-body "daily_count":9999e+320,"topic_count": 9999e+320,

hostname = *.easygame2021.com
