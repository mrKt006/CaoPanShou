// 全局变量
let currentQuestion = 0;
let userAnswers = [];
let examStarted = false;
let examFinished = false;
let justSwitchedQuestion = false; // 新增标记，用于跟踪是否刚刚切换了问题

// DOM元素
let startExamBtn, examContainer, questionContainer, prevBtn, nextBtn, submitBtn, resultContainer, progressBar, questionCounter, introSection;

// 初始化DOM元素引用
function initializeDOMElements() {
    startExamBtn = document.getElementById('start-exam');
    examContainer = document.getElementById('exam-container');
    questionContainer = document.getElementById('question-container');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    submitBtn = document.getElementById('submit-exam');
    resultContainer = document.getElementById('result-container');
    progressBar = document.getElementById('progress-bar');
    questionCounter = document.getElementById('question-counter');
    introSection = document.querySelector('.intro-section');
    
    // 确保所有元素都存在
    if (!startExamBtn || !examContainer || !questionContainer || !prevBtn || !nextBtn || 
        !submitBtn || !resultContainer || !progressBar || !questionCounter || !introSection) {
        console.error('DOM元素初始化失败，部分元素未找到');
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化');
    
    // 初始化DOM元素
    initializeDOMElements();
    
    // 初始化用户答案数组
    initializeUserAnswers();
    
    try {
        // 绑定事件监听器
        if (startExamBtn) startExamBtn.addEventListener('click', startExam);
        if (prevBtn) prevBtn.addEventListener('click', goToPreviousQuestion);
        if (nextBtn) nextBtn.addEventListener('click', goToNextQuestion);
        if (submitBtn) submitBtn.addEventListener('click', submitExam);
        
        console.log('事件监听器绑定成功');
    } catch (error) {
        console.error('事件监听器绑定失败:', error);
    }
});

// 初始化用户答案数组
function initializeUserAnswers() {
    console.log('初始化用户答案数组');
    
    try {
        userAnswers = [];
        let totalQuestions = 0;
        
        if (typeof examData === 'undefined') {
            console.error('examData未定义，可能是questions.js未正确加载');
            return;
        }
        
        examData.sections.forEach(section => {
            section.questions.forEach(() => {
                userAnswers.push(null);
                totalQuestions++;
            });
        });
        
        console.log(`初始化了${totalQuestions}道题目的答案数组`);
    } catch (error) {
        console.error('初始化用户答案数组失败:', error);
    }
}

// 开始考试
function startExam() {
    console.log('开始考试');
    
    try {
        examStarted = true;
        if (introSection) {
            introSection.classList.add('hidden');
            console.log('已隐藏介绍部分');
        }
        
        if (examContainer) {
            examContainer.classList.remove('hidden');
            examContainer.style.display = 'block'; // 确保显示
            console.log('已显示考试容器');
        }
        
        currentQuestion = 0;
        justSwitchedQuestion = true; // 标记刚刚切换了问题
        
        // 确保问题容器可见
        if (questionContainer) {
            questionContainer.style.display = 'block';
            console.log('已确保问题容器可见');
        }
        
        displayQuestion(currentQuestion);
        updateProgressBar();
        updateQuestionCounter();
    } catch (error) {
        console.error('开始考试失败:', error);
        alert('开始考试时发生错误，请刷新页面重试');
    }
}

// 确保问题元素可见
function ensureQuestionVisible() {
    try {
        // 检查问题容器是否存在
        if (!questionContainer) {
            console.error('问题容器不存在');
            return;
        }
        
        // 检查问题元素是否存在
        const questionElement = questionContainer.querySelector('.question');
        if (!questionElement) {
            console.error('问题元素不存在');
            return;
        }
        
        // 检查选项列表是否存在
        const optionsList = questionElement.querySelector('.options');
        if (!optionsList) {
            console.error('选项列表不存在');
            return;
        }
        
        // 检查选项数量
        const options = optionsList.querySelectorAll('.option');
        console.log(`当前问题有 ${options.length} 个选项`);
        
        // 确保问题容器可见
        questionContainer.style.display = 'block';
        
        console.log('问题元素检查完成，显示正常');
    } catch (error) {
        console.error('确保问题可见失败:', error);
    }
}

// 显示当前问题
function displayQuestion(index) {
    console.log(`显示第${index + 1}题，对应索引: ${index}`);
    
    try {
        // 获取当前问题信息
        const questionInfo = getQuestionByIndex(index);
        if (!questionInfo) {
            console.error(`获取第${index + 1}题信息失败`);
            return;
        }
        
        const question = questionInfo.question;
        
        // 调试信息：输出当前问题的详细信息
        console.log('当前问题信息:', {
            questionId: question.id,
            questionText: question.question,
            options: question.options.map(opt => opt.id),
            currentQuestionIndex: index
        });
        
        // 清空问题容器
        if (questionContainer) questionContainer.innerHTML = '';
        else {
            console.error('questionContainer不存在');
            return;
        }
        
        // 创建问题元素
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.dataset.questionIndex = index; // 添加索引属性
        questionElement.dataset.questionId = question.id; // 添加ID属性
        
        // 添加问题标题
        const questionTitle = document.createElement('div');
        questionTitle.classList.add('question-title');
        questionTitle.textContent = `${question.id}. ${question.question}`;
        questionElement.appendChild(questionTitle);
        
        // 添加选项
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');
        
        // 确保选项数组存在
        if (!question.options || !Array.isArray(question.options)) {
            console.error(`问题ID=${question.id}的选项不存在或不是数组`);
            return;
        }
        
        question.options.forEach(option => {
            const optionItem = document.createElement('li');
            optionItem.classList.add('option');
            optionItem.dataset.optionId = option.id;
            optionItem.dataset.questionIndex = index; // 添加问题索引属性
            optionItem.textContent = `${option.id}. ${option.text}`;
            
            // 如果该选项已被选中，添加selected类
            if (userAnswers[index] === option.id) {
                optionItem.classList.add('selected');
            }
            
            // 添加选项点击事件
            optionItem.addEventListener('click', function(e) {
                e.preventDefault();
                const questionIndex = parseInt(this.dataset.questionIndex);
                selectOption(questionIndex, option.id);
            });
            
            optionsList.appendChild(optionItem);
        });
        
        questionElement.appendChild(optionsList);
        
        // 添加提示信息区域
        const messageArea = document.createElement('div');
        messageArea.id = 'message-area';
        messageArea.classList.add('message-area');
        questionElement.appendChild(messageArea);
        
        questionContainer.appendChild(questionElement);
        
        // 更新按钮状态
        updateButtonState();
        
        // 确保问题元素可见
        ensureQuestionVisible();
        
        // 设置一个短暂的延时，标记问题已经完全切换
        setTimeout(() => {
            justSwitchedQuestion = false;
        }, 100);
    } catch (error) {
        console.error('显示问题失败:', error);
    }
}

// 显示提示消息
function showMessage(message, isError = false) {
    try {
        const messageArea = document.getElementById('message-area');
        if (messageArea) {
            messageArea.textContent = message;
            messageArea.className = 'message-area';
            if (isError) {
                messageArea.classList.add('error');
            } else {
                messageArea.classList.add('success');
            }
            
            // 3秒后自动清除消息
            setTimeout(() => {
                if (messageArea) {
                    messageArea.textContent = '';
                    messageArea.className = 'message-area';
                }
            }, 3000);
        }
    } catch (error) {
        console.error('显示消息失败:', error);
    }
}

// 选择选项
function selectOption(questionIndex, optionId) {
    console.log(`选择了第${questionIndex + 1}题的选项${optionId}`);
    
    try {
        // 保存答案到用户答案数组
        userAnswers[questionIndex] = optionId;
        console.log(`已保存答案: 问题索引=${questionIndex}, 选项=${optionId}`);
        console.log(`当前用户答案数组:`, userAnswers.map((ans, idx) => `问题${idx+1}: ${ans || '未答'}`).join(', '));
        
        // 更新选项样式
        const options = document.querySelectorAll('.option');
        if (options.length === 0) {
            console.error('未找到任何选项元素');
        }
        
        let selectedFound = false;
        options.forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.optionId === optionId) {
                option.classList.add('selected');
                selectedFound = true;
                console.log(`已将选项 ${optionId} 标记为已选中`);
            }
        });
        
        if (!selectedFound) {
            console.warn(`未找到匹配的选项元素: ${optionId}`);
        }
        
        // 更新提交按钮状态
        updateButtonState();
    } catch (error) {
        console.error('选择选项失败:', error);
    }
}

// 前往上一题
function goToPreviousQuestion() {
    console.log('前往上一题');
    
    try {
        if (currentQuestion > 0) {
            console.log(`当前题目索引: ${currentQuestion}, 将要前往题目索引: ${currentQuestion - 1}`);
            
            // 保存当前题目的答案
            const currentAnswer = userAnswers[currentQuestion];
            console.log(`当前题目的答案: ${currentAnswer}`);
            
            currentQuestion--;
            justSwitchedQuestion = true; // 标记刚刚切换了问题
            
            // 显示题目前确保数据正确
            const questionInfo = getQuestionByIndex(currentQuestion);
            if (questionInfo) {
                console.log(`将要显示的题目ID: ${questionInfo.question.id}`);
            } else {
                console.error(`无法获取题目信息，索引: ${currentQuestion}`);
            }
            
            displayQuestion(currentQuestion);
            updateProgressBar();
            updateQuestionCounter();
        }
    } catch (error) {
        console.error('前往上一题失败:', error);
    }
}

// 前往下一题
function goToNextQuestion() {
    console.log('尝试前往下一题');
    
    try {
        // 检查当前问题是否已回答，但如果刚刚切换到这个问题则不检查
        if (userAnswers[currentQuestion] === null && !justSwitchedQuestion) {
            showMessage('请先回答当前问题再继续！', true);
            return;
        }
        
        if (currentQuestion < userAnswers.length - 1) {
            console.log(`当前题目索引: ${currentQuestion}, 将要前往题目索引: ${currentQuestion + 1}`);
            
            // 保存当前题目的答案
            const currentAnswer = userAnswers[currentQuestion];
            console.log(`当前题目的答案: ${currentAnswer}`);
            
            currentQuestion++;
            justSwitchedQuestion = true; // 标记刚刚切换了问题
            
            // 显示题目前确保数据正确
            const questionInfo = getQuestionByIndex(currentQuestion);
            if (questionInfo) {
                console.log(`将要显示的题目ID: ${questionInfo.question.id}`);
            } else {
                console.error(`无法获取题目信息，索引: ${currentQuestion}`);
            }
            
            displayQuestion(currentQuestion);
            updateProgressBar();
            updateQuestionCounter();
        }
    } catch (error) {
        console.error('前往下一题失败:', error);
    }
}

// 提交考试
function submitExam() {
    console.log('尝试提交考试');
    
    try {
        // 检查是否所有问题都已回答
        const unansweredQuestions = userAnswers.filter(answer => answer === null).length;
        
        if (unansweredQuestions > 0) {
            if (!confirm(`您还有${unansweredQuestions}道题目未回答，确定要提交吗？`)) {
                return;
            }
        }
        
        examFinished = true;
        if (examContainer) examContainer.classList.add('hidden');
        if (resultContainer) resultContainer.classList.remove('hidden');
        
        // 计算得分并显示结果
        displayResults();
    } catch (error) {
        console.error('提交考试失败:', error);
    }
}

// 显示考试结果
function displayResults() {
    console.log('显示考试结果');
    
    try {
        // 计算总分
        let totalScore = 0;
        let sectionScores = {};
        let questionIndex = 0;
        
        examData.sections.forEach(section => {
            let sectionCorrectCount = 0;
            
            section.questions.forEach(question => {
                if (userAnswers[questionIndex] === question.correctAnswer) {
                    sectionCorrectCount++;
                    totalScore += 2.5; // 每题2.5分
                }
                questionIndex++;
            });
            
            // 计算每个部分的得分
            const sectionMaxScore = section.questions.length * 2.5;
            const sectionScore = sectionCorrectCount * 2.5;
            sectionScores[section.title] = {
                score: sectionScore,
                maxScore: sectionMaxScore,
                correctCount: sectionCorrectCount,
                totalQuestions: section.questions.length
            };
        });
        
        // 根据总分确定评估等级
        let evaluationLevel = null;
        for (const standard of examData.evaluationStandards) {
            if (totalScore >= standard.scoreRange[0] && totalScore <= standard.scoreRange[1]) {
                evaluationLevel = standard;
                break;
            }
        }
        
        if (!evaluationLevel) {
            console.error('未找到匹配的评估等级');
            evaluationLevel = {
                level: "未知等级",
                description: "无法确定评估等级"
            };
        }
        
        // 构建结果HTML
        let resultHTML = `
            <h2>考试结果</h2>
            <div class="score">得分：${totalScore.toFixed(1)}/100</div>
            <div class="evaluation">${evaluationLevel.level}</div>
            <div class="evaluation-description">${evaluationLevel.description}</div>
            
            <div class="result-details">
                <h3>各部分得分：</h3>
        `;
        
        // 添加各部分得分
        for (const sectionTitle in sectionScores) {
            const sectionData = sectionScores[sectionTitle];
            resultHTML += `
                <div class="section-result">
                    <div class="section-title">${sectionTitle}</div>
                    <div class="section-score">得分：${sectionData.score.toFixed(1)}/${sectionData.maxScore.toFixed(1)} 
                    (正确率：${Math.round((sectionData.correctCount / sectionData.totalQuestions) * 100)}%)</div>
                </div>
            `;
        }
        
        // 添加重新测试按钮
        resultHTML += `
            <button id="retry-exam" class="btn retry-btn">重新测试</button>
        `;
        
        // 更新结果容器
        if (resultContainer) {
            resultContainer.innerHTML = resultHTML;
            
            // 添加重新测试按钮事件
            const retryBtn = document.getElementById('retry-exam');
            if (retryBtn) {
                retryBtn.addEventListener('click', resetExam);
            }
        } else {
            console.error('resultContainer不存在');
        }
    } catch (error) {
        console.error('显示结果失败:', error);
    }
}

// 重置考试
function resetExam() {
    console.log('重置考试');
    
    try {
        examStarted = false;
        examFinished = false;
        currentQuestion = 0;
        initializeUserAnswers();
        if (resultContainer) resultContainer.classList.add('hidden');
        if (introSection) introSection.classList.remove('hidden');
    } catch (error) {
        console.error('重置考试失败:', error);
    }
}

// 更新进度条
function updateProgressBar() {
    try {
        if (progressBar) {
            const progress = ((currentQuestion + 1) / userAnswers.length) * 100;
            progressBar.style.width = `${progress}%`;
        }
    } catch (error) {
        console.error('更新进度条失败:', error);
    }
}

// 更新问题计数器
function updateQuestionCounter() {
    try {
        if (questionCounter) {
            questionCounter.textContent = `${currentQuestion + 1}/${userAnswers.length}`;
        }
    } catch (error) {
        console.error('更新问题计数器失败:', error);
    }
}

// 更新按钮状态
function updateButtonState() {
    try {
        // 上一题按钮
        if (prevBtn) prevBtn.disabled = currentQuestion === 0;
        
        // 下一题按钮
        if (nextBtn) nextBtn.disabled = currentQuestion === userAnswers.length - 1;
        
        // 提交按钮
        if (submitBtn) {
            if (currentQuestion === userAnswers.length - 1) {
                submitBtn.classList.remove('hidden');
            } else {
                submitBtn.classList.add('hidden');
            }
        }
    } catch (error) {
        console.error('更新按钮状态失败:', error);
    }
}

// 根据索引获取问题信息
function getQuestionByIndex(index) {
    try {
        console.log(`尝试获取索引为 ${index} 的问题`);
        let questionCounter = 0;
        
        if (typeof examData === 'undefined' || !examData.sections) {
            console.error('examData未定义或结构不正确');
            return null;
        }
        
        for (let i = 0; i < examData.sections.length; i++) {
            const section = examData.sections[i];
            
            if (!section.questions || !Array.isArray(section.questions)) {
                console.error(`第${i+1}部分的questions属性不存在或不是数组`);
                continue;
            }
            
            for (let j = 0; j < section.questions.length; j++) {
                if (questionCounter === index) {
                    const question = section.questions[j];
                    console.log(`找到问题: ID=${question.id}, 题目="${question.question.substring(0, 20)}..."`);
                    return {
                        section: section,
                        question: question,
                        sectionIndex: i,
                        questionIndex: j
                    };
                }
                questionCounter++;
            }
        }
        
        console.error(`未找到索引为 ${index} 的问题，总问题数量: ${questionCounter}`);
        return null;
    } catch (error) {
        console.error('获取问题信息失败:', error);
        return null;
    }
} 