# 决策：下一阶段采用 AI-assisted Emotional Reading MVP

日期：2026-06-19

## 背景

Mirror Tarot Reading 初版采用“SEO 内容站 + 轻量翻牌工具”。在继续讨论用户问题覆盖、卡牌答案数量和 AI 之后，发现固定问题选择和固定卡牌答案会遇到明显限制：

- 用户的关系问题表达非常多样。
- 做大量问题页面会带来重复内容和维护风险。
- 只增加卡牌数量不能真正解决个性化问题。
- 普通 AI tarot 竞品较多，不能只把 AI 当作差异点。

## 决策

下一阶段采用 AI-assisted Emotional Reading MVP。

产品方法从 Window / Mirror 扩展为：

> Comfort -> Window -> Mirror -> Gentle Next Step

第一阶段仍然从爱情关系不确定切入，不扩展到泛人生、事业、金钱或健康。

AI 的角色是受控解读引擎，而不是自由聊天机器人，也不是批量 SEO 页面生成器。

## 理由

- 用户需求的本质不是抽牌本身，而是在关系不确定中获得安慰、解释和一点清醒。
- AI 可以低成本生成贴近用户具体问题的 reading，解决固定答案库覆盖不足的问题。
- 固定输出结构可以保留品牌方法和安全边界。
- SEO 内容站仍然负责获取流量，AI reading 负责提升互动、停留和记忆点。
- 不把 AI 结果收录，可以降低批量低质内容和搜索风险。

## 边界

第一阶段做：

- 用户输入关系问题。
- 抽一张 Mirror Card。
- AI 生成 Comfort / Window / Mirror / Gentle Next Step。
- 每用户每日限制。
- 服务端 API 调用。
- 安全提示、隐私提示和错误回退。

第一阶段不做：

- AI 聊天室。
- 登录账号。
- 付费报告。
- 用户历史记录。
- 大量 AI 生成 SEO 页面。
- 非爱情场景。
- 医疗、法律、财务或危机建议。

## 后续影响

- 需要新增后端 API 层，例如 Cloudflare Pages Functions 或 Workers。
- 需要更新隐私政策和免责声明。
- 需要定义 AI prompt、安全规则和输出结构测试。
- 需要重新评估部署平台和环境变量管理。
- 需要把 Mirror Cards 从完整答案内容改造成 AI 生成素材。

