# Mirror Tarot Reading 技术方案

## 1. 技术目标

第一版技术方案必须服务 SEO 内容站和低维护目标。

优先级：

1. SEO 友好。
2. 内容管理简单。
3. 构建和部署稳定。
4. 移动端性能好。
5. 可逐步扩展抽牌工具。

不追求：

- 复杂后台。
- 登录系统。
- 动态数据库。
- AI 实时生成。
- 过度动画。

## 2. 技术栈推荐

推荐使用 Astro。

理由：

- 适合静态内容站。
- Markdown/MDX 内容管理简单。
- 默认输出静态 HTML，利于 SEO 和性能。
- 可以在需要交互的地方局部引入前端组件。
- 维护成本低于第一版使用完整 React/Next.js 应用。

备选方案：

- Next.js：如果很快要做登录、动态内容、后台或复杂交互，可考虑。但第一版不是最优。
- 纯 HTML/CSS/JS：最简单，但后续内容管理、组件复用和 SEO 元信息维护会变麻烦。

当前决策：

> 第一版使用 Astro 静态站。

## 3. 代码目录建议

后续创建源码时，建议结构：

```text
mirror-tarot-reading/
  src/
    components/
      CardDraw.astro
      ReadingResult.astro
      RelatedLinks.astro
      SeoHead.astro
    content/
      pages/
      readings/
      patterns/
      cards/
    data/
      cards.ts
      questions.ts
      navigation.ts
    layouts/
      BaseLayout.astro
      ArticleLayout.astro
      ReadingLayout.astro
    pages/
      index.astro
      love-tarot-reading.astro
      about.astro
      contact.astro
      privacy-policy.astro
      disclaimer.astro
    styles/
      global.css
  public/
    images/
    favicon.svg
  docs/
```

实际 Astro 文件结构可在实现时调整，但原则是：

- 内容和组件分离。
- SEO 元信息集中管理。
- 卡牌结果数据结构化。
- 页面模板复用。

## 4. 内容管理方式

第一版优先使用 Markdown 或 MDX。

每个内容页应包含 frontmatter：

```yaml
title:
description:
slug:
primaryKeyword:
secondaryKeywords:
pageType:
relatedPages:
lastUpdated:
```

这样便于：

- 生成 SEO 元信息。
- 生成 sitemap。
- 管理内链。
- 后续复盘页面表现。

## 5. 抽牌工具实现

第一版使用前端本地逻辑。

建议实现方式：

- `cards.ts` 存储主题卡数据。
- `questions.ts` 存储问题类型和可用卡池。
- 用户点击抽牌后，在浏览器端随机选择卡牌。
- 显示 Window + Mirror 结果。

不需要后端。

优点：

- 成本低。
- 部署简单。
- 隐私风险低。
- 不需要处理用户数据。

限制：

- 不保存用户历史。
- 结果不是个性化 AI 解读。

这个限制符合 MVP 目标。

## 6. SEO 技术要求

第一版必须支持：

- 每页唯一 title 和 meta description。
- canonical URL。
- Open Graph。
- sitemap.xml。
- robots.txt。
- 结构化导航和页脚内链。
- 404 页面。
- 清晰 heading 层级。
- 图片 alt 文本。
- 移动端性能优化。

可考虑的结构化数据：

- WebSite。
- WebPage 或 Article。
- FAQPage，仅在页面确实有 FAQ 时使用。

避免滥用结构化数据。

## 7. 样式和设计实现

第一版建议使用：

- Astro + 原生 CSS，或 Tailwind CSS。

推荐倾向：

> 如果开发速度和一致性优先，使用 Tailwind CSS；如果想减少依赖，使用原生 CSS。

由于第一版页面样式不复杂，原生 CSS 已足够。但如果组件数量增加，Tailwind 也可接受。

设计要求：

- 移动端优先。
- 内容区域行宽受控。
- 字体大小不随视口宽度缩放。
- 避免大面积紫色渐变和廉价神秘感。
- 卡牌组件尺寸稳定，避免抽牌结果导致布局跳动。

## 8. 部署方案

候选：

- Cloudflare Pages。
- Vercel。

推荐：

> Cloudflare Pages。

理由：

- 适合静态站。
- 全球 CDN。
- 免费层足够第一版。
- 后续可接 Cloudflare DNS、缓存和基础安全能力。

由于域名已在阿里云注册，DNS 有两种方式：

1. 继续使用阿里云 DNS，添加 Cloudflare Pages 需要的 CNAME。
2. 将 nameserver 切到 Cloudflare，由 Cloudflare 管 DNS。

第一版推荐先使用简单 CNAME 配置；如果后续需要 Cloudflare 全套能力，再迁移 nameserver。

## 9. 分析和站长工具

上线后建议接入：

- Google Search Console。
- Google Analytics 4，或更轻量的隐私友好分析工具。

AdSense 申请前后需要：

- Privacy Policy 更新 cookies、analytics、ads 说明。
- 确认 Disclaimer 可访问。
- 确认 Contact 可访问。

## 10. 环境变量和隐私

第一版不应需要密钥。

如果后续接入 analytics、AdSense 或其他服务：

- 不把密钥提交到 Git。
- `.env` 文件保持忽略。
- 文档中记录需要配置的变量，但不写真实值。

## 11. 常用命令预案

Astro 项目创建后，预计命令：

```bash
npm install
npm run dev
npm run build
npm run preview
```

具体命令以实际 `package.json` 为准。

## 12. 验证要求

开发阶段每次重要改动后应验证：

- 本地构建通过。
- 主要页面可访问。
- 移动端布局不重叠。
- 抽牌工具可用。
- sitemap 和 robots 存在。
- 页面 title、description、canonical 正确。

上线前应验证：

- 域名可访问。
- HTTPS 正常。
- 404 页面正常。
- 合规页面可从页脚访问。
- Google Search Console 可验证所有权。

## 13. 维护方式

内容维护：

- 新增页面优先走 Markdown/MDX。
- 每个新增页面补充关键词、描述和相关页面。
- 不创建没有搜索意图的页面。

代码维护：

- 抽牌逻辑和卡牌内容分离。
- 组件保持小而清晰。
- 不把所有页面逻辑塞进首页。
- 重要技术变化写入 `docs/decisions/`。

## 14. 当前未执行项

本文件是技术方案，不代表已创建 Astro 项目。

后续执行前需要：

- 用户确认进入开发阶段。
- 创建 Astro 项目。
- 写入初始页面和组件。
- 配置本地验证命令。
