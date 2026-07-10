# 阿里云服务器部署指南

项目：阮琪斌求职作品集（Next.js 静态前端）
服务器：47.119.132.231

---

## 一、服务器环境准备

```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
yum install -y nodejs
npm config set registry https://registry.npmmirror.com
npm install -g pm2
```

---

## 二、首次部署

```bash
cd /www && git clone https://github.com/jinliangqi-qi/ruanqibin.git ruanqibin
cd ruanqibin

echo "127.0.0.1 $(hostname)" >> /etc/hosts

npm install
npm run build

pm2 start "npx next start -p 3002" --name ruanqibin-web
pm2 save
pm2 startup
```

---

## 三、日常更新

```bash
cd /www/ruanqibin
git pull

pm2 delete ruanqibin-web
npm run build
pm2 start "npx next start -p 3002" --name ruanqibin-web

pm2 save
```

---

## 四、安全组

阿里云控制台 → 安全组 → 入方向：

| 协议 | 端口 | 来源 |
|------|------|------|
| TCP | 3002 | 0.0.0.0/0 |

---

## 五、PM2 常用命令

```bash
pm2 list
pm2 logs ruanqibin-web --lines 30
pm2 restart ruanqibin-web
pm2 delete ruanqibin-web
pm2 flush
```

---

## 六、访问地址

- 前端：`http://47.119.132.231:3002`
