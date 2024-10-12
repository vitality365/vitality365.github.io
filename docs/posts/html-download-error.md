---
date: 2021-10-20
category:
  - 技术分享
tag:
  - html
---

# html A标签，download属性，点击不下载问题处理

html A标签，download属性，点击不下载，而是跳转到了另一个页面。

原因是文件下载地址是不能跨域的。本域名服务器开个代理接口就可以了。
