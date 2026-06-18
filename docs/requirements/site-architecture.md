# Mirror Tarot Reading 页面结构与用户路径

## 1. 设计目标

本文件定义 Mirror Tarot Reading 第一版的网站信息架构、页面职责、核心用户路径和广告布局原则。

第一版采用“SEO 内容站 + 轻量翻牌工具”。页面结构必须同时服务四个目标：

- 让 Google 能理解网站主题。
- 让用户快速进入关系问题场景。
- 让抽牌工具成为内容体验的一部分，而不是孤立小游戏。
- 为 AdSense 审核和后续广告展示保留自然空间。

## 2. 核心用户路径

### 路径 A：搜索长尾问题进入

这是最重要路径。

示例：

1. 用户搜索 `does he miss me tarot`。
2. 进入 `/does-he-miss-me-tarot/`。
3. 先看到一个直接回应搜索意图的开头。
4. 阅读关系不确定和断联焦虑的解释。
5. 在页面中部抽一张牌。
6. 看到 Window + Mirror 结果。
7. 点击相关页面，例如 `/no-contact-tarot-reading/` 或 `/should-i-text-him/`。

这个路径要求每个问题页都能独立承接搜索，不依赖首页解释。

### 路径 B：首页进入

示例：

1. 用户进入 `/`。
2. 看到 Mirror Tarot 的差异化定位。
3. 选择一个关系问题入口。
4. 进入主工具页或问题页。
5. 抽牌并继续阅读相关内容。

首页不是主要流量来源，但必须建立信任、解释定位，并帮助用户进入正确问题。

### 路径 C：心理内容页进入

示例：

1. 用户搜索 `relationship anxiety or gut feeling`。
2. 进入心理解释页。
3. 先获得清晰、有帮助的正文。
4. 被引导到一个相关卡牌阅读，例如 `Should I Text Him?`。

这个路径服务差异化，不应把所有心理内容强行写成 tarot。

## 3. 顶层导航

第一版导航应保持简单：

- Love Reading
- Questions
- Patterns
- Cards
- About

移动端可折叠菜单。

导航不应放太多栏目，避免让第一版看起来像空壳大站。

## 4. 页面地图

### 首页

路径：`/`

职责：

- 建立品牌和定位。
- 引导进入主工具页。
- 展示高意图问题入口。
- 解释 Window + Mirror 方法。
- 链接到核心内容栏目。

建议区块：

1. Hero
   - H1：`Mirror Tarot Reading`
   - 副标题：`Ask about them. Discover what the question reveals about you.`
   - 主按钮：`Start a Free Love Reading`
   - 次按钮：`Explore Relationship Questions`
2. Question entry strip
   - `Do they miss me?`
   - `Should I text them?`
   - `What do they feel?`
   - `Should I wait or let go?`
3. Method section
   - 解释 Window 和 Mirror。
4. Featured readings
   - 链接 4 到 6 个核心问题页。
5. Emotional patterns
   - 链接心理差异化页面。
6. Disclaimer preview
   - 简短说明内容用于 entertainment and self-reflection。

首页不应塞入完整长文，但要有足够正文解释，避免薄页面。

### 主工具页

路径：`/love-tarot-reading/`

职责：

- 承接 `free love tarot reading` 和相关搜索。
- 提供完整抽牌体验。
- 解释工具如何使用。
- 引导用户选择具体问题。

建议区块：

1. SEO intro
   - 直接说明这是 free love tarot reading。
   - 说明不是 guaranteed prediction，而是 reflection reading。
2. Question selector
   - 默认选项：General Love Reading。
   - 其他选项：Does he miss me、Should I text him、What do they feel、Wait or let go。
3. Card draw module
   - 三张背面牌，用户选一张。
   - 也允许一个按钮：`Draw a Card`。
4. Reading result
   - Card title
   - Window
   - Mirror
   - Gentle next step
5. Related readings
6. FAQ

### 问题页

核心路径：

- `/does-he-miss-me-tarot/`
- `/should-i-text-him/`
- `/what-do-they-feel-about-me/`
- `/should-i-wait-or-let-go/`
- `/no-contact-tarot-reading/`

职责：

- 承接高情绪长尾搜索。
- 先回答问题，再引导自我反思。
- 提供与问题强相关的抽牌体验。

建议结构：

1. H1
   - 包含目标关键词，但标题要自然。
2. Opening answer
   - 2 到 3 段直接回应用户。
3. Why this question feels urgent
   - 解释用户为什么会搜这个。
4. Card reading module
   - 针对该问题的抽牌。
5. Result interpretation
   - Window + Mirror。
6. What to do with this reading
   - 温和下一步，不替用户做重大决定。
7. Related patterns
   - 链接心理内容页。
8. Related readings
   - 链接其他问题页。
9. FAQ

每个问题页都应是正文内容 + 工具体验，而不是只有工具。

### 心理模式页

核心路径：

- `/why-cant-i-stop-thinking-about-him/`
- `/relationship-anxiety-or-gut-feeling/`
- `/anxious-attachment-texting/`
- `/emotionally-unavailable-relationship/`

职责：

- 承接心理学和关系焦虑关键词。
- 建立 Mirror Tarot 的差异化和可信感。
- 引导用户从解释进入卡牌阅读。

建议结构：

1. H1
2. Clear answer
3. Common emotional pattern
4. What this may reveal about your attachment response
5. Reflection prompts
6. Related card reading
7. When to seek real support
8. Related pages

这些页面不要伪装成专业治疗，也不要把所有内容都强行解释成 tarot。

### Cards 索引页

路径：`/cards/`

第一版职责：

- 说明 Mirror Tarot 的卡牌结果不是传统完整塔罗百科。
- 提供已使用卡牌或主题牌的索引。
- 为后续扩展卡牌内容留入口。

第一版不做完整 78 张百科。

### About

路径：`/about/`

职责：

- 解释网站使命。
- 强调 self-reflection、relationship clarity、entertainment。
- 说明 Mirror Tarot 不提供保证性预测或治疗建议。

### Contact

路径：`/contact/`

职责：

- 提供基本联系渠道。
- 为 AdSense 站点完整度和用户信任服务。

### Privacy Policy

路径：`/privacy-policy/`

职责：

- 说明 analytics、cookies、ads、第三方服务。
- AdSense 接入前后都要更新。

### Disclaimer

路径：`/disclaimer/`

职责：

- 明确娱乐和自我反思定位。
- 不构成心理、医疗、法律、财务建议。
- 不保证预测结果。
- 危机、安全或虐待场景下应寻求现实帮助。

## 5. 内链策略

第一版内链应围绕三个中心：

- Love Reading hub：`/love-tarot-reading/`
- Relationship Questions：核心问题页
- Emotional Patterns：心理模式页

每个问题页至少链接：

- 1 个主工具页。
- 2 个相关问题页。
- 1 到 2 个心理模式页。
- Disclaimer。

每个心理模式页至少链接：

- 1 个相关问题页。
- 1 个主工具页。
- 2 个相关心理模式页。

## 6. 广告布局原则

第一版先预留广告位，不急于塞满广告。

建议广告位置：

- 文章正文第一屏之后。
- 正文中段，放在两个内容区块之间。
- 页面底部相关推荐前。

不建议：

- 首屏压住主要内容。
- 抽牌按钮附近放误导性广告。
- 弹窗广告。
- 广告密度高于正文内容。

AdSense 申请前可以不展示广告，但布局要为后续留空间。

## 7. 移动端原则

移动端是第一优先。

要求：

- 首屏能看懂网站用途。
- 主按钮清楚。
- 卡牌选择可单手操作。
- 正文行宽和字号适合阅读。
- 广告不会挤压抽牌区域。

## 8. 第一版验收标准

页面结构完成后，应满足：

- 用户从任意核心问题页进入都能理解网站定位。
- 用户能在 1 到 2 次点击内开始抽牌。
- 每个核心页面都有可读正文，不是薄工具页。
- 合规页面可从页脚访问。
- 相关页面之间有自然内链。
- 页面结构支持后续扩展到 20 到 30 个内容页面。
