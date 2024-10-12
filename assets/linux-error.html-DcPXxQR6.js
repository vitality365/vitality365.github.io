import{_ as a,c as e,a as t,o as p}from"./app-C8JjDM0h.js";const l={};function r(i,n){return p(),e("div",null,n[0]||(n[0]=[t('<h1 id="linux系统故障处理方法" tabindex="-1"><a class="header-anchor" href="#linux系统故障处理方法"><span>linux系统故障处理方法</span></a></h1><h2 id="查询发生问题的程序日志。" tabindex="-1"><a class="header-anchor" href="#查询发生问题的程序日志。"><span>查询发生问题的程序日志。</span></a></h2><p>1、比如nginx出错了，网站无法访问，第一要查看nginx的错误日志。</p><p>2、查看dmesg（系统日志）</p><p>这些信息会保存到 /var/log/dmesg文件里</p><p>3、last或者w 查看 用户的登录情况</p><p>4、查看tmp、var/tmp 目录下是否有可疑文件</p><p>5、查看crontab里是否有可疑任务，使用crontab -l ，查看/etc/contab 里是否有可疑任务命令，查看/etc/cron.d/里是否有可疑的文件</p><h2 id="linux系统问题及处理方法" tabindex="-1"><a class="header-anchor" href="#linux系统问题及处理方法"><span>linux系统问题及处理方法</span></a></h2><p>1、无法启动，系统一直loading，系统一直进不去。</p><p>解决方法，启动的时候，按住Shift + F2，这样会以debug方式启动，会显示系统启动信息日志。物理机使用Alt + Shift + F1</p><p>找到原因后，可使用单用户模式进入系统：先到系统启动页面，然后按E，选择内核镜像，按E，输入single，回车，按B。</p><h2 id="安全防护" tabindex="-1"><a class="header-anchor" href="#安全防护"><span>安全防护</span></a></h2><p>1、设置防火墙iptables</p><p>2、设置SSH相关（端口） /etc/ssh/ssh_config</p><p>3、及时更新软件</p><p>4、查看crontab。crontab文件的路径在 /var/spool/cron/crontabs目录下面，根据不同用户，有不同的crontab文件。crontab文件也应该及时备份。</p><p>5、使用du -sh ./* 查看占用磁盘空间特别大的文件。</p><p>6、给重要的文件加锁。</p><p>chattr +i ./filename # 加锁</p><p>lsattr // 查看文件枷锁状态</p><p>chattr -i ./filename # 解锁</p>',22)]))}const c=a(l,[["render",r],["__file","linux-error.html.vue"]]),o=JSON.parse('{"path":"/posts/linux-error.html","title":"linux系统故障处理方法","lang":"en-US","frontmatter":{"date":"2021-09-02T00:00:00.000Z","category":["技术分享"],"tag":["linux"]},"headers":[{"level":2,"title":"查询发生问题的程序日志。","slug":"查询发生问题的程序日志。","link":"#查询发生问题的程序日志。","children":[]},{"level":2,"title":"linux系统问题及处理方法","slug":"linux系统问题及处理方法","link":"#linux系统问题及处理方法","children":[]},{"level":2,"title":"安全防护","slug":"安全防护","link":"#安全防护","children":[]}],"git":{"updatedTime":1728706338000,"contributors":[{"name":"test","email":"long275@126.com","commits":1}]},"filePathRelative":"posts/linux-error.md","excerpt":"\\n<h2>查询发生问题的程序日志。</h2>\\n<p>1、比如nginx出错了，网站无法访问，第一要查看nginx的错误日志。</p>\\n<p>2、查看dmesg（系统日志）</p>\\n<p>这些信息会保存到 /var/log/dmesg文件里</p>\\n<p>3、last或者w 查看 用户的登录情况</p>\\n<p>4、查看tmp、var/tmp 目录下是否有可疑文件</p>\\n<p>5、查看crontab里是否有可疑任务，使用crontab -l ，查看/etc/contab 里是否有可疑任务命令，查看/etc/cron.d/里是否有可疑的文件</p>\\n<h2>linux系统问题及处理方法</h2>\\n"}');export{c as comp,o as data};
