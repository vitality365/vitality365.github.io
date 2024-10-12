---
date: 2020-03-24
category:
  - 技术分享
tag:
  - linux
  - php
  - mysql
---

# centos7 nginx php7环境搭建及权限配置

## 一.安装nginx

1.安装yum源

rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

2.安装nginx

yum install -y nginx

3.启动nginx并设置开机自动运行

systemctl start nginx #启动,restart-重启,stop-停止
systemctl enable nginx #开机启动

4.查看版本及运行状态

nginx -v #查看版本
ps -ef | grep nginx #查看运行状态

## 二.安装php7

1.安装yum源

rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
2.查看php7 yum组件，示例安装php7.2

yum search php72w
3.选择自己需要的组件安装，php72w.x86_64 和 php72w-fpm.x86_64 为核心程序必装,下面示例中选择了一些常用组件的安装，不太理解各个组件用处的读者可以全部安装，以免以后使用相关组件时出错。

yum install php72w.x86_64 php72w-fpm.x86_64 php72w-cli.x86_64 php72w-common.x86_64 php72w-gd.x86_64 php72w-ldap.x86_64 php72w-mbstring.x86_64 php72w-mysqlnd.x86_64 php72w-pdo.x86_64 php72w-pecl-redis.x86_64 php72w-pecl-mongodb.x86_64 php72w-opcache.x86_64 php72w-devel.x86_64 php72w-bcmath.x86_64
4.启动php并设为开机启动

systemctl start php-fpm #启动,restart-重启，stop-停止
systemctl enable php-fpm #开机启动
5.查看版本及运行状态

php-fpm -v #查看版本
ps -ef | grep php-fpm #查看运行状态
进行完以上步骤之后，读者自行在nginx中配置web目录，已经可以正常运行了，但是此时nginx和php是以root身份运行，以最高权限运行web文件会给系统带来安全隐患，以下为权限配置示例

## 三.配置nginx权限

1.建立www用户及www用户组，将www用户同时加入www用户组和root组

adduser www #建立www用户
groupadd www #建立www用户组
usermod -G www www #将www用户加入www用户组同时从其他组移除
usermod -a -G root www #将www用户加入root用户组,有-a参数不从其他组移除，此时www同时属于www和root组

2.将nginx以www用户及www用户组运行，修改nginx.conf文件，在文件头部：

user www www; #以www身份运行
3.将web目录的拥有者改为www:www，权限改为755

chown www:www web目录 -R #修改拥有者
chmod 755 web目录 -R #修改权限
4.重载nginx配置

nginx -t #测试

nginx -s reload #重载配置
ginx配置的时候注意错误日志的路径，当你的php运行出现未知错误的时候，可以查看日志检查错误原因。

## 四.配置php-fpm权限 
完成以上三步似乎就可以了，但是还有一些问题，那就是php-fpm的运行用户，默认情况下php-fpm是以apache运行的，这会导致php脚本在行使文件操作权限时受到权限限制：

1.打开php-fpm.conf，在最下面一行找到：

cd /etc/php-fpm.d/
ll
##显示出www.conf文件
vim www.conf
#找到user和group改为:
user = www
group = www