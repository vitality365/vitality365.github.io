---
date: 2024-8-10
category:
  - 技术分享
tag:
  - ssl
---

# Let's Encrypt是否比主流付费证书不安全。

## 首先SSL证书的主要目的，是为了加密数据、防篡改、认证网站域名的真实性。

证书公司签发需要申请者有域名的控制权。证书签发后会给两个文件，公钥和私钥文件。之后这两个文件是我们自己部署到我们自己的服务器上的，在HTTP服务器配置好（例如Nginx）。之后每次请求我们的网站，由我们服务器返回这个公钥证书（内容就是字符串）。访问我们网站时，根本不会再访问国外的证书公司，证书是从我们服务器给客户的。懂点HTTPS通信流程就知道，网络延迟的问题跟证书签发公司没有一毛钱关系。

## 国外CA的证书就不安全？

目前最大的两家付费证书是DigiCert 和 GlobalSign，全是国外的，阿里、腾讯就用的这两家的SSL证书。包括推销我证书的这家国内公司的根证书都是国外的，说国外证书就不安全，那他们的也不安全。

Let's Encrypt的根证书是 ISRG Root X1，默认也是各大浏览器、操作系统认可的证书。

## 加密算法

Let's Encrypt和上面两个主流的证书都是 PKCS #1，带有 RSA 加密的 SHA-256。安全性不比他们差。

另外Let's Encrypt作为一家非盈利的组织，主要目的就是为了推广普及SSL证书，他的核心赞助商是谷歌览器、火狐浏览器、亚马逊、思科、EFF、IBM、RedHat Linux，Githut，Nginx等。也就是说各大主流浏览器都认可的，并且支持的。

## 因此，我觉得在安全可靠性上Let's Encrypt不比付费的证书差。

差别就是有效期只有3个月（付费的1年有效期），续签麻烦点（单域名可以自动续，泛域名还需要更新dns解析），客服差点。另外他不支持OV证书的签发。只支持DV证书。

PS：泛域名不支持自动更新证书，需要手动再次执行命令跟新申请同样流程，并且在DNS解析后台再配置一下，自己服务器重新替换文件，加载一下新证书。

## 泛域名命令
```
sudo certbot certonly --manual --preferred-challenges=dns -d "*.yourdomain"
```
过程中会要求在dns里配置一项txt记录，验证dns配置是否成功的命令：
```
nslookup -type=TXT yourdomain.com
```

[Let's Encrypt 官网](https://​letsencrypt.org/zh-cn/)

[HTTPS 与 SSL 证书概要](https://www.runoob.com/w3cnote/https-ssl-intro.html)

最近研究发现SSL证书有个吊销问题，浏览器会访问服务器确认证书的状态，有两种方式CRL（通过下载，吊销证书列表文件，比对）和OCSP（通过 线上访问CA相关服务器，返回证书吊销状态），也就是说，请求的时候确实后可能访问CA的相关服务器。有一种解决方案是OCSP Stapling，就是我们自己的服务器，缓存OCSP的返回结果，然后返回SSL证书的可用状态。

[你不在意的HTTPS证书吊销机制 - SecPulse.COM | 安全脉搏](https://​www.secpulse.com/archives/113075.html)

[Nginx 实现OCSP Stapling-阿里云开发者社区](https://​developer.aliyun.com/article/764381)
