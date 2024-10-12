---
date: 2022-01-12
category:
  - 技术分享
tag:
  - nginx
---

# nginx tcp端口转发

本来想通过nginx 把子域名80端口，映射到服务器上其他端口上，提供tcp端口服务。

但是配置的时候一直报错，应该是80端口被http占用了。应该是steam(tcp/udp)和http 只能又一个监听80端口。

配置的代码如下，注意，端口不能跟http的端口重复。

stream {
    upstream socket_proxy {
        hash $remote_addr consistent;
        # 转发的目的地址和端口
        server 127.0.0.1:9999 weight=5 max_fails=3 fail_timeout=30s;
    }

    server {
       listen 8880;
       proxy_connect_timeout 1s;
       proxy_timeout 3s;
       proxy_pass socket_proxy;
    }
}

