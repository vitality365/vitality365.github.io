---
date: 2022-01-07
category:
  - 技术分享
tag:
  - linux
  - nginx
---

# nginx配置子域名

需要在域名解析里增加子域名解析。

然后在nginx配置文件里增加子域名的配置项

server {
        listen 80;
        #listen [::]:80;

        server_name xxx.com;#子域名

        root /home/test;#改成子域名对应的路径
        index index.php;

        location / {
                try_files $uri $uri/ /index.php$is_args$args;
        }
        location ~ \.php$ {
                #try_files $uri $uri/ /index.php$is_args$args;
                fastcgi_pass 127.0.0.1:9000;
                include fastcgi_params;
        }
        error_log /home/test/nginx_error.log error; #错误日志路径
}

然后reload nginx

systemctl reload nginx
