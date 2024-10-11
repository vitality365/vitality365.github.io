---
date: 2020-03-26
category:
  - 技术分享
tag:
  - linux
  - yii
  - mysql
  - php
---

# ubuntu搭建lnmp yii mysql开发环境

## 安装php
sudo apt install php7.2

## 安装nginx
sudo apt install nginx-full

## 安装对应的php-fpm
sudo apt install php7.2-fpm
sudo apt install php7.2-mysql

## 配置网站目录
sudo vim /etc/nginx/sites-available/default

include /home/xxx/site.conf

/home/xxx/site.conf 内容如下
```
server {
listen 80;
#listen [::]:80;

server_name long.dev.com;

root /home/long/code;
index index.php;

location / {
try_files $uri $uri/ /index.php$is_args$args;
}
location ~ \.php$ {
#try_files $uri $uri/ /index.php$is_args$args;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
include fastcgi_params;
}
error_log /home/long/code/nginx_error.log error;
#access_log /home/long/code/nginx_access.log main;
}
```

在 /etc/nginx/fastcgi_params 文件里增加下面内容

```
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
fastcgi_param PATH_INFO $fastcgi_script_name;
```

## 重启php fpm
sudo service php7.2-fpm restart

sudo nginx -s reload

## 安装mysql
ubuntu上安装mysql非常简单只需要几条命令就可以完成。
1. sudo apt-get install mysql-server
2. apt-get isntall mysql-client
3. sudo apt-get install libmysqlclient-dev
安装过程中会提示设置密码什么的，注意设置了不要忘了，安装完成之后可以使用如下命令来检查是否安装成功：

sudo netstat -tap | grep mysql

通过上述命令检查之后，如果看到有mysql 的socket处于 listen 状态则表示安装成功。

登陆mysql数据库可以通过如下命令：

mysql -u root -p
-u 表示选择登陆的用户名， -p 表示登陆的用户密码，上面命令输入之后会提示输入密码，此时输入密码就可以登录到mysql。

## 安装samba
sudo apt-get install samba
sudo apt-get install smbclient
安装完成后执行
samba -V
如果可以看到版本号即为安装成功



需要添加samba账户：

sudo smbpasswd -a username



Ubuntu下samba配置和使用
第二步需要配置samba服务器，使用如下命令打开samba的配置文件

sudo vi /etc/samba/smb.conf

加入配置信息

[test]

    comment = Public Stuff

    path = /home/test

    writable = yes

    valid users = test


这其中比较重要的参数为path和valid users, path指定了samba服务器的根目录，可以任意指定合法路径； valid users表示可以访问samba服务器的合法用户；用户在配置时注意需要将路径改为自己需要的路径，切勿全盘照抄

Ubuntu下samba配置和使用
由于在上文中配置的samba服务器根文件路径在我的Ubuntu上还不存在，所以我需要在对应路径下创建文件夹，并修改其权限
mkdir share
chmod 777 share

Ubuntu下samba配置和使用
接下来需要为samba服务器添加用户了，由于我的配置中使用的是名为"zhang"的用户(该用户其实就是我的登录用户)，所以我需要通过如下命令来为samba添加此用户并设置密码
sudo smbpasswd -a zhang

Ubuntu下samba配置和使用
配置完成后需要重启samba服务器，使用如下命令重启samba服务器

sudo /etc/init.d/samba restart

Ubuntu下samba配置和使用
接下来就可以在windows上访问samba服务器了，通过如下的方式访问

\\+ ip

在linux中可以通过命令 ifconfig查看ip地址

输入地址后，我们应该就可以看到我们之前创建的share文件夹了

安装ssh
sudo apt install openssh-server

安装yii
sudo apt install composer
composer create-project --prefer-dist yiisoft/yii2-app-basic basic
