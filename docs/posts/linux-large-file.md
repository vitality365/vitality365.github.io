---
date: 2021-06-06
category:
  - 技术分享
tag:
  - linux
---

# llinux查看哪些文件夹或文件占用大量磁盘空间

服务器发现磁盘空间报警，发现磁盘占用了已经95%了。

查看磁盘空间的命令如下：

查看磁盘整体使用状况：

df -h



查找大于1G的文件：

find / -size +1G |xargs ls -lh



查看目录下文件占用空间（包括文件夹），并排序，最大的最上面

du -ah --max-depth=1 | sort -rn



查看当前目录下（包含子目录），有哪些文件包含 某个字符串。

grep -rn "要搜索的内容" *



删除当前目录下所有文件

rm *



发现 /usr/share/nginx/on 文件占用了15G空间，tail 命令查看内容，都是nginx的访问日志。把nginx的 access_log 关闭(access_log off)。然后把这个文件删除了。

