---
date: 2021-09-02
category:
  - 技术分享
tag:
  - nginx
---

# nginx相关资料笔记

nginx 是高效的Http、反向代理、邮箱服务器。

[nginx官网](http://nginx.org)

优点：高并发、多路复用（IO，时分）、epoll 异步，非阻塞，动静分离（动态页面和静态页面的处理分发给不同的服务器）。

安装：

centos：yum install -y nginx

ubuntu: apt-get install nginx

nginx文件

通过命令：rpm -ql nginx 查看nginx所有的文件

/etc/logrotate.d/nginx 日志轮转

/etc/nginx/nginx.conf 主配置

/etc/nginx/mime.types 文件关联程序

/usr/lib64/nginx/modules  模块

/etc/nginx/fastcgi.conf php动态网站相关配置

/etc/nginx/fastcgi_params php动态网站相关配置

/usr/sbin/nginx nginx主文件

nginx编译参数

使用命令 nginx -V 查看nginx 配置参数

nginx 主文件配置

3部分，核心模块（进程数，启动 用户），event模块（进程处理的连接数），http模块（http相关参数，访问日志，访问控制，错误日志）

nginx虚拟主机server



nginx不能处理动态页面的请求，动态页面的请求需要通过FastCGI接口给php-fpm

