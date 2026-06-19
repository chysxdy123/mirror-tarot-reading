# 维护说明

## 项目结构

主要目录和作用：

- `AGENTS.md`：本项目的 Codex 工作规则。
- `docs/product.md`：项目定位、用户、MVP 范围和不做事项。
- `docs/requirements/`：需求规格、页面清单、内容规划。
- `docs/decisions/`：重要产品、技术、SEO 和变现决策记录。
- `docs/maintenance.md`：维护方式和常见风险。
- `docs/verification.md`：验证记录。

网站代码已创建，当前采用 Astro 静态站结构。

关键代码目录：

- `src/pages/`：页面路由。
- `src/components/`：页面组件和抽牌组件。
- `src/data/`：卡牌、页面元信息和内容数据。
- `src/styles/`：全局样式。

## 常用命令

启动：

```bash
npm run dev
```

测试：

```bash
npm run check
npm run test:data
npm run test:html
```

构建：

```bash
npm run build
```

部署：待技术栈和部署平台确定后补充。

## 修改前检查

修改前需要先确认：

- 改动是否服务 AdSense 变现、SEO 收录、用户停留或内容质量。
- 是否会把项目带向普通低差异化 tarot 站。
- 是否会引入不必要的复杂功能。
- 是否涉及广告、隐私、免责声明、外部账号或域名 DNS。
- 页面内容是否有足够原创解释，不只是关键词替换。
- 用户可见英文内容是否保持 self-reflection / entertainment 口径，避免保证性预测。

## 常见风险

需要特别小心的地方：

- 内容过薄：纯工具页或模板化页面可能不利于 Google 收录和 AdSense 审核。
- 过度神秘化：廉价视觉和夸张预测会降低信任感。
- 合规风险：不能承诺预测未来、修复关系或替代心理咨询。
- 关键词跑偏：第一阶段应聚焦 Relationship Uncertainty，不要过早扩成全品类塔罗站。
- 维护压力：20 到 30 页只是起点，后续需要根据 Search Console 数据持续更新内容。
- 广告体验：广告位应自然嵌入，不能让页面看起来广告多于内容。
- AI 失控：AI 只能作为受控 reading 引擎，不能变成无限聊天、强预测或专业建议工具。
- API 成本：AI reading 必须有输入长度、输出长度和每日次数限制。
- 隐私风险：用户问题默认不保存，不要求用户输入姓名、联系方式或可识别私人信息。

## 后续继续方式

下次继续这个项目时，建议先看：

1. `AGENTS.md`
2. `docs/product.md`
3. `docs/requirements/`
4. `docs/decisions/`
5. `docs/verification.md`

AI-assisted reading 相关改动还需要额外阅读：

- `docs/requirements/ai-assisted-reading-mvp.md`
- `docs/decisions/2026-06-19-ai-assisted-reading-mvp.md`
