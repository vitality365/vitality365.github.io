---
date: 2020-10-06
category:
  - 技术分享
tag:
  - mysql
---

# ddos攻击

ddos攻击原理：发起大量无用的请求访问服务器，耗尽服务器资源，导致服务器瘫痪。

应对方法

## 1：屏蔽ip

如果访问的ip，或者user-agent有规律，可以在服务器端使用这种方法屏蔽。

nginx配置如下：

location / {

                deny 139.208.195.25;

}

## 2：购买cdn：

cdn相当于一个资源缓存，客户通过域名访问，实际访问cdn节点的缓存内容，这样减少服务器访问。

## 3：高防ip：

绕过cdn的直接ip攻击，可以购买高防ip，通过高防ip，隐藏真实ip，流量先通过高防系统过滤，然后再把请求转发到真实ip



nginx 还有几个限流的参数，可以限制用户访问流量。

ngx_http_limit_req_module 请求数量

ngx_http_limit_conn_module 连接数量



相关的nginx详细配置 https://www.cnblogs.com/azhqiang/p/10231490.html


