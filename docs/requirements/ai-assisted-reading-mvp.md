# AI-assisted Emotional Reading MVP 需求规格

日期：2026-06-19

## 1. 需求重置原因

当前项目已经验证了一个重要问题：如果 Mirror Tarot Reading 只做“SEO 内容站 + 固定卡牌答案”，会很快遇到两个矛盾：

- 用户问题千差万别，固定问题按钮无法覆盖。
- 手写大量卡牌答案和问题页面会带来维护压力，也容易变成重复内容。

因此下一阶段需要把产品核心从“固定卡牌内容库”升级为“受控 AI 解读引擎”。

## 2. 新核心判断

Mirror Tarot Reading 不应该竞争“谁的 AI 塔罗更会预测”。

它应该竞争：

> 谁更能在用户情绪不确定时，先接住她，再帮她看清一点自己。

产品方法定义为：

> Comfort first. Clarity next.

中文内部理解：

> 先安慰那个想要答案的用户，再照见那个需要清醒的用户。

## 3. MVP 场景范围

长期方向不只限于爱情，但 MVP 必须从爱情关系不确定开始。

第一阶段只覆盖：

- love uncertainty
- no contact
- mixed signals
- texting hesitation
- missing someone
- waiting or letting go
- relationship anxiety
- anxious attachment style questions

第一阶段不做：

- career reading
- money reading
- health reading
- legal or financial advice
- full life coaching
- AI therapy
- open-ended chatbot
- paid readings
- login and account history

## 4. 产品定位

对外定位：

> Mirror Tarot is an AI-assisted relationship reading that comforts the part of you looking for an answer, then reflects the part of you that needs clarity.

内部定位：

> 用 SEO 内容页承接关系困惑流量，用卡牌仪式创造情绪参与，用受控 AI 生成个性化解读，用 Mirror 框架把用户从“对方怎么想”带向“我为什么这么需要这个答案”。

## 5. 用户为什么选择我们

如果只是 AI tarot reading，用户没有强理由选择我们，因为竞品已经很多。

Mirror Tarot 的选择理由必须是：

- 比普通塔罗更懂关系不确定中的反复确认。
- 比心理文章更轻、更有仪式感。
- 比 AI 聊天更有结构、更少失控。
- 不承诺预测未来，而是帮助用户获得安慰、自我理解和一个现实下一步。

用户来时的表层问题通常是：

- Do they miss me?
- Should I text them?
- Will they come back?
- Why did they go silent?
- Am I anxious or intuitive?

用户留下来的深层原因应该是：

> This made me feel understood, but it also helped me see why I keep needing this answer.

## 6. 核心 Reading 结构

AI 生成结果必须固定为四段：

1. Comfort
   - 先承认用户感受。
   - 不否定、不教育、不急着让用户理性。

2. The Window
   - 回应用户关于关系、对方、沉默、信息或暧昧的表层问题。
   - 使用谨慎表达，不假装知道对方真实想法。

3. The Mirror
   - 把问题转回用户自身的情绪模式、依恋反应、自我价值感或确认需求。
   - 语气必须温柔，不审判用户。

4. Gentle Next Step
   - 给一个低风险、现实、今天能做的小动作。
   - 不替用户做重大决定。

可选增加：

- Reality Check：当问题涉及沉默、忽冷忽热、反复伤害时，提醒用户看一致行为，而不是只看强烈瞬间。

## 7. AI 在产品中的角色

AI 是解读引擎，不是自由聊天机器人。

AI 输入应包含：

- 用户输入的问题。
- 当前页面场景。
- 抽到的 Mirror Card。
- 该卡的基础象征意义。
- 输出结构。
- 品牌语气规则。
- 安全限制。

AI 输出应限制：

- 使用英文。
- 约 250 到 450 词。
- 保持 Comfort / Window / Mirror / Next Step 结构。
- 不承诺准确预测。
- 不声称知道对方真实想法。
- 不提供医疗、心理治疗、法律、财务建议。
- 对危机、自伤、虐待或现实危险输入，转为安全提示和求助建议。

## 8. 卡牌系统

第一阶段不需要传统 78 张完整塔罗。

建议保留或扩展 24 到 48 张 Mirror Cards。每张卡不是完整答案，而是 AI 的象征输入。

每张卡包含：

- name
- short hook
- symbol meaning
- relationship signal
- mirror theme
- gentle action seed
- categories

卡牌作用：

- 提供仪式感。
- 提供生成答案的结构材料。
- 让结果有品牌一致性。
- 避免 AI 每次从零开始胡乱发挥。

## 9. 用户路径

主工具页路径：

1. 用户看到一句情绪入口：`What question keeps coming back?`
2. 用户输入自己的关系问题。
3. 用户也可以点击 3 到 4 个热门问题快速开始。
4. 用户选择一张卡。
5. 系统调用 AI 生成 reading。
6. 用户看到 Comfort / Window / Mirror / Next Step。
7. 页面推荐相关 SEO 内容继续阅读。

问题页路径：

1. 用户从 Google 搜索进入具体问题页。
2. 页面先用正文回应搜索意图。
3. Reading 模块默认带入当前页面问题。
4. 用户可编辑问题。
5. 用户抽牌并获得 AI reading。
6. 页面推荐相关问题和心理模式页。

## 10. SEO 边界

AI reading 结果不作为可收录页面。

SEO 内容仍然由高质量静态页面承担：

- 页面标题、正文、FAQ、内链、免责声明必须人工设计。
- 不批量生成低质量问题页。
- 不把用户输入问题生成永久页面。
- 不用 AI 大规模制造搜索页面。

AI 的作用是提升：

- 停留时间。
- 互动率。
- 完成率。
- 相关页面点击。
- 用户对品牌方法的记忆。

## 11. 成本与限制

第一阶段建议限制：

- 每个浏览器每日 3 次 AI reading。
- 单次输入限制 200 到 300 字符。
- 单次输出限制 250 到 450 英文词。
- 请求超时时间需要可控。
- API 失败时回退到静态 reading。

限制目的：

- 控制 API 成本。
- 避免滥用。
- 避免用户把它当无限聊天工具。
- 保持 MVP 简单。

## 12. 隐私与安全

默认不保存用户输入的具体问题。

如需分析数据，优先只记录匿名事件：

- reading_started
- reading_completed
- selected_category
- selected_card
- related_link_clicked
- ai_error

页面应提醒：

- Do not enter names, phone numbers, addresses, or private identifying details.
- This reading is for entertainment and self-reflection.
- It is not professional advice.

危机或安全类输入应触发安全回应，不继续普通 reading。

## 13. 技术方向

当前 Astro 静态站仍然保留。

新增 AI 能力需要后端层，候选：

- Cloudflare Pages Functions
- Cloudflare Workers
- Vercel Serverless Functions

第一阶段推荐 Cloudflare Pages Functions 或 Workers，原因：

- 适合静态站加轻量 API。
- 方便部署和限制请求。
- 不需要完整后端服务器。

API key 必须只放在服务端环境变量中，不能暴露在前端。

## 14. 验证指标

这个 MVP 要验证的不是“AI 是否能回答所有问题”，而是：

- 用户是否愿意输入自己的问题。
- 用户是否完成抽牌。
- 用户是否读完或停留在结果区域。
- 用户是否点击相关页面。
- 用户是否在每日限制内重复使用。
- AI reading 是否比固定答案更能提升互动。

第一阶段可接受没有收入，重点是验证：

> AI-personalized comfort and clarity 是否能提升关系内容站的用户停留和页面深度。

## 15. 下一步实施顺序

建议顺序：

1. 重构 reading 体验需求和文案。
2. 扩展 Mirror Cards 为 AI 输入素材，而不是完整答案库。
3. 增加用户问题输入框和热门问题快捷入口。
4. 增加服务端 AI reading API。
5. 增加每日限制和错误回退。
6. 更新免责声明、隐私说明和安全提示。
7. 验证桌面和移动端体验。
8. 部署并提交 Google Search Console。

