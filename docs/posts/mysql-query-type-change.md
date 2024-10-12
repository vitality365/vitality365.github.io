---
date: 2024-10-10
category:
  - 技术分享
tag:
  - mysql
---

# mysql查询条件的类型转换问题

mysql的查询条件，会进行类型转换，比如一个int类型的字段 id ，使用字符串作为值 'aa'，
```
where id='aa'
```
这种会自动把'aa'变为0，整个条件等价于 
```
where id=0
```
