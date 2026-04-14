# 短视频工厂 Landing Page — 执行计划

## 1. 项目信息

- **项目路径**: `/Users/jran/Developer/codes/2026/crow_video_page`
- **目标产品**: 短视频工厂（short-video-factory）
- **目标用户**: 抖店/TikTok 电商卖家
- **包管理器**: bun（不要用 npm）
- **部署平台**: Cloudflare Pages
- **设计风格**: Vercel（黑白极简，Geist 字体，shadow-as-border）

## 2. 产品核心功能（代码实证）

| 功能模块 | 说明 |
|---------|------|
| 产品灵感台 | 录入商品信息（名称、功能、亮点、受众），上传商品图 |
| AI 口播文案 | 输入提示词，LLM 生成 80-150 字口播脚本（15-30秒） |
| 语音合成 | Qwen TTS（阿里云），多音色可选，试听 |
| 视频剪辑 | 两种模式：随机选片 或 VL 智能匹配（颜色/标签/文案语义对齐） |
| 混音导出 | 可选 BGM，输出 MP4（默认 1080x1920 竖屏） |
| 批量自动化 | 开启后自动连续生成多个视频 |

**目标用户痛点**: 抖店/TikTok 卖家需要大量、高质量、原创产品视频，人工剪辑效率太低。

## 3. 落地页内容结构

```
Nav (导航栏)
  - Logo: 乌鸦视频工厂
  - Links: 功能 / 关于 / 定价
  - CTA: 下载桌面端

Hero Section
  - Badge: "电商短视频创作工具"
  - Title: "一个工具，从文案到成片全自动"
  - Subtitle: "上传商品，AI 自动写文案、配音、剪辑，批量导出竖屏带货视频"
  - CTA: "免费下载" (primary) + "查看演示" (secondary)

Workflow Section (三步流程)
  - Step 1 (Develop Blue): 上传商品 → 输入商品信息，AI 分析颜色与标签
  - Step 2 (Preview Pink): AI 写配音 → 自动生成有吸引力的口播文案，语音合成
  - Step 3 (Ship Red): 自动剪辑 → 智能匹配分镜，批量导出 MP4

Features Section (核心功能)
  - 智能匹配: 颜色/标签/文案语义三重对齐
  - 批量生产: 全自动连续生成，一键日产百条
  - 竖屏输出: 默认 9:16 竖屏，适配抖音/ TikTok
  - 多音色: 10+ 种配音音色可选
  - 自有 BGM: 支持导入背景音乐
  - 跨平台: Mac / Windows 桌面应用

Stats Section (数据)
  - 日产 100+ 条视频
  - 3 步完成创作
  - 10+ 配音音色
  - 3 分钟/条

CTA Section
  - Title: "准备好提升视频产能了吗？"
  - CTA: "免费下载"

Footer
  - 版权信息
  - 链接: GitHub / 文档 / 联系我们
```

## 4. 技术实现

### 4.1 技术栈
- React 19 + TypeScript
- Vite + Cloudflare Pages 适配
- lucide-react 图标
- 纯 CSS（无 Tailwind，Vercel design tokens）
- Google Fonts (Geist 替代字体)

### 4.2 文件结构
```
src/react-app/
  App.tsx          # 落地页主体（单文件，大组件）
  index.css        # Vercel design tokens + 组件样式
  main.tsx         # React 入口
  index.html       # 更新 meta 信息
```

### 4.3 Vercel Design System 要点
- 背景: `#ffffff` / 文字: `#171717`
- 无传统 CSS border，用 shadow-as-border: `0 0 0 1px rgba(0,0,0,0.08)`
- 字体: Geist（Google Fonts CDN）
- 字重严格: 400(正文) / 500(交互) / 600(标题)
- 超大间距: section padding 120px
- 负字间距: display -2.4px, section heading -1.28px

## 5. 执行步骤

- [ ] 1. 安装 lucide-react (已完成 via npm，需验证 bun)
- [ ] 2. 写 PLAN.md（本文档）
- [ ] 3. 编写 `src/react-app/App.tsx` 落地页主体
- [ ] 4. 编写 `src/react-app/index.css` Vercel design tokens + 组件样式
- [ ] 5. 更新 `index.html` meta 信息（title/description/favicon）
- [ ] 6. 删除不需要的模板文件（App.css, assets/*）
- [ ] 7. 本地 `bun dev` 预览
- [ ] 8. `bun deploy` 部署到 Cloudflare Pages

## 6. 设计参考

Vercel Design System (`design-systems/vercel.md`):
- Shadow-as-border 核心技术
- 三色 workflow 强调色: Develop Blue (#0a72ef) / Preview Pink (#de1d8d) / Ship Red (#ff5b4f)
- 字体压缩感: letter-spacing -2.4px at display size
- 卡片阴影堆叠: border + elevation + ambient + inner highlight
