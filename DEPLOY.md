# 阿里云服务器部署指南

本项目包含 Next.js 前端 + FastAPI 后端，使用 PM2 进程管理器部署。

---

## 一、服务器环境准备

```bash
# 安装 Node.js 20
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
yum install -y nodejs

# npm 配置淘宝镜像（加速）
npm config set registry https://registry.npmmirror.com

# 安装 PM2 进程管理器
npm install -g pm2
```

---

## 二、首次部署

```bash
# 1. 拉取代码
cd /www && git clone https://github.com/jinliangqi-qi/WorkSpace.git teaching
cd teaching

# 2. 修复阿里云主机名（重要！否则 Next.js 启动报 ENOTFOUND）
echo "127.0.0.1 $(hostname)" >> /etc/hosts

# 3. 安装前端依赖并打包
npm install
npm run build

# 4. 启动前端（端口 3001）
pm2 start "npx next start -p 3001" --name teaching-frontend

# 5. 安装后端依赖并启动
cd backend
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
pm2 start "python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000" --name teaching-backend

# 6. 返回项目目录，保存进程
cd ..
pm2 save
pm2 startup  # 复制输出的那行命令再执行一次
```

---

## 三、日常更新

```bash
cd /www/teaching
git pull

# 前端更新
pm2 delete teaching-frontend
npm run build
pm2 start "npx next start -p 3001" --name teaching-frontend

# 后端更新（如果有改动）
cd backend
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
pm2 restart teaching-backend
cd ..

pm2 save
```

---

## 四、阿里云安全组配置

去阿里云控制台 → 安全组 → 入方向 → **手动添加**：

| 字段 | 值 |
|------|-----|
| 协议 | 自定义 TCP |
| 访问目的 | `3001/3001` |
| 访问来源 | `0.0.0.0/0` |

---

## 五、常用 PM2 命令

```bash
pm2 list              # 查看所有进程状态
pm2 logs teaching-frontend --lines 30   # 查看前端日志
pm2 logs teaching-backend --lines 30    # 查看后端日志
pm2 restart teaching-frontend           # 重启前端
pm2 restart teaching-backend            # 重启后端
pm2 delete teaching-frontend            # 删除前端进程
pm2 flush                               # 清空日志
```

---

## 六、常见问题排查

### 问题 1：`curl http://localhost:3001 → Connection refused`

前端没启动成功。先看日志：

```bash
pm2 logs teaching-frontend --lines 30
```

**子问题 A：**
```
"next start" does not work with "output: standalone" configuration
```

**原因**：`next.config.js` 里有 `output: "standalone"`，和 `npm start` 不兼容。

**解决**：删除 `output: "standalone"` 这行，然后：
```bash
rm -rf .next
npm run build
pm2 delete teaching-frontend
pm2 start "npx next start -p 3001" --name teaching-frontend
```

**子问题 B：**
```
Error: getaddrinfo ENOTFOUND iZwz...
```

**原因**：阿里云服务器 `/etc/hosts` 没有主机名映射。

**解决**：
```bash
echo "127.0.0.1 $(hostname)" >> /etc/hosts
```

**子问题 C：**
```
No module named uvicorn
```

**原因**：Python 依赖没装到正确位置。

**解决**：
```bash
cd /www/teaching/backend
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
pm2 delete teaching-backend
pm2 start "./venv/bin/python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000" --name teaching-backend
```

### 问题 2：`git pull → Connection timed out`

**原因**：阿里云服务器访问 GitHub 443 端口超时。

**解决**：直接在服务器上手动修改文件内容，跳过 git pull。

### 问题 3：`text file busy` 或 Docker 安装失败

**原因**：Alibaba Cloud Linux 3 的 `yum install docker` 无效。

**解决**：
```bash
curl -fsSL https://get.docker.com | bash
```

### 问题 4：`FirewallD is not running`

**这不是问题**，阿里云系统内部防火墙默认不启动，安全由安全组控制。

---

## 七、next.config.js 正确配置（非 Docker 部署）

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
```

**注意**：不要加 `output: "standalone"`，那是 Docker 部署专用的。

---

## 八、项目结构

```
teaching/
├── src/                     # 前端 Next.js 源码
├── public/                  # 静态资源
├── backend/                 # 后端 FastAPI
│   ├── app/
│   │   ├── main.py          # API 入口
│   │   ├── routers/         # 接口路由
│   │   ├── services/        # 业务逻辑
│   │   └── admin/           # 管理后台页面
│   ├── requirements.txt
│   └── Dockerfile
├── next.config.js           # 前端配置
├── docker-compose.yml       # Docker 部署配置（备选）
└── nginx.conf               # Nginx 配置模板（备选）
```

- 前端访问：`http://47.119.132.231:3001`
- 后端 API：`http://47.119.132.231:8000/api/health`
- 管理后台：`http://47.119.132.231:3001/admin`
