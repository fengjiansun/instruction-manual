# AI 标注工具 - 产品说明书

一个基于 React + TypeScript + Vite 构建的现代化产品说明书网站。

## 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router** - 客户端路由

## 快速开始

### 环境要求

- Node.js >= 20.x
- npm >= 10.x

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
instruction-manual/
├── public/              # 静态资源
├── src/
│   ├── components/      # 通用组件
│   │   ├── Layout.tsx   # 布局组件
│   │   ├── Header.tsx   # 顶部导航
│   │   ├── Sidebar.tsx  # 侧边栏导航
│   │   └── Footer.tsx   # 页脚
│   ├── pages/           # 页面组件
│   │   ├── AIPrelabeling.tsx    # AI 预标注
│   │   ├── ActiveLearning.tsx   # 主动学习
│   │   ├── AIReview.tsx         # AI 审核
│   │   └── Copilot.tsx          # 标注 Co-Pilot
│   ├── App.tsx          # 应用入口
│   ├── main.tsx         # 渲染入口
│   └── index.css        # 全局样式
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 功能模块

### AI原生标注

- **AI 预标注** - 在专家开始标注前，先由模型生成一版标注草稿
- **主动学习** - 智能选择最有价值的样本进行标注
- **AI审核** - 自动审核标注结果质量
- **标注 Co-Pilot** - AI 辅助标注助手

## 自定义开发

### 添加新模块

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 在 `src/components/Sidebar.tsx` 中添加导航链接

### 修改主题

全局样式变量定义在 `src/index.css` 的 `:root` 选择器中，可以通过修改这些变量来自定义主题。

## License

MIT
