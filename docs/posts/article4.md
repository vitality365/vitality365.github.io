---
date: 2022-01-04
category:
  - 技术分享
tag:
  - linux
  - git
---

# git常用命令

git config

git config命令的作用是配置git的相关信息。



设置用户名：

git config --global user.name "name"



设置用户邮箱：

git config --global user.email "eamil"



保存用户名和密码

git config --global credential.helper store



git init



git init命令的作用是在当前目录中初始化仓库，并且创建一个名为.git的子目录，该目录含有你初始化的Git仓库中所有的必须文件。



git status



git status命令的作用是显示文件状态，红色表示工作目录的文件被修改但还没有提交到暂存区，绿色表示已经提交到暂存区。



以极简的方式显示文件状态：git status -s

A：本地新增的文件（服务器上没有）

C：文件的一个新拷贝

D：本地删除的文件（服务器上还在）

M：红色为修改过未被添加进暂存区的，绿色为已经添加进暂存区的

R：文件名被修改

T：文件的类型被修改

U：文件没有被合并(你需要完成合并才能进行提交)

X：未知状态(很可能是遇到git的bug了，你可以向git提交bug report)

?：未被git进行管理，可以使用git add fileName把文件添加进来进行管理

已经被修改但还没提交到暂存区的文件，可以通过命令git checkout -- fileName撤销更改。

git add



git add命令的作用是将文件从工作目录添加至暂存区



把所有修改的信息添加到暂存区：git add .



已经被提交到暂存区的文件，可以通过命令git reset HEAD – fileName撤销提交。



git commit



git commit命令的作用是将暂存区的修改提交到本地仓库，同时会生成一个commmit-id。



将暂存区的修改提交到本地仓库：git commit -m “message”，”message”是本次提交的简述内容，比如添加新功能或修复bug等



将本地工作区中修改后还未使用git add .命令添加到暂存区中的文件也提交到本地仓库：git commit –a –m “message”，该命令相当于以下两条命令：



git add . 把所有修改的信息添加到暂存区



git commit -m “message”：将暂存区的修改提交到本地仓库



修改最后一次提交（可用于漏掉某个文件的提交或重新编辑信息）：git commit –amend



git pull



git pull命令的作用是获取远程主机某个分支的更新，再与本地指定分支合并。git pull <远程主机名><远程分支名>:<本地分支名>

取回远程主机上的dev分支与本地的master分支合并：git pull origin dev:master



取回远程主机上的dev分支与当前分支合并：git pull origin dev，该命令相当于以下两条命令：



git fetch origin：获取远程主机上所有分支的更新，也可以用git fetch origin dev表示获取远程主机上dev分支的更新



git merge origin/dev：当前分支合并dev分支



注意：通过git fetch所取回的更新，在本地主机上需要用“远程主机名/分支名”的形式读取，比如origin主机的master分支，就需要用origin/master来读取。



git fetch



git fetch命令的作用是将远程主机上所有分支的更新取回本地，并记录在.git/FETCH_HEAD中



获取远程主机上master分支的代码：git fetch origin



在本地新建test分支，并将远程主机上master分支代码下载到本地test分支：git fetch origin master:test



git push



git push命令的作用是将本地分支的更新推送到远程主机上。



将本地master分支的更新推送到远程主机上：git push origin master



删除远程dev分支：git push origin –delete dev



git branch



git branch命令的作用主要是做分支管理操作。



查看本地分支：git branch



查看本地和远程分支：git branch -a



新建名字为test的分支：git branch test



将test分支名字改为dev：git branch -m test dev



删除名字为dev的分支：git branch -d dev



强制删除名字为dev的分支：git branch -D dev



以上命令都是针对本地仓库操作，不影响远程仓库。



git checkout



git checkout命令最常用的情形是创建和切换分支以及撤销工作区的修改。



切换到tag为v1.0.0时对应的代码：git checkout v1.0.0



在tag为v1.0.0的基础上创建分支名为test的分支：git checkout -b test v1.0.0。该命令相当于以下两条命令：



git branch test v1.0.0：在v1.0.0的基础上创建分支test



git checkout v1.0.0：切换到分支test



把当前目录所有修改的文件从HEAD中移除并且把它恢复成未修改时的样子：git checkout .



撤销工作目录中文件的修改（文件有改动但还未git add）：git checkout – fileName，或者撤销所有修 改使用git checkout .



git tag



git tag命令主要是对项目标签进行管理。



查看已有的标签历史记录：git tag



给当前最新的commit打上标签：git tag <标签的定义>

给对应的commit id打上标签：git tag <标签定义>

切换到tag：git checkout tagName (此时不在任何分支)



推送tag到远程服务器：git push origin tagName



git log



git log命令的作用是查看历史提交记录



查看历史提交记录：git log



将每条历史提交记录展示成一行：git log –oneline



查看某个人的提交记录：git log –author=”name”



显示ASCII图形表示的分支合并历史：git log –graph



显示前n条记录：git log -n



显示某个日期之后的记录：git log –after=”2018-10-1”，包含2018年10月1号的记录



显示某个日期之前的记录：git log –after=”2018-10-1，包含2018年10月1号的记录



显示某两个日期之间的记录：git log –after=”2018-10-1” –before=”2018-10-7”



git reset



git reset命令的作用是撤销暂存区的修改或本地仓库的提交。



撤销已经提交到暂存区的文件（已经git add但还未git commit）:



撤销已经提交到暂存区的文件：git reset HEAD fileName或git reset –mixed HEAD fileName



撤销所有提交：git reset HEAD .或git reset –mixed HEAD .



对已经提交到本地仓库做撤销（已经git commit但还未git push）：



将头指针恢复，已经提交到暂存区以及工作区的内容都不变：git reset –soft commit-id或git reset -soft HEAD~1



将头指针恢复并且撤销暂存区的提交，但是工作区的内容不变：git reset –mixed commit-id或git reset –mixed HEAD~1



将所有内容恢复到指定版本：git reset –hard commit-id或git reset –hard HEAD~1



注意：commit-id可通过git log查看（取前六位即可），HEAD~1表示前一次提交（可以此类推）。



git remote



git remote命令的作用主要是管理远程仓库。



查看关联的远程仓库的名称：git remote



查看关联的远程仓库的详细信息：git remote -v



添加远程仓库的关联：git remote add origin <远程仓库地址>

删除远程仓库的关联：git remote remove <远程仓库名称>

修改远程仓库的关联：git remote set-url origin <新的远程仓库地址>

更新远程仓库的分支：git remote update origin –prune



git merge



git merge命令的作用主要是分支的合并。



1：如果当前是master分支，需要合并dev分支：git merge dev



git stash



git stash命令的作用主要如果当前分支所做的修改你还不想提交，但又需要切换到其他分支去查看，就可以使用git stash保存当前的修改。



保存当前进度：git stash



查看已经保存的历史记录：git stash list



重新应用某个已经保存的进度，并且删除进度记录：git stash pop <历史进度id>，

重新应用某个已经保存的进度，但不删除进度记录：git stash apply <历史进度id>，如果直接使用git stash默认是使用最近的保存

删除某个历史进度：git stash drop <历史进度id>

删除所有的历史进度：git stash clear



gitignore



.gitignore文件的作用是忽略那些没必要的提交，比如系统环境或程序运行时产生的文件。GitHub为我们提供了各个语言的gitignore合集github/gitignore，其中也包括Android.gitignore。



将本地新建的项目提交到远程仓库的步骤



初始化本地仓库git init



将本地内容添加至git本地暂存区中git add .



将暂存区添加至本地仓库中git commit -m “first commit”



添加远程仓库路径git remote add origin https://github.com/gybguohao/test.git



将本地内容push至远程仓库中git push -u origin master



处理git status后的文件名中文乱码问题：

git config --global core.quotepath false
