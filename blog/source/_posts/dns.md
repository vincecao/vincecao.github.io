---
title: DNS相关
date: 2017-08-08 13:45:38
tags:
- 科学
categories: Config
---

整理的部分国内DNS，仅标记下方便自己使用，来源互联网

# DNS

## 个人

aixyz: `115.159.146.99`, `123.206.21.48`
GreenDNS `59.111.96.244` （疑似已失效）

WKU移动最快解析 `61.153.177.197` `60.191.244.5`
WKU classroom computer official setting
- IP `10.33.97.21`
- Subnet mask `255.255.255.0`
- Default gateway `10.33.97.254`
- DNS `131.125.10.10` `131.125.10.11`

---

## 国内公共

广东 `119.29.29.29`
江苏 `114.114.114.114`
浙江 `223.5.5.5`

LUG Servers 防污染DNS新增5353端口 `202.38.93.153` （教育网）
中国移动 `202.141.176.93`
中国电信 `202.141.162.123`

一根服务器 `192.58.128.30`
FastDNS `60.191.244.5` `61.153.177.197`

广州移动 `211.136.20.203`
浙江政府（ DIG 有解析过程） `211.138.126.93`
浙江旅游局（只是个缓存，估计上级就是上面那个）`211.138.113.115`
北京 (限移动使用 `211.136.17.107`
北京 (外网也可使用 `111.13.113.8`

114: `114.114.114.114`, `114.114.115.115`
114（拦截钓鱼隐私安全）: `114.114.114.119`, `114.114.115.119`
114（拦截色情）: `114.114.114.110`, `114.114.115.110`

DNSPod DNS+: `119.29.29.29`, `182.254.116.116`
百度DNS `180.76.76.76`
Alibaba DNS: `223.5.5.5`, `223.6.6.6`
SDNS: `1.2.4.8`, `210.2.4.8`
oneDNS（南/北）: `112.124.47.27`, `114.215.126.16`
中科大 DNS: `202.38.64.1`, `202.112.20.131`, `202.141.160.95`, `202.141.160.99`, `202.141.176.95`, `202.141.176.99`

---

## 海外

Google Public DNS `8.8.8.8`, `8.8.4.4`, `2001:4860:4860::8888`, `2001:4860:4860::8844`
OpenDNS: `208.67.222.222`, `208.67.220.220`
OpenNIC: `128.199.248.105`, `106.186.17.181`
V2EX DNS: `199.91.73.222`, `178.79.131.110`

澳门: `202.175.3.8`, `202.175.3.3`
中华电信: `168.95.1.1`, `168.95.192.1`
giga.net.tw: `203.133.1.6`, `203.133.1.7`, `203.133.1.8`
韩国某DNS: `168.126.63.1`, `168.126.63.2`

US-Dyn: `216.146.36.36`, `216.146.35.35`
US- Norton Connect: `199.85.127.10`, `199.85.126.10`
DE - Open Root: `212.224.71.116`, `178.19.70.8`
US - LEVEL 3 -D: `4.2.2.6`, `4.2.2.5`
DK - Censurfridns: `89.233.43.71`, `91.239.100.100`

---

# 清除DNS缓存：
- #### Mac
  `sudo killall mDNSResponder`

- #### Windows
  `ipconfig /flushdns`

- #### Linux:
  `service *network* *restart*`,`rcnetwork restart`  or `/etc/rc.d/init.d/network restart`
