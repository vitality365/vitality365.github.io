---
date: 2024-09-22
category:
  - 技术分享
tag:
  - ios
---

# Xcode 15 Archive打包报错phaseScriptExecution

build没问题，archive打包的时候，报错

phaseScriptExecution [cp] embed pods frameworks  no such file or directory

some files could not be transferred
网上找了一堆方法，最后发现这个好使

修改Pods-xxxx-frameworks.sh ，把下面的内容

```
source="$(readlink "${source}")"
```
改成
```
source="$(readlink -f "${source}")"
```

[Fix “Some files could not be transferred (code 23)“ Error in Xcode](https://swiftylion.com/articles/some-files-could-not-be-transferred-code-23)

