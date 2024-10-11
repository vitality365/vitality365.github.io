---
date: 2022-01-09
category:
  - 技术分享
tag:
  - mysql
---

# mysql查询优化相关（持续更新）

不要使用select *，查询返回的字段越多，速度越慢。

查询条件或排序字段，尽量设置索引。

字段尽量设置成not null，减少空判断

字段size能设计的尽可能小。

设计索引。使用explain语句查看查询计划。

explain select id,name from test where id=1
用join替代子查询

join的字段，应该设置索引

尽量不要用like。

不要在查询索引字段上使用函数

ip地址字段设置成unsigned int，节省空间，查询一定范围的ip简单。ip between ip1 and ip2
