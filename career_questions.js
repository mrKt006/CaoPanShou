const careerQuestions = [
    {
        "id": "career_q1",
        "question": "1. 如果你的月收入突然降低50%，你能坚持多长时间？",
        "options": [
            { "text": "A. 超过12个月", "score": 2 },
            { "text": "B. 6-12个月", "score": 1 },
            { "text": "C. 3-6个月", "score": 0.5 },
            { "text": "D. 不到3个月", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q2",
        "question": "2. 面对收入不稳定的工作，你的态度是：",
        "options": [
            { "text": "A. 完全可以接受，我更看重长期收益", "score": 2 },
            { "text": "B. 可以接受，但希望有基本保障", "score": 1 },
            { "text": "C. 有些担心，但可以尝试", "score": 0.5 },
            { "text": "D. 无法接受，我需要稳定收入", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q3",
        "question": "3. 你目前的储蓄情况是：",
        "options": [
            { "text": "A. 有充足的应急基金(12个月以上生活费)", "score": 2 },
            { "text": "B. 有一定储蓄(6-12个月生活费)", "score": 1 },
            { "text": "C. 储蓄较少(3-6个月生活费)", "score": 0.5 },
            { "text": "D. 基本没有储蓄", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q4",
        "question": "4. 对于投资理财，你的态度是：",
        "options": [
            { "text": "A. 愿意承担高风险获得高回报", "score": 2 },
            { "text": "B. 接受中等风险的投资", "score": 1 },
            { "text": "C. 只做低风险投资", "score": 0.5 },
            { "text": "D. 不愿意承担任何投资风险", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q5",
        "question": "5. 如果一个项目有30%的失败概率但成功后收益很高，你会：",
        "options": [
            { "text": "A. 毫不犹豫地尝试", "score": 2 },
            { "text": "B. 仔细评估后可能尝试", "score": 1 },
            { "text": "C. 很犹豫，可能不会尝试", "score": 0.5 },
            { "text": "D. 绝对不会尝试", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q6",
        "question": "6. 你的家庭经济责任情况是：",
        "options": [
            { "text": "A. 单身或双收入，经济压力小", "score": 2 },
            { "text": "B. 有家庭但不是主要经济来源", "score": 1 },
            { "text": "C. 是家庭重要经济来源之一", "score": 0.5 },
            { "text": "D. 是家庭唯一或主要经济来源", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q7",
        "question": "7. 面对经济不景气，你认为自己的应对能力如何？",
        "options": [
            { "text": "A. 很强，我有多种应对策略", "score": 2 },
            { "text": "B. 较强，我能想办法度过难关", "score": 1 },
            { "text": "C. 一般，需要依靠他人帮助", "score": 0.5 },
            { "text": "D. 较弱，很难独自应对", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q8",
        "question": "8. 你对未来收入的预期是：",
        "options": [
            { "text": "A. 希望有大幅增长，愿意承担风险", "score": 2 },
            { "text": "B. 希望稳步增长", "score": 1 },
            { "text": "C. 希望保持稳定", "score": 0.5 },
            { "text": "D. 只要不减少就满足", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q9",
        "question": "9. 如果需要你垫付项目资金，你的态度是：",
        "options": [
            { "text": "A. 完全可以接受", "score": 2 },
            { "text": "B. 金额不大可以接受", "score": 1 },
            { "text": "C. 很不情愿但可能接受", "score": 0.5 },
            { "text": "D. 绝对不能接受", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q10",
        "question": "10. 你认为自己的心理抗压能力如何？",
        "options": [
            { "text": "A. 很强，能承受各种压力", "score": 2 },
            { "text": "B. 较强，一般压力都能应对", "score": 1 },
            { "text": "C. 一般，需要适应时间", "score": 0.5 },
            { "text": "D. 较弱，容易被压力击垮", "score": 0 }
        ],
        "section": "风险承受能力评估"
    },
    {
        "id": "career_q11",
        "question": "11. 在没有外部监督的情况下，你的工作效率：",
        "options": [
            { "text": "A. 比有监督时更高", "score": 2 },
            { "text": "B. 和有监督时差不多", "score": 1 },
            { "text": "C. 会有所下降", "score": 0.5 },
            { "text": "D. 明显下降", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q12",
        "question": "12. 你制定计划并执行的能力如何？",
        "options": [
            { "text": "A. 总是能严格按计划执行", "score": 2 },
            { "text": "B. 大部分时候能按计划执行", "score": 1 },
            { "text": "C. 有时候会偏离计划", "score": 0.5 },
            { "text": "D. 经常无法按计划执行", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q13",
        "question": "13. 在家工作时，你能抵抗诱惑(如娱乐、休息)的能力：",
        "options": [
            { "text": "A. 很强，完全不受影响", "score": 2 },
            { "text": "B. 较强，偶尔会分心", "score": 1 },
            { "text": "C. 一般，经常需要提醒自己", "score": 0.5 },
            { "text": "D. 较弱，很容易分心", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q14",
        "question": "14. 你设定个人目标的习惯是：",
        "options": [
            { "text": "A. 经常设定明确的短期和长期目标", "score": 2 },
            { "text": "B. 有时会设定目标", "score": 1 },
            { "text": "C. 很少设定明确目标", "score": 0.5 },
            { "text": "D. 从不设定具体目标", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q15",
        "question": "15. 面对枯燥重复的工作，你的表现是：",
        "options": [
            { "text": "A. 能保持高质量完成", "score": 2 },
            { "text": "B. 质量会有所下降但能完成", "score": 1 },
            { "text": "C. 很难保持专注", "score": 0.5 },
            { "text": "D. 无法坚持完成", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q16",
        "question": "16. 你管理个人时间的能力如何？",
        "options": [
            { "text": "A. 非常好，总能高效利用时间", "score": 2 },
            { "text": "B. 较好，大部分时候能合理安排", "score": 1 },
            { "text": "C. 一般，有时会浪费时间", "score": 0.5 },
            { "text": "D. 较差，经常感觉时间不够用", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q17",
        "question": "17. 当没有明确截止日期时，你完成任务的速度：",
        "options": [
            { "text": "A. 和有截止日期时一样快", "score": 2 },
            { "text": "B. 会稍微慢一些", "score": 1 },
            { "text": "C. 明显变慢", "score": 0.5 },
            { "text": "D. 可能会一直拖延", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q18",
        "question": "18. 你对自己工作质量的要求是：",
        "options": [
            { "text": "A. 总是追求完美，标准很高", "score": 2 },
            { "text": "B. 要求较高，力求做好", "score": 1 },
            { "text": "C. 达到基本要求即可", "score": 0.5 },
            { "text": "D. 要求不高，能过关就行", "score": 0 }
        ],
        "section": "自律性和自我管理能力"
    },
    {
        "id": "career_q19",
        "question": "19. 你更喜欢哪种工作环境？",
        "options": [
            { "text": "A. 独立工作，不喜欢被打扰", "score": 2 },
            { "text": "B. 既能独立工作也能团队协作", "score": 1 },
            { "text": "C. 更喜欢团队协作", "score": 0.5 },
            { "text": "D. 必须有同事在身边才能工作", "score": 0 }
        ],
        "section": "社交需求和团队合作"
    },
    {
        "id": "career_q20",
        "question": "20. 长期独自工作对你来说：",
        "options": [
            { "text": "A. 完全没问题，我享受独处", "score": 2 },
            { "text": "B. 可以适应", "score": 1 },
            { "text": "C. 会感到孤独但能忍受", "score": 0.5 },
            { "text": "D. 无法忍受，会很痛苦", "score": 0 }
        ],
        "section": "社交需求和团队合作"
    },
    {
        "id": "career_q21",
        "question": "21. 你获取工作动力的主要来源是：",
        "options": [
            { "text": "A. 内在驱动，自我实现", "score": 2 },
            { "text": "B. 个人成就感", "score": 1 },
            { "text": "C. 团队认可和支持", "score": 0.5 },
            { "text": "D. 外部监督和压力", "score": 0 }
        ],
        "section": "社交需求和团队合作"
    },
    {
        "id": "career_q22",
        "question": "22. 在做重要决策时，你倾向于：",
        "options": [
            { "text": "A. 独自思考决定", "score": 2 },
            { "text": "B. 征求少数人意见后决定", "score": 1 },
            { "text": "C. 需要团队讨论后决定", "score": 0.5 },
            { "text": "D. 希望有上级指导决定", "score": 0 }
        ],
        "section": "社交需求和团队合作"
    },
    {
        "id": "career_q23",
        "question": "23. 你建立客户关系的能力如何？",
        "options": [
            { "text": "A. 很强，能快速建立信任", "score": 2 },
            { "text": "B. 较强，能逐步建立关系", "score": 1 },
            { "text": "C. 一般，需要时间适应", "score": 0.5 },
            { "text": "D. 较弱，不擅长与客户打交道", "score": 0 }
        ],
        "section": "社交需求和团队合作"
    },
    {
        "id": "career_q24",
        "question": "24. 面对冲突和分歧，你的处理方式是：",
        "options": [
            { "text": "A. 直接面对，积极解决", "score": 2 },
            { "text": "B. 冷静分析，寻求解决方案", "score": 1 },
            { "text": "C. 尽量避免，希望他人解决", "score": 0.5 },
            { "text": "D. 感到压力很大，不知如何处理", "score": 0 }
        ],
        "section": "社交需求和团队合作"
    },
    {
        "id": "career_q25",
        "question": "25. 你在所从事领域的专业水平如何？",
        "options": [
            { "text": "A. 行业顶尖，有独特优势", "score": 2 },
            { "text": "B. 专业水平较高，有一定优势", "score": 1 },
            { "text": "C. 专业水平一般", "score": 0.5 },
            { "text": "D. 专业水平较低，需要提升", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q26",
        "question": "26. 你的技能在市场上的稀缺性如何？",
        "options": [
            { "text": "A. 非常稀缺，很少人掌握", "score": 2 },
            { "text": "B. 比较稀缺，有一定门槛", "score": 1 },
            { "text": "C. 一般稀缺，竞争适中", "score": 0.5 },
            { "text": "D. 不稀缺，竞争激烈", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q27",
        "question": "27. 你能否独立完成一个完整的项目？",
        "options": [
            { "text": "A. 完全可以，从头到尾都能搞定", "score": 2 },
            { "text": "B. 大部分可以，少数环节需要协助", "score": 1 },
            { "text": "C. 部分可以，需要较多协助", "score": 0.5 },
            { "text": "D. 不能，需要团队配合", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q28",
        "question": "28. 你学习新技能的速度如何？",
        "options": [
            { "text": "A. 很快，能迅速掌握新技能", "score": 2 },
            { "text": "B. 较快，能在合理时间内学会", "score": 1 },
            { "text": "C. 一般，需要较长时间学习", "score": 0.5 },
            { "text": "D. 较慢，学习新技能很困难", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q29",
        "question": "29. 你跟进行业发展趋势的能力如何？",
        "options": [
            { "text": "A. 总是能提前了解行业动态", "score": 2 },
            { "text": "B. 能及时了解主要发展趋势", "score": 1 },
            { "text": "C. 偶尔关注行业发展", "score": 0.5 },
            { "text": "D. 很少关注行业趋势", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q30",
        "question": "30. 客户对你的技能认可度如何？",
        "options": [
            { "text": "A. 非常高，经常主动找我合作", "score": 2 },
            { "text": "B. 较高，合作过的客户都比较满意", "score": 1 },
            { "text": "C. 一般，客户反馈平平", "score": 0.5 },
            { "text": "D. 较低，客户满意度不高", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q31",
        "question": "31. 你解决复杂问题的能力如何？",
        "options": [
            { "text": "A. 很强，能独立解决各种复杂问题", "score": 2 },
            { "text": "B. 较强，大部分问题都能解决", "score": 1 },
            { "text": "C. 一般，简单问题能解决", "score": 0.5 },
            { "text": "D. 较弱，需要他人帮助解决问题", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q32",
        "question": "32. 你的技能组合情况是：",
        "options": [
            { "text": "A. 多技能组合，能提供综合解决方案", "score": 2 },
            { "text": "B. 主技能+辅助技能的组合", "score": 1 },
            { "text": "C. 主要是单一技能", "score": 0.5 },
            { "text": "D. 技能单一且不够深入", "score": 0 }
        ],
        "section": "专业技能和市场竞争力"
    },
    {
        "id": "career_q33",
        "question": "33. 你主动学习的频率如何？",
        "options": [
            { "text": "A. 每天都会学习新知识", "score": 2 },
            { "text": "B. 每周都会安排学习时间", "score": 1 },
            { "text": "C. 偶尔会主动学习", "score": 0.5 },
            { "text": "D. 很少主动学习", "score": 0 }
        ],
        "section": "学习成长能力"
    },
    {
        "id": "career_q34",
        "question": "34. 面对技术或行业变革，你的适应能力如何？",
        "options": [
            { "text": "A. 很强，能快速适应并利用变革", "score": 2 },
            { "text": "B. 较强，能逐步适应变革", "score": 1 },
            { "text": "C. 一般，需要时间适应", "score": 0.5 },
            { "text": "D. 较弱，很难适应变革", "score": 0 }
        ],
        "section": "学习成长能力"
    },
    {
        "id": "career_q35",
        "question": "35. 你获取学习资源的能力如何？",
        "options": [
            { "text": "A. 很强，总能找到最好的学习资源", "score": 2 },
            { "text": "B. 较强，能找到合适的学习资源", "score": 1 },
            { "text": "C. 一般，依赖他人推荐", "score": 0.5 },
            { "text": "D. 较弱，不知道如何找学习资源", "score": 0 }
        ],
        "section": "学习成长能力"
    },
    {
        "id": "career_q36",
        "question": "36. 你对知识的整合应用能力如何？",
        "options": [
            { "text": "A. 很强，能将所学知识灵活运用", "score": 2 },
            { "text": "B. 较强，能在实践中应用所学", "score": 1 },
            { "text": "C. 一般，有时能应用所学知识", "score": 0.5 },
            { "text": "D. 较弱，学了但不会应用", "score": 0 }
        ],
        "section": "学习成长能力"
    },
    {
        "id": "career_q37",
        "question": "37. 你分享知识和经验的意愿如何？",
        "options": [
            { "text": "A. 很愿意，经常分享并获得认可", "score": 2 },
            { "text": "B. 比较愿意，有时会分享", "score": 1 },
            { "text": "C. 一般，很少主动分享", "score": 0.5 },
            { "text": "D. 不愿意，担心影响竞争力", "score": 0 }
        ],
        "section": "学习成长能力"
    },
    {
        "id": "career_q38",
        "question": "38. 你对市场和客户需求的敏感度如何？",
        "options": [
            { "text": "A. 很高，能准确把握市场机会", "score": 2 },
            { "text": "B. 较高，能理解客户需求", "score": 1 },
            { "text": "C. 一般，有基本的市场意识", "score": 0.5 },
            { "text": "D. 较低，不太关注市场变化", "score": 0 }
        ],
        "section": "商业思维和客户服务"
    },
    {
        "id": "career_q39",
        "question": "39. 你的定价和谈判能力如何？",
        "options": [
            { "text": "A. 很强，能为自己争取到合理价格", "score": 2 },
            { "text": "B. 较强，能进行基本的价格谈判", "score": 1 },
            { "text": "C. 一般，有时会妥协", "score": 0.5 },
            { "text": "D. 较弱，经常被压价", "score": 0 }
        ],
        "section": "商业思维和客户服务"
    },
    {
        "id": "career_q40",
        "question": "40. 你处理客户投诉和问题的能力如何？",
        "options": [
            { "text": "A. 很强，总能让客户满意", "score": 2 },
            { "text": "B. 较强，大部分情况能解决", "score": 1 },
            { "text": "C. 一般，有时处理不好", "score": 0.5 },
            { "text": "D. 较弱，不知道如何处理", "score": 0 }
        ],
        "section": "商业思维和客户服务"
    },
    {
        "id": "career_q41",
        "question": "41. 你的服务意识如何？",
        "options": [
            { "text": "A. 很强，总是超出客户期望", "score": 2 },
            { "text": "B. 较强，能满足客户需求", "score": 1 },
            { "text": "C. 一般，按要求完成任务", "score": 0.5 },
            { "text": "D. 较弱，只关注技术不关注服务", "score": 0 }
        ],
        "section": "商业思维和客户服务"
    },
    {
        "id": "career_q42",
        "question": "42. 你开发新客户的能力如何？",
        "options": [
            { "text": "A. 很强，能持续获得新客户", "score": 2 },
            { "text": "B. 较强，偶尔能获得新客户", "score": 1 },
            { "text": "C. 一般，主要靠老客户介绍", "score": 0.5 },
            { "text": "D. 较弱，不知道如何开发客户", "score": 0 }
        ],
        "section": "商业思维和客户服务"
    },
    {
        "id": "career_q43",
        "question": "43. 你的个人品牌建设意识如何？",
        "options": [
            { "text": "A. 很强，积极建设个人品牌", "score": 2 },
            { "text": "B. 较强，有一定的品牌意识", "score": 1 },
            { "text": "C. 一般，偶尔会关注", "score": 0.5 },
            { "text": "D. 较弱，从未考虑过", "score": 0 }
        ],
        "section": "商业思维和客户服务"
    },
    {
        "id": "career_q44",
        "question": "44. 你的财务规划能力如何？",
        "options": [
            { "text": "A. 很强，有详细的财务规划", "score": 2 },
            { "text": "B. 较强，有基本的财务规划", "score": 1 },
            { "text": "C. 一般，偶尔会做规划", "score": 0.5 },
            { "text": "D. 较弱，从不做财务规划", "score": 0 }
        ],
        "section": "财务管理和规划能力"
    },
    {
        "id": "career_q45",
        "question": "45. 你对税务和法律事务的了解程度如何？",
        "options": [
            { "text": "A. 很了解，能独立处理", "score": 2 },
            { "text": "B. 基本了解，能处理简单事务", "score": 1 },
            { "text": "C. 了解一些，复杂事务需要咨询", "score": 0.5 },
            { "text": "D. 不了解，完全不知道如何处理", "score": 0 }
        ],
        "section": "财务管理和规划能力"
    },
    {
        "id": "career_q46",
        "question": "46. 你控制成本和提高效率的能力如何？",
        "options": [
            { "text": "A. 很强，总能找到优化方案", "score": 2 },
            { "text": "B. 较强，能进行基本的成本控制", "score": 1 },
            { "text": "C. 一般，有成本意识但执行不够", "score": 0.5 },
            { "text": "D. 较弱，没有成本控制概念", "score": 0 }
        ],
        "section": "财务管理和规划能力"
    },
    {
        "id": "career_q47",
        "question": "47. 你对投资和理财的了解程度如何？",
        "options": [
            { "text": "A. 很了解，有成功的投资经验", "score": 2 },
            { "text": "B. 基本了解，会做简单投资", "score": 1 },
            { "text": "C. 了解一些，但不敢轻易投资", "score": 0.5 },
            { "text": "D. 不了解，从不投资", "score": 0 }
        ],
        "section": "财务管理和规划能力"
    },
    {
        "id": "career_q48",
        "question": "48. 你的职业发展目标是：",
        "options": [
            { "text": "A. 成为行业专家，建立个人品牌", "score": 2 },
            { "text": "B. 创建自己的事业，实现财务自由", "score": 1.5 },
            { "text": "C. 在大公司获得高级职位", "score": 1 },
            { "text": "D. 有稳定工作和收入就满足", "score": 0.5 }
        ],
        "section": "职业发展目标"
    },
    {
        "id": "career_q49",
        "question": "49. 你希望在工作中获得的最重要的东西是：",
        "options": [
            { "text": "A. 自由和成就感", "score": 2 },
            { "text": "B. 高收入和成长机会", "score": 1.5 },
            { "text": "C. 稳定和保障", "score": 1 },
            { "text": "D. 轻松和平衡", "score": 0.5 }
        ],
        "section": "职业发展目标"
    },
    {
        "id": "career_q50",
        "question": "50. 你对未来5-10年的规划是：",
        "options": [
            { "text": "A. 成为独立的专业人士或创业者", "score": 2 },
            { "text": "B. 在某个领域建立专业声誉", "score": 1.5 },
            { "text": "C. 在公司内获得晋升", "score": 1 },
            { "text": "D. 维持现状，稳定发展", "score": 0.5 }
        ],
        "section": "职业发展目标"
    }
];

const careerTestConfig = {
    title: "职业发展方式适配性测试",
    description: "本测试共50道题，每题最高2分，满分100分。请根据自己的真实情况选择最符合的答案。",
    questions: careerQuestions,
    totalQuestions: 50,
    maxScorePerQuestion: 2, // Not strictly true for all, but used for general progress
    totalMaxScore: 100,
    sections: [
        { name: "风险承受能力评估", count: 10, maxScore: 20, threshold: 12 },
        { name: "自律性和自我管理能力", count: 8, maxScore: 16, threshold: 10 },
        { name: "社交需求和团队合作", count: 6, maxScore: 12, threshold: 7 },
        { name: "专业技能和市场竞争力", count: 8, maxScore: 16, threshold: 10 },
        { name: "学习成长能力", count: 5, maxScore: 10, threshold: 6 },
        { name: "商业思维和客户服务", count: 6, maxScore: 12, threshold: 7 },
        { name: "财务管理和规划能力", count: 4, maxScore: 8, threshold: 5 },
        { name: "职业发展目标", count: 3, maxScore: 6, threshold: 4 }
    ],
    resultEvaluations: [
        {
            minScore: 85,
            maxScore: 100,
            evaluation: "高度适合接单单干",
            characteristics: [
                "风险承受能力强，有充足的财务准备",
                "自律性和自我管理能力出色",
                "专业技能突出，市场竞争力强",
                "商业思维敏锐，客户服务意识强",
                "学习能力强，适应性好"
            ],
            suggestions: [
                "你具备了独立接单的所有核心能力",
                "可以考虑逐步转向全职自由职业",
                "重点关注个人品牌建设和客户关系维护",
                "建立完善的财务管理和风险控制体系"
            ]
        },
        {
            minScore: 70,
            maxScore: 84,
            evaluation: "适合合伙人模式",
            characteristics: [
                "有一定的风险承受能力，但希望有基础保障",
                "专业能力强，但可能在某些方面需要补强",
                "有团队合作精神，能承担一定管理责任",
                "商业思维较好，但可能缺乏独立运营经验"
            ],
            suggestions: [
                "寻找合适的合伙机会，与他人共同创业",
                "在合伙过程中补强自己的短板",
                "积累管理和运营经验",
                "为将来可能的独立发展做准备"
            ]
        },
        {
            minScore: 50,
            maxScore: 69,
            evaluation: "适合高级打工",
            characteristics: [
                "专业能力较强，但风险承受能力有限",
                "更适合在组织框架内发挥专业优势",
                "需要一定的指导和支持",
                "希望有稳定的收入和保障"
            ],
            suggestions: [
                "在现有岗位上继续深耕，争取晋升机会",
                "可以考虑兼职接一些小项目，积累经验",
                "重点提升自己的短板能力",
                "为将来的转型做准备"
            ]
        },
        {
            minScore: 30,
            maxScore: 49,
            evaluation: "建议继续积累经验",
            characteristics: [
                "专业能力或软技能还需要提升",
                "风险承受能力较弱",
                "需要更多的学习和实践机会",
                "适合在稳定环境中成长"
            ],
            suggestions: [
                "专注于技能提升和经验积累",
                "寻找导师或培训机会",
                "在当前岗位上争取更多挑战性工作",
                "制定明确的能力提升计划"
            ]
        },
        {
            minScore: 0,
            maxScore: 29,
            evaluation: "建议稳定发展",
            characteristics: [
                "目前更适合稳定的工作环境",
                "需要系统性的能力建设",
                "风险承受能力很低",
                "更注重工作生活平衡"
            ],
            suggestions: [
                "选择稳定的工作岗位",
                "制定长期的能力发展计划",
                "重点提升基础技能和软技能",
                "可以考虑在稳定的基础上逐步尝试新挑战"
            ]
        }
    ]
};

// 确保在浏览器环境中将数据挂载到 window 对象
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { careerQuestions, careerTestConfig };
} else {
    window.careerQuestions = careerQuestions;
    window.careerTestConfig = careerTestConfig;
} 