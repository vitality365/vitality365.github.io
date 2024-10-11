---
date: 2020-03-25
category:
  - 技术分享
tag:
  - linux
---

# Linux文件文件夹的压缩和解压

Linux文件文件夹的压缩和解压

## 1.zip命令

例如：zip -r mysql.zip mysql 该句命令的含义是：将mysql文件夹压缩成mysql.zip

zip -r abcdef.zip abc def.txt 这句命令的意思是将文件夹abc和文件def.txt压缩成一个压缩包abcdef.zip

## 2.unzip命令

与zip命令相反，这是解压命令，用起来很简单。 如：unzip mysql.zip 在当前目录下直接解压mysql.zip。

## 3.tar命令

例如：tar -cvf 123.tar file1 file2 dir1 该句命令实现一个tar压缩，它是将两个文件（file1和file2）和一个文件夹(dir1)压缩成一个123.tar文件。

tar -zxvf apache-tomcat-7.0.75.tar.gz 该命令在解压安装tomcat时使用，是将apache-tomcat.7.0.75.tar.gz直接解压到当前目录下。tar同时具有压缩的解压的功能，使用时根据参数和命令结构区分。

## 4.gzip和gunzip

压缩：gzip filename 

解压：gunzip filename.gz

gzip压缩只能压缩文件，不能压缩文件夹。gzip压缩会令源文件消失
