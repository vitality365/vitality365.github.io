import{_ as r,c as i,b as n,o as t}from"./app-C8JjDM0h.js";const s={};function o(a,e){return t(),i("div",null,e[0]||(e[0]=[n("h1",{id:"nginx配置子域名",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx配置子域名"},[n("span",null,"nginx配置子域名")])],-1),n("p",null,"需要在域名解析里增加子域名解析。",-1),n("p",null,"然后在nginx配置文件里增加子域名的配置项",-1),n("p",null,"server { listen 80; #listen [::]:80;",-1),n("pre",null,[n("code",null,`    server_name xxx.com;#子域名

    root /home/test;#改成子域名对应的路径
    index index.php;

    location / {
            try_files $uri $uri/ /index.php$is_args$args;
    }
    location ~ \\.php$ {
            #try_files $uri $uri/ /index.php$is_args$args;
            fastcgi_pass 127.0.0.1:9000;
            include fastcgi_params;
    }
    error_log /home/test/nginx_error.log error; #错误日志路径
`)],-1),n("p",null,"}",-1),n("p",null,"然后reload nginx",-1),n("p",null,"systemctl reload nginx",-1)]))}const p=r(s,[["render",o],["__file","nginx-dommain.html.vue"]]),g=JSON.parse('{"path":"/posts/nginx-dommain.html","title":"nginx配置子域名","lang":"en-US","frontmatter":{"date":"2022-01-07T00:00:00.000Z","category":["技术分享"],"tag":["linux","nginx"]},"headers":[],"git":{"updatedTime":1728706338000,"contributors":[{"name":"test","email":"long275@126.com","commits":1}]},"filePathRelative":"posts/nginx-dommain.md","excerpt":"\\n<p>需要在域名解析里增加子域名解析。</p>\\n<p>然后在nginx配置文件里增加子域名的配置项</p>\\n<p>server {\\nlisten 80;\\n#listen [::]:80;</p>\\n<pre><code>    server_name xxx.com;#子域名\\n\\n    root /home/test;#改成子域名对应的路径\\n    index index.php;\\n\\n    location / {\\n            try_files $uri $uri/ /index.php$is_args$args;\\n    }\\n    location ~ \\\\.php$ {\\n            #try_files $uri $uri/ /index.php$is_args$args;\\n            fastcgi_pass 127.0.0.1:9000;\\n            include fastcgi_params;\\n    }\\n    error_log /home/test/nginx_error.log error; #错误日志路径\\n</code></pre>"}');export{p as comp,g as data};
