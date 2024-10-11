---
date: 2022-01-08
category:
  - 技术分享
tag:
  - php
---

# php时间（小时）显示不准问题处理

最近发现网站的时间显示不正确，差了8个小时。

后来查资料发现是php时区的问题。

需要改php.ini文件。find找到php.ini。

sudo find / -name php.ini
把date.timezone去掉前面的分号，改成

date.timezone = PRC
然后重启对应的php服务。我的环境是php-fpm

systemctl restart php-fpm.service