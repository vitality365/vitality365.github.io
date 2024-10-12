---
date: 2021-09-01
category:
  - 技术分享
tag:
  - linux
  - redis
---

# 在ubuntu上升级或安装最新版本的redis

redis爆出了挺多的安全漏洞（Redis EVAL Lua漏洞），建议升级redis版本。目前redis最新版本是6.2.5。本文介绍一下在ubuntu环境下如何安装最新的版本。

两种方式：

## 1、使用apt-get方法。

这种是最简单、最稳妥的方式。但是缺点是可能不能更新到最新的版本。因为apt的软件仓库可能没有更新最新的redis软件信息。

可以先使用apt-get update命令，更新软件仓库列表信息（PS：apt-get update 只是更新版本库信息，并不是直接更新了软件版本）。

然后使用sudo apt-get install --only-upgrade redis-server 命令，只更新redis-server到最新的版本。



## 2、手动到redis官方网站上面，下载安装包，然后在make，make install安装。

redis的官网：https://redis.io/download

命令如下：

wget https://download.redis.io/releases/redis-6.2.5.tar.gz

tar -zxvf redis-6.2.5.tar.gz

cd redis-6.2.5

make

# 如果之前安装了redis并且正在运行，最好关闭redis服务
service redis-server stop

make install


最后可以使用redis-server -v 命令，查看一下redis的版本。

