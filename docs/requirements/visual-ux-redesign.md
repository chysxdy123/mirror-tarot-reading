# Mirror Tarot Reading 视觉与 UX 改版规格

## 1. 改版原因

当前 MVP 的信息架构、SEO 页面和 Astro 技术方案成立，但视觉和交互更像传统内容站。目标用户处于关系不确定、断联、焦虑和反复确认的情绪状态，进入页面时需要快速感到：

- 这里懂我的问题。
- 我可以立刻开始一次 reading。
- 这个体验有仪式感，但不是廉价算命。
- 解读像私密关系反思，而不是新闻文章。

因此需要进行产品体验层改版。

## 2. 改版目标

保留 SEO 内容站骨架，把关键体验升级为 Ritual App / Emotional Oracle。

优先级：

1. 抽牌入口前置。
2. 卡牌视觉产品化。
3. 结果面板更像 personal reading。
4. 首页从文章入口改成仪式入口。
5. 内容页保持可读和可索引。

## 3. 不改范围

- 不改 Astro 技术栈。
- 不接登录、数据库、付费或 AI。
- 不删除已有 SEO 页面。
- 不接 AdSense。
- 不把页面做成夸张神秘学或全屏动画站。

## 4. 目标体验

用户路径应从：

> 读标题 -> 读说明 -> 找到抽牌 -> 点击 -> 看结果

调整为：

> 被问题击中 -> 立刻看到抽牌入口 -> 选择卡牌 -> 获得私密解读 -> 继续读相关解释

## 5. 首页改版

首页第一屏应像一个 reading room：

- 左侧或上方：情绪化主标题和简短说明。
- 右侧或下方：仪式型卡牌预览/入口。
- 主 CTA：`Start the reading`
- 次 CTA：`Choose a relationship question`

首页首屏文案建议：

> Choose a card for the question you keep asking about them.

辅助文案：

> Mirror Tarot turns love uncertainty into a two-part reading: what the connection may be showing, and what the question reveals inside you.

## 6. 阅读页改版

Love Reading 和问题页应把抽牌模块前置到 intro 后、正文解释前。用户不应先读大量说明才看到卡牌。

页面节奏：

1. Hero：情绪问题 + 简短定位。
2. Card draw：立刻开始。
3. Result：Window / Mirror / Gentle next step。
4. Explanation：正文内容。
5. Related readings：下一步路径。

## 7. 卡牌 UI 改版

卡牌必须从占位按钮升级成产品核心组件。

要求：

- 三张卡牌有固定比例和稳定尺寸。
- 卡背有边框、内框、符号、编号或短标签。
- 鼠标悬停和键盘 focus 有明确反馈。
- 选中后有视觉状态。
- 卡牌可截图，不像普通按钮。
- 移动端可以单手点击。

视觉方向：

- 深墨绿/炭黑底。
- 暖金或铜色线条。
- 中央使用镜面/月相/门形等抽象符号。
- 避免紫色星空、水晶球、夸张烟雾。

## 8. 结果面板改版

结果区应像一次 personal reading。

结构：

- Card name
- Emotional hook
- The Window
- The Mirror
- Gentle next step

视觉要求：

- 结果面板和抽牌区域属于同一个仪式容器。
- Window 和 Mirror 是两个并列或分层清楚的解读块。
- Gentle next step 要突出，但不能像强命令。
- 不使用“100% accurate”等保证性表达。

## 9. UI 组件策略

当前阶段不引入重型 UI 框架。

理由：

- 核心体验是自定义卡牌，不适合直接套默认组件库。
- Astro + 原生 CSS 已足够完成当前改版。
- 引入 Tailwind/shadcn 会增加依赖和迁移成本，收益暂时不明显。

后续若需要 Dialog、Tabs、Accordion 或更复杂交互，再评估 shadcn/ui for Astro。

## 10. SEO 与 AdSense 边界

改版不能牺牲：

- H1 和正文内容。
- 内链。
- 合规页面。
- 可读性。
- 页面速度。

广告位后续应避开抽牌按钮和结果揭示附近，避免误导点击。

## 11. 验收标准

改版后应满足：

- 首页第一屏不再像新闻站。
- Love Reading 页首屏附近能看到抽牌入口。
- 卡牌看起来像产品核心，而不是占位按钮。
- 点击卡牌后结果区域层级清楚。
- 移动端不重叠、不挤压、不横向滚动。
- `npm run check`、`npm run test:data`、`npm run test:html`、`npm run build` 全部通过。
- Playwright 验证桌面和移动端截图。
