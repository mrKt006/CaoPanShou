// 考试题目数据
const examData = {
    // 考试标题
    title: "操盘手能力评估考试",
    description: "本考试共40题，每题2.5分，满分100分。请根据实际情况选择最符合的答案。",
    
    // 考试部分
    sections: [
        {
            title: "第一部分：平台认知与规则理解",
            description: "8题，20分",
            questions: [
                {
                    id: 1,
                    section: "平台认知与规则理解",
                    question: "同一内容在不同平台表现差异巨大，最可能的原因是：",
                    options: [
                        { id: "A", text: "发布时间存在差异" },
                        { id: "B", text: "账号权重高低不同" },
                        { id: "C", text: "竞争环境激烈程度" },
                        { id: "D", text: "推荐机制本质不同" }
                    ],
                    correctAnswer: "D"
                },
                {
                    id: 2,
                    section: "平台认知与规则理解",
                    question: "以下哪种情况违规风险最高：",
                    options: [
                        { id: "A", text: "美妆博主推荐医用级别产品" },
                        { id: "B", text: "美食博主使用品牌调料制作" },
                        { id: "C", text: "健身博主穿着运动品牌服装" },
                        { id: "D", text: "读书博主展示畅销书籍封面" }
                    ],
                    correctAnswer: "A"
                },
                {
                    id: 3,
                    section: "平台认知与规则理解",
                    question: "抖音爆火内容适配到小红书，最需要调整的是：",
                    options: [
                        { id: "A", text: "视频时长和封面设计优化" },
                        { id: "B", text: "发布时间和话题标签选择" },
                        { id: "C", text: "画质清晰度和音效处理" },
                        { id: "D", text: "表达方式和互动引导重构" }
                    ],
                    correctAnswer: "D"
                },
                {
                    id: 4,
                    section: "平台认知与规则理解",
                    question: "主攻平台算法突然调整，内容曝光大幅下降，你会：",
                    options: [
                        { id: "A", text: "耐心等待算法逐渐稳定" },
                        { id: "B", text: "立即转移到其他平台" },
                        { id: "C", text: "快速测试新算法内容偏好" },
                        { id: "D", text: "大幅增加付费投放预算" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 5,
                    section: "平台认知与规则理解",
                    question: "以下哪个时间段发布效果通常最差：",
                    options: [
                        { id: "A", text: "工作日早上7-9点通勤时间" },
                        { id: "B", text: "工作日中午12-14点午休" },
                        { id: "C", text: "工作日下午15-17点上班" },
                        { id: "D", text: "周末晚上20-22点黄金档" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 6,
                    section: "平台认知与规则理解",
                    question: "新账号发布内容后，平台通常会：",
                    options: [
                        { id: "A", text: "直接推送给全部目标用户" },
                        { id: "B", text: "先进行小范围测试再决定" },
                        { id: "C", text: "根据账号等级分配流量" },
                        { id: "D", text: "按照付费情况优先推荐" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 7,
                    section: "平台认知与规则理解",
                    question: "账号因违规被限流一周，最直接的影响是：",
                    options: [
                        { id: "A", text: "粉丝数量会大幅下降流失" },
                        { id: "B", text: "后续内容推荐量显著减少" },
                        { id: "C", text: "账号权重永久性降低影响" },
                        { id: "D", text: "合作品牌会立即终止合作" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 8,
                    section: "平台认知与规则理解",
                    question: "平台突然禁止某类内容，你的应对策略是：",
                    options: [
                        { id: "A", text: "继续发布但降低频次" },
                        { id: "B", text: "立即停止相关内容发布" },
                        { id: "C", text: "改变表达方式规避政策" },
                        { id: "D", text: "转移到政策宽松平台" }
                    ],
                    correctAnswer: "B"
                }
            ]
        },
        {
            title: "第二部分：内容创作与制作",
            description: "10题，25分",
            questions: [
                {
                    id: 9,
                    section: "内容创作与制作",
                    question: "知识付费课程推广内容，最有效的框架是：",
                    options: [
                        { id: "A", text: "痛点展示→解决方案→课程介绍" },
                        { id: "B", text: "成功案例→方法揭秘→价值包装" },
                        { id: "C", text: "权威背书→内容预览→学员反馈" },
                        { id: "D", text: "行业趋势→个人经历→课程价值" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 10,
                    section: "内容创作与制作",
                    question: "普通生活vlog获得百万播放，最可能的原因是：",
                    options: [
                        { id: "A", text: "拍摄技巧非常专业高超" },
                        { id: "B", text: "踩中特定情绪共鸣热点" },
                        { id: "C", text: "账号粉丝基数足够庞大" },
                        { id: "D", text: "投放推广预算投入到位" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 11,
                    section: "内容创作与制作",
                    question: "情感共鸣类内容的节奏控制核心是：",
                    options: [
                        { id: "A", text: "快节奏持续保持注意力" },
                        { id: "B", text: "慢节奏营造深度情感氛围" },
                        { id: "C", text: "匀速节奏保持观看稳定性" },
                        { id: "D", text: "节奏变化与情感曲线同步" }
                    ],
                    correctAnswer: "D"
                },
                {
                    id: 12,
                    section: "内容创作与制作",
                    question: "画面总是略微抖动，稳定器已校准，最可能原因：",
                    options: [
                        { id: "A", text: "稳定器电量严重不足影响" },
                        { id: "B", text: "手持姿势不当运镜过快" },
                        { id: "C", text: "设备兼容性存在技术问题" },
                        { id: "D", text: "环境风力过大造成干扰" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 13,
                    section: "内容创作与制作",
                    question: "同一IP四种内容类型数据差异很大，你会：",
                    options: [
                        { id: "A", text: "专注表现最好的单一类型" },
                        { id: "B", text: "分析价值优化内容配比" },
                        { id: "C", text: "平均分配各类型制作比例" },
                        { id: "D", text: "跟随平台热点灵活调整" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 14,
                    section: "内容创作与制作",
                    question: "爆款视频后续模仿制作效果平平，最可能原因：",
                    options: [
                        { id: "A", text: "平台算法发生显著变化" },
                        { id: "B", text: "只复制形式未理解逻辑" },
                        { id: "C", text: "用户产生严重审美疲劳" },
                        { id: "D", text: "同类内容竞争加剧激烈" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 15,
                    section: "内容创作与制作",
                    question: "连续高强度产出后质量下降，最应该优化的是：",
                    options: [
                        { id: "A", text: "增加更多专业拍摄设备" },
                        { id: "B", text: "建立模板库和质量机制" },
                        { id: "C", text: "适当延长单条制作时间" },
                        { id: "D", text: "增加人手协助分担工作" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 16,
                    section: "内容创作与制作",
                    question: "IP个人风格与商业转化存在冲突，你会：",
                    options: [
                        { id: "A", text: "坚持商业转化效果优先" },
                        { id: "B", text: "完全尊重IP个人风格" },
                        { id: "C", text: "寻找个人与商业平衡点" },
                        { id: "D", text: "分类型采用不同风格" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 17,
                    section: "内容创作与制作",
                    question: "发现竞对在模仿你的内容风格，你会：",
                    options: [
                        { id: "A", text: "通过法律途径维护权益" },
                        { id: "B", text: "加快内容更新迭代速度" },
                        { id: "C", text: "持续创新建立模仿门槛" },
                        { id: "D", text: "主动改变现有成功风格" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 18,
                    section: "内容创作与制作",
                    question: "多场景多道具复杂视频制作，最大挑战是：",
                    options: [
                        { id: "A", text: "专业设备协调配置问题" },
                        { id: "B", text: "时间管理和突发状况应对" },
                        { id: "C", text: "制作成本控制预算管理" },
                        { id: "D", text: "多人团队沟通协作效率" }
                    ],
                    correctAnswer: "B"
                }
            ]
        },
        {
            title: "第三部分：数据分析与转化优化",
            description: "8题，20分",
            questions: [
                {
                    id: 19,
                    section: "数据分析与转化优化",
                    question: "公域引流到私域，转化率达到多少算正常水平：",
                    options: [
                        { id: "A", text: "转化率达到30-40%属正常" },
                        { id: "B", text: "转化率达到60%左右属正常" },
                        { id: "C", text: "转化率达到80-90%属正常" },
                        { id: "D", text: "转化率越高越好无上限" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 20,
                    section: "数据分析与转化优化",
                    question: "私域用户的正常成交转化率范围是：",
                    options: [
                        { id: "A", text: "私域成交率1-2%属正常" },
                        { id: "B", text: "私域成交率3-5%属正常" },
                        { id: "C", text: "私域成交率8-10%属正常" },
                        { id: "D", text: "私域成交率15%以上正常" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 21,
                    section: "数据分析与转化优化",
                    question: "公转私转化率仅有20%，最需要优化的是：",
                    options: [
                        { id: "A", text: "增加公域内容发布频次" },
                        { id: "B", text: "优化引流话术和福利设计" },
                        { id: "C", text: "提高公域内容制作质量" },
                        { id: "D", text: "扩大公域内容投放预算" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 22,
                    section: "数据分析与转化优化",
                    question: "私域成交率只有1%，最应该检查的是：",
                    options: [
                        { id: "A", text: "私域用户质量和匹配度" },
                        { id: "B", text: "产品定价策略合理性" },
                        { id: "C", text: "销售话术专业程度" },
                        { id: "D", text: "私域运营活跃频次" }
                    ],
                    correctAnswer: "A"
                },
                {
                    id: 23,
                    section: "数据分析与转化优化",
                    question: "视频播放量很高但转化率极低，最需要分析：",
                    options: [
                        { id: "A", text: "播放完成率和评论情感" },
                        { id: "B", text: "流量来源和用户画像匹配" },
                        { id: "C", text: "内容产品关联和转化路径" },
                        { id: "D", text: "以上维度都需要综合分析" }
                    ],
                    correctAnswer: "D"
                },
                {
                    id: 24,
                    section: "数据分析与转化优化",
                    question: "投放1万元获得1000个私域用户，成交50单，客单价200元，ROI是：",
                    options: [
                        { id: "A", text: "ROI为1.0，需要优化投放" },
                        { id: "B", text: "ROI为1.0，效果刚好达标" },
                        { id: "C", text: "ROI为1.0，效果超出预期" },
                        { id: "D", text: "无法判断需要更多数据" }
                    ],
                    correctAnswer: "A"
                },
                {
                    id: 25,
                    section: "数据分析与转化优化",
                    question: "监控账号健康度，最重要的指标组合是：",
                    options: [
                        { id: "A", text: "播放量、点赞数、评论数" },
                        { id: "B", text: "粉丝增长、互动率、完播率" },
                        { id: "C", text: "转发数、收藏数、关注率" },
                        { id: "D", text: "曝光量、点击率、停留时长" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 26,
                    section: "数据分析与转化优化",
                    question: "发现某环节转化率突然下降50%，优先分析：",
                    options: [
                        { id: "A", text: "该环节前后数据变化趋势" },
                        { id: "B", text: "同期竞品数据表现情况" },
                        { id: "C", text: "该环节具体操作流程变化" },
                        { id: "D", text: "用户反馈和行为路径异常" }
                    ],
                    correctAnswer: "C"
                }
            ]
        },
        {
            title: "第四部分：选品与商业化",
            description: "8题，20分",
            questions: [
                {
                    id: 27,
                    section: "选品与商业化",
                    question: "懒人经济趋势下，最符合爆品潜质的是：",
                    options: [
                        { id: "A", text: "高端智能扫地机器人3000+" },
                        { id: "B", text: "一键早餐机300元15分钟" },
                        { id: "C", text: "专业咖啡机功能全面复杂" },
                        { id: "D", text: "智能音响娱乐功能丰富" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 28,
                    section: "选品与商业化",
                    question: "30万粉丝母婴博主，某产品数据好但利润微薄：",
                    options: [
                        { id: "A", text: "放弃产品寻找高利润替代" },
                        { id: "B", text: "分析引流价值和升单可能" },
                        { id: "C", text: "适当降低该产品推广频次" },
                        { id: "D", text: "要求品牌方提高佣金比例" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 29,
                    section: "选品与商业化",
                    question: "设计升单路径时，最容易忽视的环节是：",
                    options: [
                        { id: "A", text: "产品价格梯度合理设计" },
                        { id: "B", text: "用户心理变化和信任建立" },
                        { id: "C", text: "产品功能差异化程度" },
                        { id: "D", text: "库存管理和供应链稳定" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 30,
                    section: "选品与商业化",
                    question: "某类产品季节性强但利润高，你会：",
                    options: [
                        { id: "A", text: "只在销售旺季进行推广" },
                        { id: "B", text: "建立预热爆发收尾策略" },
                        { id: "C", text: "平均分配到全年各时段" },
                        { id: "D", text: "集中在最旺季密集投放" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 31,
                    section: "选品与商业化",
                    question: "健身IP想扩展美食领域，你的建议是：",
                    options: [
                        { id: "A", text: "直接开始美食内容制作" },
                        { id: "B", text: "坚持健身垂直领域深耕" },
                        { id: "C", text: "评估重叠度关联性可行性" },
                        { id: "D", text: "先进行小范围市场测试" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 32,
                    section: "选品与商业化",
                    question: "新品定价，竞品价格区间99-999元，你会：",
                    options: [
                        { id: "A", text: "选择中间价位相对安全" },
                        { id: "B", text: "分析用户价值定位后定价" },
                        { id: "C", text: "选择最低价抢占市场份额" },
                        { id: "D", text: "选择高价突出产品品质" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 33,
                    section: "选品与商业化",
                    question: "行业负面事件影响品类市场信心，你会：",
                    options: [
                        { id: "A", text: "立即停止相关产品推广" },
                        { id: "B", text: "降价促销清理库存产品" },
                        { id: "C", text: "评估影响制定应对策略" },
                        { id: "D", text: "耐心等待市场自然恢复" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 34,
                    section: "选品与商业化",
                    question: "品牌方产品与IP调性不符但坑位费很高：",
                    options: [
                        { id: "A", text: "接受合作调整内容包装" },
                        { id: "B", text: "拒绝合作维护IP长期价值" },
                        { id: "C", text: "评估多维度因素后决策" },
                        { id: "D", text: "让IP根据个人意愿决定" }
                    ],
                    correctAnswer: "C"
                }
            ]
        },
        {
            title: "第五部分：团队管理与项目运营",
            description: "6题，15分",
            questions: [
                {
                    id: 35,
                    section: "团队管理与项目运营",
                    question: "IP连续高强度工作出现倦怠影响质量：",
                    options: [
                        { id: "A", text: "给IP安排充足假期休息" },
                        { id: "B", text: "临时更换其他IP进行替代" },
                        { id: "C", text: "分析根源调整节奏激发热情" },
                        { id: "D", text: "适当降低内容质量要求" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 36,
                    section: "团队管理与项目运营",
                    question: "流量操盘手和运营在内容方向产生分歧：",
                    options: [
                        { id: "A", text: "以客观数据作为判断标准" },
                        { id: "B", text: "以经验丰富者意见为准则" },
                        { id: "C", text: "分析分歧寻找认同解决方案" },
                        { id: "D", text: "管理者直接决定执行方向" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 37,
                    section: "团队管理与项目运营",
                    question: "培训后理论掌握好但实操效果差，你会：",
                    options: [
                        { id: "A", text: "增加理论培训时间投入" },
                        { id: "B", text: "增加实操练习机会频次" },
                        { id: "C", text: "分析转化障碍设计训练" },
                        { id: "D", text: "更换培训方式和培训师" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 38,
                    section: "团队管理与项目运营",
                    question: "核心团队成员突然离职，客户要求不影响交付：",
                    options: [
                        { id: "A", text: "立即招聘合适替代人员" },
                        { id: "B", text: "重新分配现有人员工作" },
                        { id: "C", text: "启动应急预案同时沟通" },
                        { id: "D", text: "主动要求延期交付项目" }
                    ],
                    correctAnswer: "C"
                },
                {
                    id: 39,
                    section: "团队管理与项目运营",
                    question: "客户对交付结果不满威胁终止合作，你会：",
                    options: [
                        { id: "A", text: "立即道歉承诺全面改进" },
                        { id: "B", text: "分析问题制定方案重建信心" },
                        { id: "C", text: "解释客观困难寻求理解" },
                        { id: "D", text: "提前准备相应法律应对" }
                    ],
                    correctAnswer: "B"
                },
                {
                    id: 40,
                    section: "团队管理与项目运营",
                    question: "客户预算有限但需求很高，你会：",
                    options: [
                        { id: "A", text: "直接拒绝合作避免风险" },
                        { id: "B", text: "降低服务标准匹配预算" },
                        { id: "C", text: "设计分阶段方案平衡利益" },
                        { id: "D", text: "建议客户增加预算投入" }
                    ],
                    correctAnswer: "C"
                }
            ]
        }
    ],
    
    // 评分标准
    evaluationStandards: [
        {
            scoreRange: [0, 50],
            level: "普通新媒体运营",
            description: "具备基础的新媒体认知，但缺乏深度的操盘思维和实战经验，适合执行基础的内容发布和数据统计工作"
        },
        {
            scoreRange: [51, 70],
            level: "流量操盘手",
            description: "掌握了内容制作和流量获取的核心技能，能够独立完成账号运营和基础的商业化工作，具备一定的数据分析能力"
        },
        {
            scoreRange: [71, 85],
            level: "IP操盘手",
            description: "具备全面的IP运营能力，能够进行选品策略制定、团队协调管理，具有较强的商业思维和问题解决能力"
        },
        {
            scoreRange: [86, 100],
            level: "项目操盘手",
            description: "具备顶级的战略思维和项目管理能力，能够统筹复杂项目，处理高难度的商务谈判和团队管理，具有前瞻性的市场判断力"
        }
    ]
};

// 导出数据，兼容不同环境
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = examData;
} else {
    window.examData = examData;
    // 直接将处理后的 questions 数组赋给 window.questions
    window.questions = examData.sections.reduce((acc, section) => acc.concat(section.questions), []);
} 