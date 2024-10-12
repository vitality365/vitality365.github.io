---
date: 2022-01-10
category:
  - 技术分享
tag:
  - linux
  - screen
---

# screen多重视窗管理程序

linux下有时候，会通过ssh运行服务程序（比如消息服务），当ssh断开的时候，服务程序也断开了，为了让服务程序继续运行，可以使用screen命令。

screen命令为多重视窗管理程序。可以看作是窗口管理器的命令行界面版本。它提供了统一的管理多个会话的界面和相应的功能。使用screen，即使断开连接，任务也能继续执行。

参数：

-d<作业名称>  将指定的screen作业离线
-m  即使目前已在作业中的screen作业，仍强制建立新的screeN作业
-r<作业名称>  恢复离线的screen作业
-R  先试图恢复离线的作业，若找不到离线的作业，即建立新的screen作业
-s  指定建立新视窗时，所要执行的shell
-S<作业名称>  创建指定screen作业的名称
-v  显示版本信息
-x  恢复之前离线的screen作业
-ls  显示目前所有的screen作业
-list  显示目前所有的screen作业
-wipe  检查目前所有的screen作业，并删除已经无法使用的screen作业


例子：

新建一个叫name的终端：
screen -S name

重新连接id为2276的screen终端：
screen -r 2276

断开连接id为2276的screen终端：
screen -X -S 4588 quit

显示已创建的screen终端：
screen -ls

将test作业离线：
screen -d test

在每个screen session 下，所有命令都以 ctrl+a(C-a) 开始
C-a d 暂时离开当前session
C-a k 杀死当前的窗口，同时也将杀死这个窗口中正在运行的进程
