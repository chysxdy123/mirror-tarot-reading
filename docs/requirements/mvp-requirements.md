# Mirror Tarot Reading MVP 需求规格

> 状态说明：本文件记录 2026-06-18 的初版静态 MVP 需求。2026-06-19 起，下一阶段实现应优先参考 `docs/requirements/ai-assisted-reading-mvp.md`。若两者冲突，以 AI-assisted Emotional Reading MVP 为准。

## 1. 项目目标

Mirror Tarot Reading 的第一阶段目标是建立一个英文 SEO 内容站，通过 Relationship Uncertainty 主题吸引搜索流量，并为 Google AdSense 审核和后续广告变现打基础。

第一版不追求复杂功能，重点是：

- 清晰的差异化定位。
- 足够厚度的英文内容。
- 可被搜索引擎理解和收录的页面结构。
- 轻量但有记忆点的抽牌体验。
- 可信、合规、适合广告审核的页面基础。

## 2. 核心定位

对用户可表达为：

> Ask about them. Discover what the question reveals about you.

中文内部理解：

用户以为自己来问对方怎么想，网站通过卡牌仪式回应问题，同时把问题转化为关系心理和情绪模式的自我反思。

## 3. 目标用户

核心用户是正在经历关系不确定的英文搜索用户。

常见状态：

- 刚分手或断联。
- 暧昧对象忽冷忽热。
- 想发消息但害怕显得主动。
- 想知道对方是否想念自己。
- 分不清是直觉、焦虑还是执念。

用户不是为了学习心理学而来，而是为了缓解当下的关系焦虑。因此页面需要先承接情绪，再提供洞察。

## 4. 关键词策略

第一阶段主题簇：Relationship Uncertainty。

主入口关键词：

- `free love tarot reading`
- `love tarot reading`
- `love tarot reading online free`

第一批长尾关键词：

- `does he miss me tarot`
- `does he miss me during no contact`
- `should i text him`
- `should i text him after breakup`
- `what do they feel about me tarot`
- `no contact tarot reading`

差异化心理关键词：

- `why can't i stop thinking about him psychology`
- `relationship anxiety or gut feeling`
- `anxious attachment texting`
- `emotionally unavailable relationship`

后续需要使用 Google Search Console、Keyword Planner、Semrush 或 Ahrefs 验证精确搜索量、竞争强度和实际曝光。

## 5. 页面范围

第一版目标是 20 到 30 个可收录页面。

必备页面：

- `/`
- `/love-tarot-reading/`
- `/does-he-miss-me-tarot/`
- `/should-i-text-him/`
- `/what-do-they-feel-about-me/`
- `/should-i-wait-or-let-go/`
- `/no-contact-tarot-reading/`
- `/why-cant-i-stop-thinking-about-him/`
- `/relationship-anxiety-or-gut-feeling/`
- `/anxious-attachment-texting/`
- `/emotionally-unavailable-relationship/`
- `/cards/`
- `/about/`
- `/contact/`
- `/privacy-policy/`
- `/disclaimer/`

扩展页面应继续围绕关系不确定、断联、依恋焦虑、发消息犹豫和情绪模式展开。

## 6. 页面类型

### 首页

目的：

- 解释 Mirror Tarot Reading 的差异化。
- 引导用户进入 free love tarot reading。
- 展示主要问题入口。
- 建立可信和合规的第一印象。

首页不应该像纯 landing page，也不应该像小游戏入口。它应兼具产品入口和内容站导航。

### 主工具页

目的：

- 承接 `free love tarot reading` 相关搜索。
- 提供抽牌体验。
- 解释 Window + Mirror 结果结构。
- 引导用户阅读相关问题页。

### 问题页

目的：

- 承接长尾搜索。
- 先提供正文解释，再嵌入抽牌入口。
- 把用户的问题从 fortune telling 引导到 self-reflection。

建议结构：

1. 直接回应用户问题。
2. 解释为什么这个问题常见。
3. 提供抽牌入口。
4. 展示结果解释。
5. 给出温和的下一步提醒。
6. 推荐相关页面。

### 结果页或结果区

第一版可先使用结果区，不一定创建大量动态结果页。

每个结果包含：

- Card title
- One-line emotional hook
- The Window
- The Mirror
- What to notice
- Gentle next step
- Related readings

### 合规页面

至少需要：

- About
- Contact
- Privacy Policy
- Disclaimer

Disclaimer 应明确：

- 内容用于 entertainment and self-reflection。
- 不保证预测结果。
- 不构成心理、医疗、法律或财务建议。
- 如果用户处于危险、危机或受虐情境，应寻求现实支持。

## 7. 抽牌工具机制

第一版建议保持轻量：

- 用户选择一个问题入口。
- 用户点击抽一张牌，或从三张背面牌中选择一张。
- 系统展示结果区。
- 结果按 Window + Mirror 展开。

不建议第一版做：

- 登录保存历史。
- AI 实时生成。
- 复杂牌阵。
- 付费解锁。
- 社交账号连接。

## 8. 内容风格

英文文案应满足：

- 温柔但不空泛。
- 有心理洞察，但不学术化。
- 有仪式感，但不承诺命运。
- 先回应用户的表层问题，再引导自我反思。
- 避免 `100% accurate`、`guaranteed`、`they will come back` 等表达。

内容语气示例：

> This card does not promise what they will do next. It asks what their silence has started to mean inside you.

## 9. 视觉方向

采用 Editorial Mystic / Calm Psychology。

设计原则：

- 像私密的心理杂志和卡牌阅读空间。
- 移动端优先。
- 阅读体验优先于动画效果。
- 使用克制的神秘感。
- 避免廉价星空、夸张水晶球、过度紫色渐变和密集广告感。

初步视觉元素：

- 深墨绿、炭黑、暖白作为基础。
- 少量金色或铜色点缀。
- 英文杂志感标题字体。
- 卡牌插画可抽象化，不必复刻传统塔罗。
- 广告位在第一版预留，但不破坏内容信任。

## 10. 技术架构倾向

第一版优先选择静态内容站架构。

候选方案：

- Astro：适合内容站、静态生成、Markdown 内容、低维护。当前推荐。
- Next.js：适合后续复杂交互和动态功能，但第一版可能偏重。

初步推荐：

使用 Astro 构建静态 SEO 内容站，页面内容用 Markdown 或 MDX 管理，抽牌工具用少量前端组件实现。

部署候选：

- Cloudflare Pages
- Vercel

域名 DNS 后续再配置，不在需求文档阶段执行。

## 11. 维护方式

第一阶段维护重点：

- 每周新增或优化 2 到 5 个英文内容页面。
- 使用 Google Search Console 观察曝光、点击和查询词。
- 根据实际搜索词扩展页面，而不是凭感觉扩栏目。
- 定期检查低质量、重复或过短页面。
- 更新 `docs/verification.md` 记录重要验证。
- 重要产品和技术决策写入 `docs/decisions/`。

## 12. 成功标准

短期成功标准：

- 完成 20 到 30 个高质量英文页面。
- 网站可部署、可访问、可索引。
- 基础合规页面完整。
- 抽牌体验可用。
- 提交 Google Search Console。

中期成功标准：

- 核心页面开始获得自然搜索曝光。
- 长尾页面出现点击。
- 页面停留和跳转不只集中在首页。
- 达到申请 AdSense 的内容和站点完整度。

## 13. 主要风险

- 关键词竞争强，短期不会快速获得流量。
- 内容如果模板化，可能被搜索引擎视为低价值。
- 如果过度承诺预测，会产生合规和信任风险。
- 如果过度心理学化，用户会觉得没有得到想要的答案。
- 如果过度追求视觉效果，会拖慢上线和内容验证。

## 14. 当前结论

第一版推荐继续采用方案 A：

> SEO 内容站 + 轻量翻牌工具。

这比纯工具站更适合 AdSense，比纯心理文章站更有差异化入口，也比大而全塔罗站更容易聚焦。
