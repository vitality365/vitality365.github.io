---
date: 2022-01-06
category:
  - 技术分享
tag:
  - yii
  - php
---

# yii发送邮件

邮件发送需要配置

'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'useFileTransport' => false,
            'transport' => [
                'class' => 'Swift_SmtpTransport',
                'host' => 'smtp.163.com',
                'username' => 'XXXX@163.com',//发送者邮箱地址
                'password' => 'XXXXXXXX', //SMTP密钥
                'port' => '587',
                'encryption' => 'ssl',//不要用tls，用tls在服务器上发不出邮件
            ],
        ],

调用方法：

Yii::$app->mailer->compose('模板名')
                ->setFrom('from@163.com')
                ->setTo('from@163.com')
                ->setSubject('标题')
                ->setTextBody('内容')
                ->send();



需要相应的邮箱开启SMTP服务。

点击 设置 - POP3/SMTP/IMAP，开启 IMAP/SMTP服务



还有一个非常奇怪的问题。本地测试一直好使，放到服务器上就一直提示连接不上。

Swift_TransportException: Connection could not be established with host smtp.163.com [Connection timed out

就是加密类型的问题。要用ssl格式，端口是587

