---
date: 2021-09-02
category:
  - 技术分享
tag:
  - linux
---

# linux系统故障处理方法

## 查询发生问题的程序日志。

1、比如nginx出错了，网站无法访问，第一要查看nginx的错误日志。

2、查看dmesg（系统日志）

这些信息会保存到 /var/log/dmesg文件里

3、last或者w 查看 用户的登录情况

4、查看tmp、var/tmp 目录下是否有可疑文件

5、查看crontab里是否有可疑任务，使用crontab -l ，查看/etc/contab 里是否有可疑任务命令，查看/etc/cron.d/里是否有可疑的文件



## linux系统问题及处理方法

1、无法启动，系统一直loading，系统一直进不去。

解决方法，启动的时候，按住Shift + F2，这样会以debug方式启动，会显示系统启动信息日志。物理机使用Alt + Shift + F1

找到原因后，可使用单用户模式进入系统：先到系统启动页面，然后按E，选择内核镜像，按E，输入single，回车，按B。



## 安全防护

1、设置防火墙iptables

2、设置SSH相关（端口） /etc/ssh/ssh_config

3、及时更新软件

4、查看crontab。crontab文件的路径在 /var/spool/cron/crontabs目录下面，根据不同用户，有不同的crontab文件。crontab文件也应该及时备份。

5、使用du -sh ./* 查看占用磁盘空间特别大的文件。

6、给重要的文件加锁。

chattr +i ./filename # 加锁

lsattr // 查看文件枷锁状态

chattr -i ./filename # 解锁
