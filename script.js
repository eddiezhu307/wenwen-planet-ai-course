const courses = [
  {
    id: 1,
    group: "mindset",
    module: "认知启蒙",
    title: "AI来了，未来世界会变成什么样？",
    scene: "孩子听到 AI 很厉害，但不知道它和搜索、手机 App 有什么区别。",
    concept: "AI、生成式 AI、互联网、搜索引擎、未来变化。",
    output: "我的 AI 世界观察图",
    tools: ["豆包", "DeepSeek", "腾讯元宝", "通义千问"],
    icon: "🧭",
    color: "#8ed8ff",
    image: "assets/hero-family-ai.jpg",
    prompt: "请用适合10岁孩子理解的方式解释：什么是人工智能？请举5个中国家庭生活中的例子，并说明AI可能会出错的地方。",
    worksheet: ["找出家里3个可能用到AI的地方", "比较AI、搜索引擎和计算器", "写下一个你担心AI的问题"],
    slides: [
      ["AI不是遥远的科幻", "它已经出现在推荐、拍照、语音、客服和学习工具里。", ["AI会根据信息做判断或生成内容", "它像新工具，不像万能老师", "越早理解，越能主动选择"], "开场可以先问孩子：你最近在哪里遇到过AI？"],
      ["AI和互联网有什么区别？", "互联网帮我们找到信息，AI可以帮我们整理、解释、改写和生成。", ["搜索更像找书架", "AI更像会聊天的学习伙伴", "两者都需要核查"], "强调AI回答像真的，不代表一定对。"],
      ["AI会不会取代人？", "重复、流程化的信息处理会变化，但创造、沟通、判断和责任仍然重要。", ["AI替代任务，不是替代整个人", "会用AI的人更有机会", "不会判断的人更容易被误导"], "避免恐吓式表达，用“任务变化”替代“人被淘汰”。"],
      ["今天的小作品", "画一张自己的AI世界观察图：家里、学校、城市里哪里已经有AI？", ["至少3个生活场景", "写出AI帮了什么", "写出一个需要小心的地方"], "作品可以贴在家庭学习墙上。"]
    ],
    game: {
      type: "pick",
      title: "AI身影侦探",
      instruction: "选出更可能使用 AI 的生活场景。",
      options: [
        ["camera", "手机自动识别照片里的天空和人像"],
        ["abacus", "算盘做加法"],
        ["recommend", "短视频平台推荐你可能喜欢的内容"],
        ["voice", "语音助手听懂问题并回答"],
        ["ruler", "直尺量课桌长度"],
        ["robot", "学习软件根据错题推荐练习"]
      ],
      answers: ["camera", "recommend", "voice", "robot"]
    }
  },
  {
    id: 2,
    group: "mindset",
    module: "认知启蒙",
    title: "为什么学校不教AI，但AI却越来越重要？",
    scene: "家长担心孩子乱用 AI，孩子却已经在同学讨论里听到各种工具。",
    concept: "标准答案变化、AI协作、家庭学习边界。",
    output: "家庭 AI 学习公约初稿",
    tools: ["豆包", "DeepSeek"],
    icon: "🏠",
    color: "#ffd84d",
    image: "assets/hero-family-ai.jpg",
    prompt: "请帮我们设计一份适合亲子共同使用的“家庭AI学习公约”，要求不鼓励抄作业，强调思考、提问、隐私和安全。",
    worksheet: ["写出3个可以用AI的场景", "写出3个不能直接让AI替代自己的场景", "家长和孩子各补充一条规则"],
    slides: [
      ["为什么学校暂时跟不上？", "AI工具迭代太快，学校课程需要稳定、安全和统一标准。", ["学校慢，不代表AI不重要", "家庭需要先建立基本规则", "先学方法，再追工具"], "不要把学校和AI对立起来。"],
      ["标准答案不再是全部", "AI能给出答案，但孩子要学会判断、追问和改进。", ["会背答案不等于会解决问题", "会提问越来越重要", "真实表达更稀缺"], "让孩子看到“过程”比“结果”更重要。"],
      ["禁止AI为什么危险？", "完全禁止会让孩子偷偷用、乱用、不会判断。", ["陪伴比禁止更有效", "透明比隐瞒更安全", "规则比恐惧更可持续"], "这是家长焦虑释放的一课。"],
      ["共创家庭公约", "全家一起决定AI什么时候能用、怎么用、哪些内容不能输入。", ["允许、禁止、必须三栏", "规则要短、清楚、可执行", "每月复盘一次"], "公约不要写成训话，要写成合作协议。"]
    ],
    game: {
      type: "build",
      title: "家庭公约拼装机",
      instruction: "填完三栏，生成一份家庭AI使用公约。",
      fields: [
        ["allow", "我们允许AI帮助什么？"],
        ["limit", "哪些事情不能直接交给AI？"],
        ["must", "使用AI前后必须做到什么？"]
      ],
      success: "一份可执行的公约，应该包含“允许、不允许、必须”三类规则。"
    }
  },
  {
    id: 3,
    group: "life",
    module: "学习生活",
    title: "AI如何成为孩子的学习助手？",
    scene: "数学不会、古诗不懂、错题反复错，孩子不知道该怎么问。",
    concept: "分步引导、知识解释、错题分析、学习辅助。",
    output: "AI 辅助学习记录表",
    tools: ["豆包", "DeepSeek", "通义千问"],
    icon: "📚",
    color: "#72dfb7",
    image: "assets/hero-classroom-ai.jpg",
    prompt: "请像小学老师一样给我讲这道题，不要直接给最终答案，先一步步引导我思考。如果我答错，请告诉我原因并给一道类似题。",
    worksheet: ["写下自己先想过什么", "记录AI提示了哪一步", "独立完成一道类似题"],
    slides: [
      ["AI是学习助手", "它可以解释、提问、检查和总结，但不能替孩子完成理解。", ["问过程，不只问答案", "请AI像老师一样引导", "最后要自己复述"], "这一课要强调“学习记录”。"],
      ["正确提问四步", "角色、任务、限制、检查，让AI知道应该怎样帮助你。", ["你是谁：老师/同桌/教练", "帮什么：解释/提示/检查", "不能做什么：别直接给答案"], "可现场比较普通问法和好问法。"],
      ["错题也能变地图", "把错题原因分成概念、审题、计算、表达。", ["先说错在哪里", "再找同类题", "最后复盘薄弱点"], "让孩子知道错题不是失败，是数据。"],
      ["课堂产出", "完成一张AI辅助学习记录表。", ["原题是什么", "AI提示了什么", "我自己学会了什么"], "家长可以看记录表，而不是只看答案。"]
    ],
    game: {
      type: "sort",
      title: "学习助手四步走",
      instruction: "按正确顺序点击步骤，拼出AI学习流程。",
      items: [
        ["think", "我先自己想一遍"],
        ["ask", "请AI一步步提示"],
        ["practice", "独立做一道类似题"],
        ["review", "记录我学会了什么"]
      ],
      answer: ["think", "ask", "practice", "review"]
    }
  },
  {
    id: 4,
    group: "life",
    module: "学习生活",
    title: "如何正确用AI写作业，而不是作弊？",
    scene: "这是家长最担心的场景：孩子会不会直接抄 AI 答案？",
    concept: "作业诚信、辅助边界、过程留痕。",
    output: "作业使用 AI 的三步法卡片",
    tools: ["豆包", "Kimi", "DeepSeek"],
    icon: "✏️",
    color: "#ffb86c",
    image: "assets/scene-homework-photo.jpg",
    prompt: "我正在完成作业，请不要直接给答案。请先问我3个引导问题，帮助我自己思考；然后检查我的思路有没有漏洞。",
    worksheet: ["先写自己的初步想法", "让AI只给提示不代写", "用自己的话完成最终答案"],
    slides: [
      ["不是所有AI使用都叫作弊", "关键在于AI是否替代了孩子的思考和表达。", ["提示思路可以", "检查错误可以", "直接抄答案不可以"], "这一课要让家长和孩子形成共同边界。"],
      ["错误用法", "直接输入题目，复制答案，自己不理解。", ["结果看起来快", "能力没有增长", "老师和家长难以判断真实水平"], "可以展示一个反面案例。"],
      ["正确用法", "让AI一步步引导，自己完成关键判断。", ["先自己想", "AI给提示", "自己复述并完成"], "三步法要让孩子背得出来。"],
      ["课堂产出", "制作一张“作业AI三步法”卡片。", ["我先想", "AI提示", "我来写"], "这张卡可以贴在书桌旁。"]
    ],
    game: {
      type: "pick",
      title: "作弊还是学习？",
      instruction: "选出属于“正确辅助学习”的行为。",
      options: [
        ["copy", "把AI整段答案复制到作业本上"],
        ["hint", "请AI只给提示，不给最终答案"],
        ["check", "完成后请AI帮我检查逻辑漏洞"],
        ["hide", "用AI写完但告诉老师全是自己写的"],
        ["practice", "让AI出一道类似题自己做"],
        ["rewrite", "让AI完全代写作文"]
      ],
      answers: ["hint", "check", "practice"]
    }
  },
  {
    id: 5,
    group: "life",
    module: "学习生活",
    title: "AI如何帮助孩子学英语？",
    scene: "孩子知道单词，但不敢开口，缺少低压力的口语练习伙伴。",
    concept: "角色对话、口语陪练、英文故事、纠错反馈。",
    output: "我的第一段 AI 英语角色对话",
    tools: ["豆包", "腾讯元宝", "有道小P"],
    icon: "🗣️",
    color: "#8ed8ff",
    image: "assets/scene-english-photo.jpg",
    prompt: "Please act as a friendly English speaking partner. I am a Chinese student. Ask me one simple question at a time, correct my sentence gently, and give me a more natural expression.",
    worksheet: ["选择一个生活场景", "完成5轮英文对话", "记录3个更自然的表达"],
    slides: [
      ["AI可以是口语陪练", "它不嫌你慢，也可以按照你的水平慢慢聊。", ["场景越具体越好", "一次只练一个主题", "错误要温和纠正"], "让孩子先从简单场景开始。"],
      ["设置角色", "让AI扮演外国朋友、餐厅店员、面试官或校园访客。", ["角色决定语气", "场景决定词汇", "年级决定难度"], "角色扮演会让练习更像真实交流。"],
      ["纠错不是批评", "请AI告诉你更自然的说法，而不是只说对错。", ["先鼓励", "再修改", "最后再练一次"], "保护孩子开口的勇气。"],
      ["课堂产出", "完成一段5轮英语角色对话。", ["有场景", "有纠错", "有新表达"], "可以让孩子录音复盘。"]
    ],
    game: {
      type: "match",
      title: "英语场景配对",
      instruction: "把中文场景和适合的英文开场句配对。",
      pairs: [
        ["在餐厅点餐", "May I have a menu, please?"],
        ["校园导览", "Welcome to our school."],
        ["介绍爱好", "I enjoy drawing and science."],
        ["请求帮助", "Could you help me with this word?"]
      ]
    }
  },
  {
    id: 6,
    group: "create",
    module: "创造力",
    title: "AI如何帮助孩子画画、做动画、做视频？",
    scene: "孩子脑子里有画面，但不知道如何描述给 AI 绘图和视频工具。",
    concept: "图像提示词、角色设定、镜头、风格、分镜。",
    output: "AI 原创角色卡或15秒短视频脚本",
    tools: ["即梦AI", "通义万相", "美图AI", "可灵AI", "Seedance"],
    icon: "🎨",
    color: "#ff71a8",
    image: "assets/hero-creator-ai.jpg",
    prompt: "请把“一个孩子在未来教室里和AI老师一起学习”的画面，改写成适合AI绘画工具使用的详细提示词，包含主体、场景、风格、颜色、镜头和避免内容。",
    worksheet: ["写出角色外貌和性格", "补充场景和风格", "设计3个视频镜头"],
    slides: [
      ["画面来自清楚描述", "AI绘画不是只写一个词，而是描述主体、场景、风格和镜头。", ["谁在画面里", "发生在哪里", "是什么风格", "不要出现什么"], "提示词越像导演说明，结果越稳定。"],
      ["角色设定四件套", "外貌、服装、性格、道具能让角色更完整。", ["角色不是只有长相", "道具能表达身份", "性格会影响表情和动作"], "鼓励孩子先画草图再让AI优化。"],
      ["视频要有镜头", "一段15秒视频至少需要开场、中段、结尾。", ["镜头1：建立场景", "镜头2：出现动作", "镜头3：完成变化"], "从短视频脚本开始更容易控制。"],
      ["课堂产出", "完成一个原创角色卡或15秒视频分镜。", ["提示词", "角色图", "三镜头脚本"], "作品要注明AI辅助和自己的修改。"]
    ],
    game: {
      type: "build",
      title: "图像提示词调色盘",
      instruction: "填入四个要素，生成一条适合绘图/视频工具的提示词。",
      fields: [
        ["subject", "主体是谁？"],
        ["scene", "发生在哪里？"],
        ["style", "想要什么插画/动画风格？"],
        ["avoid", "不希望出现什么？"]
      ],
      success: "好画面通常来自：主体 + 场景 + 风格 + 限制。"
    }
  },
  {
    id: 7,
    group: "create",
    module: "创造力",
    title: "AI如何帮助孩子做音乐？",
    scene: "孩子想写一首校园歌、家庭歌或太空探险歌，但不知道歌词结构。",
    concept: "歌词、主歌、副歌、节奏、音乐风格。",
    output: "我的第一首 AI 主题歌曲歌词",
    tools: ["天工AI", "豆包"],
    icon: "🎵",
    color: "#ffd84d",
    image: "assets/hero-creator-ai.jpg",
    prompt: "请为8-12岁孩子写一首关于“太空探险”的儿童歌曲歌词，风格明亮、有画面感，包含主歌、副歌和一句容易记住的口号。",
    worksheet: ["选择歌曲主题", "写出一句副歌口号", "设计速度、情绪和乐器"],
    slides: [
      ["AI可以帮你写歌", "但真正好听的歌，需要主题、情绪和重复记忆点。", ["主题要清楚", "副歌要容易记", "语言要像孩子会唱出来"], "可以现场念两版歌词比较。"],
      ["歌曲结构", "主歌讲故事，副歌给记忆点，桥段带来变化。", ["主歌：发生了什么", "副歌：最想让人记住什么", "结尾：一起唱出来"], "用节拍拍手帮助理解结构。"],
      ["校园歌更要真实", "不要写得太成人化，要有孩子自己的语言。", ["同学、操场、梦想", "简单节奏", "积极但不空洞"], "提醒AI输出后还要人工改。"],
      ["课堂产出", "完成一首主题歌曲歌词和音乐风格说明。", ["主歌", "副歌", "风格建议"], "可以作为结课发布会作品。"]
    ],
    game: {
      type: "sort",
      title: "歌曲结构排排队",
      instruction: "按一首儿童歌曲常见结构排序。",
      items: [
        ["theme", "确定主题和情绪"],
        ["verse", "写主歌讲故事"],
        ["chorus", "写副歌记忆点"],
        ["style", "选择速度、乐器和演唱方式"]
      ],
      answer: ["theme", "verse", "chorus", "style"]
    }
  },
  {
    id: 8,
    group: "create",
    module: "创造力",
    title: "AI如何帮助孩子做游戏？",
    scene: "孩子喜欢玩游戏，但还没有意识到自己也能设计角色、地图和任务。",
    concept: "游戏世界观、角色、关卡、任务、玩家体验。",
    output: "AI 原创游戏世界观设定",
    tools: ["豆包", "DeepSeek", "蛋仔派对", "迷你世界"],
    icon: "🎮",
    color: "#8b76ff",
    image: "assets/hero-creator-ai.jpg",
    prompt: "请帮我设计一个适合小学生的冒险游戏世界观，主题是“AI城市救援队”，需要包含背景故事、3个角色、3个关卡和最终任务。",
    worksheet: ["设计一个主角", "设计三个关卡", "写出最终任务和胜利条件"],
    slides: [
      ["从玩家到设计师", "游戏不只是玩，还可以拆解角色、规则、地图和目标。", ["玩家问好不好玩", "设计师问为什么好玩", "AI可以帮助展开设定"], "引导孩子分析喜欢的游戏。"],
      ["游戏世界观", "一个世界需要背景、冲突、角色和任务。", ["为什么要冒险", "谁来完成任务", "玩家怎么变强"], "不要只做炫酷设定，要有目标。"],
      ["关卡设计", "好的关卡会一点点增加难度，让玩家学会规则。", ["第一关学规则", "第二关做选择", "第三关解决综合问题"], "可以画地图草图。"],
      ["课堂产出", "完成一个小游戏世界观设定。", ["背景故事", "角色设定", "关卡任务"], "适合接入蛋仔派对或迷你世界创作。"]
    ],
    game: {
      type: "match",
      title: "游戏设计四件套",
      instruction: "把游戏元素和它的作用配对。",
      pairs: [
        ["角色", "玩家代入和成长"],
        ["地图", "探索路线和空间挑战"],
        ["任务", "告诉玩家要完成什么"],
        ["规则", "决定什么能做、什么不能做"]
      ]
    }
  },
  {
    id: 9,
    group: "ability",
    module: "核心能力",
    title: "未来什么工作会消失？什么能力会更值钱？",
    scene: "孩子和家长都担心：AI 会不会让未来没有工作？",
    concept: "职业变化、重复任务、创造力、沟通力、产品思维。",
    output: "我的未来能力雷达图",
    tools: ["豆包", "DeepSeek", "腾讯元宝"],
    icon: "🧩",
    color: "#72dfb7",
    image: "assets/hero-family-ai.jpg",
    prompt: "请用适合12岁孩子理解的方式解释：AI时代哪些工作会变化？哪些能力会更重要？请不要制造恐慌，并给出一个未来能力雷达图模板。",
    worksheet: ["选择3个感兴趣的职业", "分析AI能帮什么", "写出人类仍然重要的能力"],
    slides: [
      ["AI改变的是任务", "重复、流程化、信息搬运的部分会被AI加速或替代。", ["不是所有职业消失", "很多岗位会重组", "人需要做更复杂的判断"], "用任务视角降低恐慌。"],
      ["更值钱的能力", "创造力、情绪价值、审美、沟通、产品思维和责任感更重要。", ["会提问", "会判断", "会协作", "会表达"], "把能力讲得具体。"],
      ["孩子现在能做什么？", "练习学习、表达、创造和项目能力，而不是只追工具。", ["做作品", "讲过程", "复盘失败"], "让孩子看到可行动路径。"],
      ["课堂产出", "完成一张未来能力雷达图。", ["五项能力打分", "选择一个提升目标", "写下30天行动"], "可以和第15课成长路线连接。"]
    ],
    game: {
      type: "pick",
      title: "未来能力筛选器",
      instruction: "选出AI时代更难被替代、值得长期培养的能力。",
      options: [
        ["copy", "机械复制资料"],
        ["creative", "创造新方案"],
        ["empathy", "理解他人情绪"],
        ["routine", "重复录入表格"],
        ["judge", "判断信息是否可靠"],
        ["communicate", "清楚表达和合作"]
      ],
      answers: ["creative", "empathy", "judge", "communicate"]
    }
  },
  {
    id: 10,
    group: "ability",
    module: "核心能力",
    title: "什么是Prompt？为什么会提问越来越重要？",
    scene: "同样问 AI，有人得到普通答案，有人得到能直接使用的帮助。",
    concept: "Prompt、角色、目标、背景、限制、输出格式。",
    output: "我的高质量 Prompt 卡",
    tools: ["DeepSeek", "豆包"],
    icon: "💬",
    color: "#8ed8ff",
    image: "assets/hero-classroom-ai.jpg",
    prompt: "请像小学五年级语文老师一样，引导我一步步完成作文。不要直接给全文，先帮我确定主题、素材和结构，然后给我修改建议。",
    worksheet: ["把一个模糊问题拆成五要素", "比较普通问法和高级问法", "制作自己的Prompt卡"],
    slides: [
      ["Prompt就是给AI的任务说明", "说得越清楚，AI越容易给出有用结果。", ["角色", "目标", "背景", "限制", "格式"], "这节课是全课程的能力核心。"],
      ["普通问法的问题", "“帮我写作文”太模糊，也容易变成代写。", ["没有年级", "没有主题", "没有限制", "没有过程"], "现场展示低质量输出。"],
      ["高级问法的结构", "告诉AI扮演谁、帮什么、不能做什么、怎样输出。", ["像老师一样引导", "不要直接给答案", "用表格或步骤输出"], "让孩子做改写练习。"],
      ["课堂产出", "完成一张可复用Prompt卡。", ["我的角色句", "我的限制句", "我的输出格式"], "后续每节课都能用。"]
    ],
    game: {
      type: "build",
      title: "Prompt 五要素工厂",
      instruction: "填入五要素，拼出一条更清楚的提示词。",
      fields: [
        ["role", "角色：让AI扮演谁？"],
        ["task", "目标：帮你完成什么？"],
        ["context", "背景：你的年级/任务/材料？"],
        ["limit", "限制：不要做什么？"],
        ["format", "格式：希望怎样输出？"]
      ],
      success: "完整Prompt通常包含：角色 + 目标 + 背景 + 限制 + 格式。"
    }
  },
  {
    id: 11,
    group: "ability",
    module: "核心能力",
    title: "AI会不会让孩子变笨？",
    scene: "家长担心孩子依赖 AI，孩子觉得 AI 太方便。",
    concept: "AI依赖、独立思考、红绿灯规则。",
    output: "家庭 AI 使用红绿灯",
    tools: ["豆包", "Kimi", "DeepSeek"],
    icon: "🚦",
    color: "#ffd84d",
    image: "assets/hero-family-ai.jpg",
    prompt: "请不要直接告诉我答案。请一步步提问，引导我自己想出来，并在最后帮我检查思路有没有漏洞。",
    worksheet: ["列出绿灯使用场景", "列出红灯禁止场景", "写下保持思考的办法"],
    slides: [
      ["AI会不会让人变笨？", "关键不在工具，而在使用方式。", ["替代思考会变懒", "放大能力会变强", "规则决定结果"], "这是家长情绪核心课。"],
      ["绿灯场景", "解释知识、提供提示、检查错误、生成练习。", ["帮助理解", "帮助复盘", "帮助练习"], "绿灯是学习辅助。"],
      ["红灯场景", "代写作业、伪装原创、隐瞒AI使用、上传隐私。", ["替代自己", "欺骗他人", "泄露安全"], "红灯要说清楚后果。"],
      ["课堂产出", "完成家庭AI使用红绿灯。", ["绿灯", "黄灯", "红灯"], "家长和孩子一起签名会更有仪式感。"]
    ],
    game: {
      type: "pick",
      title: "红绿灯判断",
      instruction: "选出属于“绿灯”的AI使用方式。",
      options: [
        ["explain", "让AI解释一个没懂的知识点"],
        ["ghostwrite", "让AI替我写完整作文并直接交"],
        ["check", "让AI检查我自己的思路"],
        ["privacy", "把家庭住址和电话发给AI"],
        ["practice", "让AI出类似题给我练习"],
        ["hide", "用AI做作品但不承认"]
      ],
      answers: ["explain", "check", "practice"]
    }
  },
  {
    id: 12,
    group: "future",
    module: "安全未来",
    title: "AI时代，如何保护自己？",
    scene: "AI换脸、AI诈骗、AI假视频让孩子更难判断真假。",
    concept: "AI诈骗、Deepfake、隐私保护、信息核查。",
    output: "AI 安全判断清单",
    tools: ["豆包", "腾讯元宝", "DeepSeek"],
    icon: "🛡️",
    color: "#ff71a8",
    image: "assets/scene-safety-photo.jpg",
    prompt: "请帮我设计一份适合小学生的AI安全检查清单，包含隐私、诈骗、换脸视频、陌生人聊天和信息核查。",
    worksheet: ["识别3类AI风险", "写下信息判断五问", "制作一张安全提醒卡"],
    slides: [
      ["AI也能伪造", "图片、视频和声音都可能被AI生成或修改。", ["不要只凭看起来真实", "重要信息要交叉验证", "遇到金钱和隐私要停下"], "安全课要讲具体案例。"],
      ["隐私不能随便给", "真实姓名、住址、电话、学校班级、证件、私人照片都要谨慎。", ["先问家长", "不要上传敏感信息", "账号密码永远不发"], "强调未成年人保护。"],
      ["信息判断五问", "来源、证据、动机、风险、是否需要求助。", ["它来自哪里", "有没有可靠来源", "是不是催我马上行动"], "五问法可以做成卡片。"],
      ["课堂产出", "完成AI安全判断清单。", ["隐私", "诈骗", "换脸", "核查"], "后续每次使用AI都能回看。"]
    ],
    game: {
      type: "quiz",
      title: "AI安全快问快答",
      instruction: "选择更安全的做法。",
      questions: [
        ["陌生人发来AI生成的获奖链接，让你填电话，应该？", ["马上填写", "先问家长并核查来源", "转发给同学"], 1],
        ["看到一个像老师的视频要求转账，应该？", ["立刻转账", "用其他渠道联系老师或家长确认", "只看视频判断真假"], 1],
        ["和AI聊天时，以下哪项不该输入？", ["一道数学题", "家庭住址和电话", "一个虚构故事主题"], 1]
      ]
    }
  },
  {
    id: 13,
    group: "future",
    module: "安全未来",
    title: "AI陪伴会成为未来吗？",
    scene: "孩子可能会接触 AI 朋友、AI 宠物和 AI 聊天伙伴。",
    concept: "AI陪伴、情绪支持、真实关系、隐私与沉迷边界。",
    output: "AI 陪伴边界卡",
    tools: ["星野", "猫箱"],
    icon: "🤝",
    color: "#8b76ff",
    image: "assets/hero-family-ai.jpg",
    prompt: "请用适合孩子理解的语言说明：AI聊天伙伴可以陪伴我们，但为什么不能完全代替真实朋友和家人？",
    worksheet: ["写出AI陪伴的好处", "写出不能告诉AI的秘密", "制定每天使用时长边界"],
    slides: [
      ["AI可以陪聊天", "它能提供回应和陪伴感，但它不是现实中的朋友和家人。", ["可以练表达", "可以缓解孤单", "不能替代真实关系"], "语气要温和，不要妖魔化。"],
      ["边界很重要", "不要把隐私、真实身份和深层秘密全部交给AI。", ["AI会记录信息", "它不一定真正理解你", "重要情绪要找真人"], "重点是“谁适合知道这件事”。"],
      ["沉迷风险", "如果只和AI交流，可能减少真实社交和运动。", ["设定时间", "和家长沟通", "保留现实朋友"], "家长要陪伴而不是监控。"],
      ["课堂产出", "完成AI陪伴边界卡。", ["可以聊什么", "不能说什么", "什么时候找真人"], "适合做亲子讨论。"]
    ],
    game: {
      type: "pick",
      title: "陪伴边界选择题",
      instruction: "选出适合告诉AI聊天伙伴的内容。",
      options: [
        ["story", "我想写一个关于月球旅行的故事"],
        ["address", "我家的详细住址和门牌号"],
        ["practice", "我想练习怎样和同学打招呼"],
        ["password", "我的账号密码"],
        ["mood", "我今天有点不开心，想整理情绪"],
        ["phone", "家长手机号"]
      ],
      answers: ["story", "practice", "mood"]
    }
  },
  {
    id: 14,
    group: "future",
    module: "安全未来",
    title: "未来的学校、工作和生活会变成什么样？",
    scene: "如果 AI 老师、AI Agent 和自动化助手进入生活，孩子的一天会怎样？",
    concept: "AI老师、AI公司、AI Agent、自动化社会。",
    output: "2035年我的一天",
    tools: ["豆包", "通义千问", "OpenClaw"],
    icon: "🚀",
    color: "#72dfb7",
    image: "assets/hero-classroom-ai.jpg",
    prompt: "请帮我想象2035年一个中国初中生的一天：他如何用AI学习、做项目、和同学合作、安排生活？要求真实、有细节，不要太科幻。",
    worksheet: ["设计未来早晨", "设计未来课堂", "设计未来项目合作"],
    slides: [
      ["未来不是只有机器人", "更可能是AI悄悄进入学习、工作和生活流程。", ["AI老师", "AI日程助手", "AI项目伙伴"], "把未来讲得真实而不是夸张。"],
      ["什么是AI Agent？", "它像能帮你连续完成任务的助手，不只是回答一句话。", ["理解目标", "拆分步骤", "调用工具", "反馈结果"], "用生活例子解释：旅行计划、学习计划。"],
      ["未来学校变化", "项目学习、个性化辅导、跨学科创作会更多。", ["学习路径更个性化", "作品展示更重要", "合作能力更关键"], "回扣孩子现在能练什么。"],
      ["课堂产出", "写一篇2035年我的一天。", ["真实细节", "AI帮助", "人的选择"], "不要写成纯科幻，要落地。"]
    ],
    game: {
      type: "sort",
      title: "未来一天时间线",
      instruction: "按一个未来学生合理的一天排序。",
      items: [
        ["plan", "早晨AI助手整理当天计划"],
        ["learn", "课堂上AI老师提供个性化练习"],
        ["project", "下午和同学完成跨学科项目"],
        ["reflect", "晚上复盘今天AI帮了什么、人做了什么选择"]
      ],
      answer: ["plan", "learn", "project", "reflect"]
    }
  },
  {
    id: 15,
    group: "future",
    module: "结课整合",
    title: "如何成为AI时代最有竞争力的孩子？",
    scene: "课程收束：孩子要把学习、创造、判断和协作整理成自己的成长路线。",
    concept: "学习力、创造力、AI协作、信息判断、长期项目。",
    output: "家庭 AI 成长路线图",
    tools: ["豆包", "DeepSeek", "Kimi"],
    icon: "⭐",
    color: "#ffd84d",
    image: "assets/hero-creator-ai.jpg",
    prompt: "请根据我过去学习AI的作品和兴趣，帮我设计一份30天AI成长路线图，包含学习、创作、判断、安全四类任务。",
    worksheet: ["复盘最喜欢的AI作品", "写出最想提升的能力", "制定30天行动计划"],
    slides: [
      ["最强的不是背答案的人", "AI时代更需要会学习、会创造、会协作、会判断的人。", ["学习力", "创造力", "协作力", "判断力"], "这是课程价值观总结。"],
      ["复盘自己的作品", "看见自己做过什么，比只看工具列表更重要。", ["我解决了什么问题", "AI帮了哪一步", "我做了哪些修改"], "让孩子练习讲述过程。"],
      ["30天成长路线", "把课程能力变成家庭可执行计划。", ["每周一个小任务", "每次记录过程", "月底做一次展示"], "帮助家长承接后续学习。"],
      ["课堂产出", "完成家庭AI成长路线图。", ["能力目标", "作品目标", "安全规则"], "这可以作为结课证书之外的真实成果。"]
    ],
    game: {
      type: "build",
      title: "成长路线生成器",
      instruction: "填入目标，生成一份30天AI成长路线。",
      fields: [
        ["skill", "我最想提升的能力"],
        ["project", "我想完成的AI作品"],
        ["rule", "我必须遵守的安全规则"],
        ["support", "我希望家长怎样支持我"]
      ],
      success: "好的成长路线要有能力、作品、规则和家庭支持。"
    }
  },
  {
    id: 16,
    group: "future",
    module: "发布会",
    title: "家庭 AI 作品发布会",
    scene: "孩子展示自己的作品，家长展示家庭公约，一起完成课程闭环。",
    concept: "作品表达、过程复盘、署名说明、未来计划。",
    output: "AI作品发布会展板",
    tools: ["全部工具复盘"],
    icon: "🎤",
    color: "#ff71a8",
    image: "assets/hero-creator-ai.jpg",
    prompt: "请帮我把我的AI课程作品整理成一个3分钟发布会讲稿，包含作品主题、我做了什么、AI帮了什么、我如何修改、我下一步想做什么。",
    worksheet: ["选出1个代表作品", "写3分钟展示稿", "说明AI与个人贡献分工"],
    slides: [
      ["发布会不是表演", "它是让孩子说清楚自己的学习过程。", ["问题是什么", "过程是什么", "作品是什么", "下一步是什么"], "展示比证书更有记忆点。"],
      ["作品要能讲过程", "只展示结果不够，要说明AI和个人分别做了什么。", ["我提出问题", "AI给了建议", "我做了选择和修改"], "这也是诚信教育。"],
      ["家庭也要展示", "家长展示家庭AI公约，说明未来如何陪伴。", ["使用边界", "安全规则", "复盘机制"], "结课要让家庭带走行动。"],
      ["课堂产出", "完成AI作品发布会展板和3分钟讲稿。", ["作品图", "过程说明", "成长计划"], "这节可作为招生展示课。"]
    ],
    game: {
      type: "sort",
      title: "发布会流程导演",
      instruction: "按3分钟作品发布会的合理流程排序。",
      items: [
        ["problem", "我想解决的问题"],
        ["process", "我和AI如何合作"],
        ["work", "展示最终作品"],
        ["next", "下一步成长计划"]
      ],
      answer: ["problem", "process", "work", "next"]
    }
  }
];

const state = {
  filter: "all",
  query: "",
  completed: new Set(JSON.parse(localStorage.getItem("aiFamilyCourseDone") || "[]")),
  heroIndex: 0,
  activeCourseId: null,
  activeSlide: 0,
  game: null,
  heroTimer: null
};

const pageMode = document.body.dataset.page || "home";
document.body.classList.remove("focus-classroom");
document.documentElement.style.overflowY = "";
document.body.style.overflowY = "";
document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";
const lessonGrid = document.querySelector("#lessonGrid");
const classroomShell = document.querySelector("#classroomShell");
const progressNumber = document.querySelector("#progressNumber");
const progressBar = document.querySelector("#progressBar");
const courseRail = document.querySelector("#courseRail");
const toast = document.querySelector("#toast");

function setupScrollRescue() {
  const scrollableSelector = [
    ".course-rail",
    ".match-grid",
    ".side-stack",
    ".ppt-stage",
    ".game-panel",
    ".prompt-card",
    ".worksheet-card",
    "textarea",
    "select"
  ].join(",");
  let lastTouchY = 0;

  function getPageScrollRoot() {
    return document.scrollingElement || document.documentElement;
  }

  function canScrollInside(target, deltaY) {
    const element = target instanceof Element ? target.closest(scrollableSelector) : null;
    if (!element || element === document.body || element === document.documentElement) return false;
    const style = window.getComputedStyle(element);
    if (!/(auto|scroll)/.test(style.overflowY)) return false;
    const maxScroll = element.scrollHeight - element.clientHeight;
    if (maxScroll <= 1) return false;
    return deltaY < 0 ? element.scrollTop > 1 : element.scrollTop < maxScroll - 1;
  }

  function scrollPage(deltaY) {
    if (!deltaY) return false;
    const root = getPageScrollRoot();
    const viewportHeight = root === document.body || root === document.documentElement
      ? window.innerHeight
      : root.clientHeight;
    const maxScroll = root.scrollHeight - viewportHeight;
    if (maxScroll <= 0) return false;
    const current = root.scrollTop || 0;
    const next = Math.max(0, Math.min(maxScroll, current + deltaY));
    if (Math.abs(next - current) < 0.5) return false;
    root.scrollTop = next;
    if (root === document.body || root === document.documentElement) {
      document.documentElement.scrollTop = next;
      document.body.scrollTop = next;
    }
    return true;
  }

  function scrollHashTarget() {
    if (!location.hash || location.hash.startsWith("#lesson-")) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ block: "start" });
  }

  window.addEventListener("wheel", (event) => {
    if (event.ctrlKey || canScrollInside(event.target, event.deltaY)) return;
    if (scrollPage(event.deltaY)) event.preventDefault();
  }, { passive: false, capture: true });

  window.addEventListener("touchstart", (event) => {
    lastTouchY = event.touches[0]?.clientY || 0;
  }, { passive: true });

  window.addEventListener("touchmove", (event) => {
    const currentY = event.touches[0]?.clientY || 0;
    const deltaY = lastTouchY - currentY;
    if (Math.abs(deltaY) < 2 || canScrollInside(event.target, deltaY)) return;
    if (scrollPage(deltaY)) {
      event.preventDefault();
      lastTouchY = currentY;
    }
  }, { passive: false, capture: true });

  window.addEventListener("keydown", (event) => {
    const target = event.target;
    if (target instanceof Element && target.matches("input, textarea, select, button")) return;
    const root = getPageScrollRoot();
    const step = Math.max(120, Math.round(root.clientHeight * 0.82));
    const keyScrollMap = {
      ArrowDown: 90,
      ArrowUp: -90,
      PageDown: step,
      PageUp: -step,
      " ": step
    };
    if (event.key === "Home") {
      root.scrollTop = 0;
      event.preventDefault();
      return;
    }
    if (event.key === "End") {
      root.scrollTop = root.scrollHeight;
      event.preventDefault();
      return;
    }
    if (Object.prototype.hasOwnProperty.call(keyScrollMap, event.key) && scrollPage(keyScrollMap[event.key])) {
      event.preventDefault();
    }
  }, { capture: true });

  window.addEventListener("hashchange", () => window.setTimeout(scrollHashTarget, 0));
  window.setTimeout(scrollHashTarget, 80);
  window.setTimeout(scrollHashTarget, 260);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function moduleName(group) {
  return {
    mindset: "AI时代认知",
    life: "真实生活场景",
    create: "AI创造力",
    ability: "核心能力",
    future: "安全与未来"
  }[group] || "课程";
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function saveProgress() {
  localStorage.setItem("aiFamilyCourseDone", JSON.stringify([...state.completed]));
}

function updateProgress() {
  if (!progressNumber || !progressBar) return;
  const count = state.completed.size;
  progressNumber.textContent = `${count}/${courses.length}`;
  progressBar.style.width = `${Math.round((count / courses.length) * 100)}%`;
}

function courseMatches(course) {
  const byFilter = state.filter === "all" || course.group === state.filter;
  const haystack = [
    course.title,
    course.scene,
    course.concept,
    course.output,
    course.tools.join(" "),
    course.prompt
  ].join(" ").toLowerCase();
  return byFilter && haystack.includes(state.query);
}

function renderCourses() {
  if (!lessonGrid) return;
  const visible = courses.filter(courseMatches);
  if (!visible.length) {
    lessonGrid.innerHTML = `<div class="empty-state">没有找到对应课程。换个关键词试试，比如“英语”“音乐”“安全”。</div>`;
    return;
  }
  lessonGrid.innerHTML = visible.map((course) => {
    const done = state.completed.has(course.id);
    return `
      <article class="lesson-card ${done ? "is-done" : ""}" style="--art-bg:${course.color}">
        <div class="lesson-art">
          <img src="${course.image}" alt="" loading="lazy">
          <span class="lesson-icon" aria-hidden="true">${course.icon}</span>
        </div>
        <div class="lesson-body">
          <div class="lesson-topline">
            <span class="lesson-number">第 ${course.id} 课</span>
            <span class="lesson-module">${course.module}</span>
          </div>
          <h3>${escapeHtml(course.title)}</h3>
          <p>${escapeHtml(course.scene)}</p>
          <div class="lesson-tags">
            <span>${moduleName(course.group)}</span>
            <span>${escapeHtml(course.output)}</span>
          </div>
          <div class="course-actions">
            <button class="btn small primary" type="button" data-start-course="${course.id}">进入课堂</button>
            <button class="btn small ghost" type="button" data-toggle-done="${course.id}">${done ? "已点亮" : "点亮"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderCourseRail() {
  if (!courseRail) return;
  courseRail.innerHTML = courses.map((course) => {
    const active = state.activeCourseId === course.id;
    const done = state.completed.has(course.id);
    return `
      <button class="rail-course ${active ? "is-active" : ""}" type="button" data-start-course="${course.id}">
        <span>${String(course.id).padStart(2, "0")}</span>
        <strong>${escapeHtml(course.title)}</strong>
        <em>${done ? "已完成" : course.module}</em>
      </button>
    `;
  }).join("");
}

function toggleDone(id) {
  if (state.completed.has(id)) {
    state.completed.delete(id);
    showToast("已取消点亮");
  } else {
    state.completed.add(id);
    showToast("课程已点亮");
  }
  saveProgress();
  updateProgress();
  renderCourses();
  renderCourseRail();
  if (state.activeCourseId === id) {
    document.querySelectorAll(`[data-toggle-done="${id}"]`).forEach((button) => {
      button.textContent = state.completed.has(id) ? "取消点亮" : "完成并点亮";
    });
  }
}

function setupHero() {
  const slides = [...document.querySelectorAll("[data-hero-slide]")];
  const dots = document.querySelector("#heroDots");
  if (!slides.length || !dots) return;
  dots.innerHTML = slides.map((_, index) => (
    `<button type="button" aria-label="切换到第${index + 1}张轮播" data-hero-dot="${index}"></button>`
  )).join("");

  const show = (index) => {
    state.heroIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === state.heroIndex));
    document.querySelectorAll("[data-hero-dot]").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === state.heroIndex);
    });
  };

  const restart = () => {
    window.clearInterval(state.heroTimer);
    state.heroTimer = window.setInterval(() => show(state.heroIndex + 1), 5800);
  };

  document.querySelector("#heroPrev").addEventListener("click", () => {
    show(state.heroIndex - 1);
    restart();
  });
  document.querySelector("#heroNext").addEventListener("click", () => {
    show(state.heroIndex + 1);
    restart();
  });
  dots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-hero-dot]");
    if (!button) return;
    show(Number(button.dataset.heroDot));
    restart();
  });
  show(0);
  restart();
}

function createGameState(course) {
  const game = course.game;
  const rightOrder = game.type === "match"
    ? [...game.pairs.map((pair) => pair[1])].sort(() => Math.random() - 0.5)
    : [];
  state.game = {
    courseId: course.id,
    selected: new Set(),
    sequence: [],
    activeLeft: "",
    matches: [],
    rightOrder
  };
}

function renderClassroom(id, options = {}) {
  const course = courses.find((item) => item.id === id);
  if (!course || !classroomShell) return;
  state.activeCourseId = id;
  if (!options.keepSlide) state.activeSlide = 0;
  createGameState(course);
  classroomShell.classList.remove("is-empty");
  classroomShell.innerHTML = `
    <div class="lesson-studio" style="--art-bg:${course.color}">
      <header class="studio-header">
        <div>
          <p class="section-kicker">第 ${course.id} 课 · ${moduleName(course.group)}</p>
          <h3>${escapeHtml(course.title)}</h3>
          <p>${escapeHtml(course.scene)}</p>
        </div>
        <div class="studio-meta">
          ${course.tools.map((tool) => `<span class="tool-chip">${escapeHtml(tool)}</span>`).join("")}
        </div>
      </header>
      <section class="ppt-stage" aria-label="互动PPT">
        <div class="ppt-frame" id="pptFrame"></div>
        <div class="ppt-controls">
          <button class="btn small ghost" type="button" data-slide-action="prev">上一页</button>
          <div class="slide-dots" id="slideDots"></div>
          <button class="btn small ghost" type="button" data-slide-action="note">讲师提示</button>
          <button class="btn small primary" type="button" data-slide-action="next">下一页</button>
        </div>
      </section>
      <aside class="side-stack">
        <section class="game-panel" aria-label="本课互动小游戏">
          <h4>${escapeHtml(course.game.title)}</h4>
          <p>${escapeHtml(course.game.instruction)}</p>
          <div id="gameBoard"></div>
        </section>
        <section class="prompt-card">
          <h4>本课 Prompt 模板</h4>
          <pre>${escapeHtml(course.prompt)}</pre>
          <div class="slide-actions">
            <button class="btn small primary" type="button" data-copy-prompt>复制模板</button>
            <button class="btn small ghost" type="button" data-toggle-done="${course.id}">${state.completed.has(course.id) ? "取消点亮" : "完成并点亮"}</button>
          </div>
        </section>
        <section class="worksheet-card">
          <h4>课堂产出：${escapeHtml(course.output)}</h4>
          <ul>${course.worksheet.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
      </aside>
    </div>
  `;
  renderSlide(course);
  renderGame(course);
  renderCourseRail();
  if (options.updateHash !== false) {
    const targetUrl = pageMode === "course"
      ? `course.html?lesson=${course.id}`
      : `#lesson-${course.id}`;
    history.replaceState(null, "", targetUrl);
  }
  if (!options.noScroll) {
    document.querySelector("#classroom").scrollIntoView({
      behavior: options.updateHash === false ? "auto" : "smooth",
      block: "start"
    });
  }
}

function renderSlide(course) {
  const slide = course.slides[state.activeSlide];
  const [title, body, bullets, note] = slide;
  document.querySelector("#pptFrame").innerHTML = `
    <span class="ppt-kicker">互动 PPT · ${state.activeSlide + 1}/${course.slides.length}</span>
    <h4>${escapeHtml(title)}</h4>
    <p>${escapeHtml(body)}</p>
    <ul>${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <div class="speaker-note" id="speakerNote">${escapeHtml(note)}</div>
  `;
  document.querySelector("#slideDots").innerHTML = course.slides.map((_, index) => (
    `<button type="button" class="${index === state.activeSlide ? "is-active" : ""}" data-slide-dot="${index}" aria-label="第${index + 1}页"></button>`
  )).join("");
}

function renderGame(course) {
  const board = document.querySelector("#gameBoard");
  const game = course.game;
  if (game.type === "pick") {
    board.innerHTML = `
      <div class="game-board">
        <div class="card-list">
          ${game.options.map(([id, text]) => `
            <button class="chip-btn ${state.game.selected.has(id) ? "is-selected" : ""}" type="button" data-pick="${id}">${escapeHtml(text)}</button>
          `).join("")}
        </div>
        <div class="game-actions">
          <button class="btn small primary" type="button" data-game-check>检查答案</button>
          <button class="btn small ghost" type="button" data-game-reset>重来</button>
        </div>
        <div class="game-feedback" id="gameFeedback">点击你认为正确的卡片。</div>
      </div>
    `;
    return;
  }

  if (game.type === "sort") {
    const used = new Set(state.game.sequence);
    board.innerHTML = `
      <div class="game-board">
        <div class="sequence-zone" aria-label="已选择顺序">
          ${state.game.sequence.length ? state.game.sequence.map((id) => {
            const item = game.items.find(([itemId]) => itemId === id);
            return `<button class="pill-btn" type="button" data-sequence-remove="${id}">${escapeHtml(item[1])}</button>`;
          }).join("") : "按顺序点击下方步骤，这里会出现你的排序。"}
        </div>
        <div class="card-list">
          ${game.items.map(([id, text]) => `
            <button class="chip-btn ${used.has(id) ? "is-selected" : ""}" type="button" data-sequence-add="${id}" ${used.has(id) ? "disabled" : ""}>${escapeHtml(text)}</button>
          `).join("")}
        </div>
        <div class="game-actions">
          <button class="btn small primary" type="button" data-game-check>检查顺序</button>
          <button class="btn small ghost" type="button" data-game-reset>重来</button>
        </div>
        <div class="game-feedback" id="gameFeedback">先选第一步，再选下一步。</div>
      </div>
    `;
    return;
  }

  if (game.type === "match") {
    board.innerHTML = `
      <div class="game-board">
        <div class="match-grid">
          <div class="match-column">
            ${game.pairs.map(([left]) => `
              <button class="chip-btn ${state.game.activeLeft === left ? "is-selected" : ""}" type="button" data-match-left="${escapeHtml(left)}">${escapeHtml(left)}</button>
            `).join("")}
          </div>
          <div class="match-column">
            ${state.game.rightOrder.map((right) => `
              <button class="chip-btn" type="button" data-match-right="${escapeHtml(right)}">${escapeHtml(right)}</button>
            `).join("")}
          </div>
        </div>
        <div class="match-pairs">
          ${state.game.matches.length ? state.game.matches.map((pair) => `<span>${escapeHtml(pair[0])} → ${escapeHtml(pair[1])}</span>`).join("") : "先点左边，再点右边，完成配对。"}
        </div>
        <div class="game-actions">
          <button class="btn small primary" type="button" data-game-check>检查配对</button>
          <button class="btn small ghost" type="button" data-game-reset>重来</button>
        </div>
        <div class="game-feedback" id="gameFeedback">每个左侧项目只能配一次。</div>
      </div>
    `;
    return;
  }

  if (game.type === "build") {
    board.innerHTML = `
      <div class="game-board">
        <div class="builder-grid">
          ${game.fields.map(([id, label]) => `
            <label>${escapeHtml(label)}
              <textarea rows="2" data-build-field="${id}" placeholder="写在这里"></textarea>
            </label>
          `).join("")}
        </div>
        <div class="game-actions">
          <button class="btn small primary" type="button" data-game-check>生成作品草稿</button>
          <button class="btn small ghost" type="button" data-game-reset>清空</button>
        </div>
        <div class="game-feedback" id="gameFeedback">${escapeHtml(game.success)}</div>
      </div>
    `;
    return;
  }

  if (game.type === "quiz") {
    board.innerHTML = `
      <div class="game-board">
        <div class="quiz-list">
          ${game.questions.map(([question, answers], index) => `
            <fieldset class="quiz-item">
              <legend>${escapeHtml(question)}</legend>
              ${answers.map((answer, answerIndex) => `
                <label><input type="radio" name="q${index}" value="${answerIndex}"> ${escapeHtml(answer)}</label>
              `).join("")}
            </fieldset>
          `).join("")}
        </div>
        <div class="game-actions">
          <button class="btn small primary" type="button" data-game-check>提交判断</button>
          <button class="btn small ghost" type="button" data-game-reset>重来</button>
        </div>
        <div class="game-feedback" id="gameFeedback">每题选择更安全的做法。</div>
      </div>
    `;
  }
}

function checkGame(course) {
  const game = course.game;
  const feedback = document.querySelector("#gameFeedback");
  if (!feedback) return;

  if (game.type === "pick") {
    const selected = [...state.game.selected].sort();
    const answer = [...game.answers].sort();
    const ok = selected.length === answer.length && selected.every((id, index) => id === answer[index]);
    feedback.className = `game-feedback ${ok ? "good" : "warn"}`;
    feedback.textContent = ok ? "判断正确！你已经抓到本课关键边界。" : "还差一点。想想哪些选项是在帮助思考，哪些是在替代思考。";
    return;
  }

  if (game.type === "sort") {
    const ok = state.game.sequence.length === game.answer.length && state.game.sequence.every((id, index) => id === game.answer[index]);
    feedback.className = `game-feedback ${ok ? "good" : "warn"}`;
    feedback.textContent = ok ? "顺序正确！这个流程可以直接带进课堂。" : "顺序还需要调整。先想“开始前、进行中、完成后”的关系。";
    return;
  }

  if (game.type === "match") {
    const correct = new Map(game.pairs);
    const ok = state.game.matches.length === game.pairs.length && state.game.matches.every(([left, right]) => correct.get(left) === right);
    feedback.className = `game-feedback ${ok ? "good" : "warn"}`;
    feedback.textContent = ok ? "配对成功！概念和场景已经连起来了。" : "有配对不稳。可以先想每个词在真实任务中负责什么。";
    return;
  }

  if (game.type === "build") {
    const values = game.fields.map(([id, label]) => {
      const input = document.querySelector(`[data-build-field="${id}"]`);
      return [label.replace(/[：?？]$/g, ""), input?.value.trim() || ""];
    });
    const filled = values.filter(([, value]) => value.length >= 4).length;
    feedback.className = `game-feedback ${filled === values.length ? "good" : "warn"}`;
    feedback.innerHTML = filled === values.length
      ? `作品草稿已成型：${values.map(([label, value]) => `<br><strong>${escapeHtml(label)}</strong>：${escapeHtml(value)}`).join("")}`
      : `还可以更具体一点。至少把每一栏写成一句完整的话。`;
    return;
  }

  if (game.type === "quiz") {
    let score = 0;
    game.questions.forEach(([, , answerIndex], index) => {
      const checked = document.querySelector(`input[name="q${index}"]:checked`);
      if (checked && Number(checked.value) === answerIndex) score += 1;
    });
    const ok = score === game.questions.length;
    feedback.className = `game-feedback ${ok ? "good" : "warn"}`;
    feedback.textContent = ok ? `满分 ${score}/${game.questions.length}！安全判断很稳。` : `答对 ${score}/${game.questions.length}。记住：遇到隐私、转账、陌生链接，先停下核查。`;
  }
}

function resetGame(course) {
  createGameState(course);
  renderGame(course);
}

function activeCourse() {
  return courses.find((course) => course.id === state.activeCourseId);
}

document.querySelector(".nav-toggle")?.addEventListener("click", (event) => {
  const nav = document.querySelector("#siteNav");
  if (!nav) return;
  const opened = nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(opened));
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    renderCourses();
  });
});

document.querySelector("#lessonSearch")?.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderCourses();
});

document.addEventListener("click", async (event) => {
  const startButton = event.target.closest("[data-start-course]");
  const doneButton = event.target.closest("[data-toggle-done]");
  const slideButton = event.target.closest("[data-slide-action]");
  const slideDot = event.target.closest("[data-slide-dot]");
  const copyButton = event.target.closest("[data-copy-prompt]");
  const pickButton = event.target.closest("[data-pick]");
  const sequenceAdd = event.target.closest("[data-sequence-add]");
  const sequenceRemove = event.target.closest("[data-sequence-remove]");
  const matchLeft = event.target.closest("[data-match-left]");
  const matchRight = event.target.closest("[data-match-right]");
  const checkButton = event.target.closest("[data-game-check]");
  const resetButton = event.target.closest("[data-game-reset]");

  if (startButton) {
    const id = Number(startButton.dataset.startCourse);
    if (pageMode === "home") {
      window.location.href = `course.html?lesson=${id}`;
      return;
    }
    renderClassroom(id);
    return;
  }

  if (doneButton) {
    toggleDone(Number(doneButton.dataset.toggleDone));
    return;
  }

  const course = activeCourse();
  if (!course) return;

  if (slideButton) {
    const action = slideButton.dataset.slideAction;
    if (action === "prev") state.activeSlide = (state.activeSlide - 1 + course.slides.length) % course.slides.length;
    if (action === "next") state.activeSlide = (state.activeSlide + 1) % course.slides.length;
    if (action === "note") {
      document.querySelector("#speakerNote")?.classList.toggle("is-visible");
      return;
    }
    renderSlide(course);
    return;
  }

  if (slideDot) {
    state.activeSlide = Number(slideDot.dataset.slideDot);
    renderSlide(course);
    return;
  }

  if (copyButton) {
    try {
      await navigator.clipboard.writeText(course.prompt);
      showToast("Prompt 模板已复制");
    } catch {
      showToast("浏览器不允许自动复制，可以手动选中文本");
    }
    return;
  }

  if (pickButton) {
    const id = pickButton.dataset.pick;
    if (state.game.selected.has(id)) state.game.selected.delete(id);
    else state.game.selected.add(id);
    renderGame(course);
    return;
  }

  if (sequenceAdd) {
    const id = sequenceAdd.dataset.sequenceAdd;
    if (!state.game.sequence.includes(id)) state.game.sequence.push(id);
    renderGame(course);
    return;
  }

  if (sequenceRemove) {
    state.game.sequence = state.game.sequence.filter((id) => id !== sequenceRemove.dataset.sequenceRemove);
    renderGame(course);
    return;
  }

  if (matchLeft) {
    state.game.activeLeft = matchLeft.dataset.matchLeft;
    renderGame(course);
    return;
  }

  if (matchRight && state.game.activeLeft) {
    const left = state.game.activeLeft;
    const right = matchRight.dataset.matchRight;
    state.game.matches = state.game.matches.filter((pair) => pair[0] !== left && pair[1] !== right);
    state.game.matches.push([left, right]);
    state.game.activeLeft = "";
    renderGame(course);
    return;
  }

  if (checkButton) {
    checkGame(course);
    return;
  }

  if (resetButton) {
    resetGame(course);
  }
});

window.addEventListener("hashchange", () => {
  if (pageMode !== "course") return;
  const match = location.hash.match(/^#lesson-(\d+)$/);
  if (!match) return;
  const id = Number(match[1]);
  if (id !== state.activeCourseId) renderClassroom(id, { updateHash: false });
});

function bootFromHash() {
  const params = new URLSearchParams(location.search);
  if (pageMode !== "course") return;
  const match = location.hash.match(/^#lesson-(\d+)$/);
  if (match) {
    window.setTimeout(() => renderClassroom(Number(match[1]), { updateHash: false }), 150);
    return;
  }
  const lessonParam = params.get("lesson");
  if (lessonParam) {
    window.setTimeout(() => renderClassroom(Number(lessonParam), {
      updateHash: false,
      noScroll: true
    }), 150);
  } else {
    window.setTimeout(() => renderClassroom(1, { updateHash: false, noScroll: true }), 150);
  }
}

setupHero();
setupScrollRescue();
renderCourses();
renderCourseRail();
updateProgress();
bootFromHash();
