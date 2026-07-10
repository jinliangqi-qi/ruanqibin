# 阿里云服务器部署指南

项目：阮琪斌求职作品集（Next.js + FastAPI）
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
# 1. 克隆项目
cd /www && git clone https://github.com/jinliangqi-qi/ruanqibin.git ruanqibin
cd ruanqibin

# 2. 修复阿里云主机名
echo "127.0.0.1 $(hostname)" >> /etc/hosts

# 3. 安装前端依赖并打包
npm install
npm run build

# 4. 启动前端（端口 3002）
pm2 start "npx next start -p 3002" --name ruanqibin-web

# 5. 安装后端依赖并启动
cd backend
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
pm2 start "python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8001" --name ruanqibin-api

# 6. 保存进程
cd ..
pm2 save
pm2 startup
```

---

## 三、日常更新

```bash
cd /www/ruanqibin
git pull

# 前端
pm2 delete ruanqibin-web
npm run build
pm2 start "npx next start -p 3002" --name ruanqibin-web

# 后端（有改动时）
cd backend
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
pm2 restart ruanqibin-api
cd ..

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
pm2 logs ruanqibin-api --lines 30
pm2 restart ruanqibin-web
pm2 restart ruanqibin-api
pm2 delete ruanqibin-web
pm2 flush
```

---

## 六、访问地址

- 前端：`http://47.119.132.231:3002`
- API 文档：`http://47.119.132.231:8001/docs`
- 管理后台：`http://47.119.132.231:3002/admin`

---

## 七、数据库说明

- 位置：`backend/data/app.db`（SQLite）
- 首次启动自动创建
