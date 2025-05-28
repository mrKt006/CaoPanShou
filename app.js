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
        if (introSection) introSection.classList.add('hidden');
        if (examContainer) examContainer.classList.remove('hidden');
        currentQuestion = 0;
        justSwitchedQuestion = true; // 标记刚刚切换了问题
        displayQuestion(currentQuestion);
        updateProgressBar();
        updateQuestionCounter();
    } catch (error) {
        console.error('开始考试失败:', error);
        alert('开始考试时发生错误，请刷新页面重试');
    }
}

// 显示当前问题
function displayQuestion(index) {
    console.log(`显示第${index + 1}题`);
    
    try {
        // 获取当前问题信息
        const questionInfo = getQuestionByIndex(index);
        if (!questionInfo) {
            console.error(`获取第${index + 1}题信息失败`);
            return;
        }
        
        const question = questionInfo.question;
        
        // 清空问题容器
        if (questionContainer) questionContainer.innerHTML = '';
        else {
            console.error('questionContainer不存在');
            return;
        }
        
        // 创建问题元素
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        // 添加问题标题
        const questionTitle = document.createElement('div');
        questionTitle.classList.add('question-title');
        questionTitle.textContent = `${question.id}. ${question.question}`;
        questionElement.appendChild(questionTitle);
        
        // 添加选项
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');
        
        question.options.forEach(option => {
            const optionItem = document.createElement('li');
            optionItem.classList.add('option');
            optionItem.dataset.optionId = option.id;
            optionItem.textContent = `${option.id}. ${option.text}`;
            
            // 如果该选项已被选中，添加selected类
            if (userAnswers[index] === option.id) {
                optionItem.classList.add('selected');
            }
            
            // 添加选项点击事件
            optionItem.addEventListener('click', function(e) {
                e.preventDefault();
                selectOption(index, option.id);
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
        userAnswers[questionIndex] = optionId;
        
        // 更新选项样式
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.optionId === optionId) {
                option.classList.add('selected');
            }
        });
        
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
            currentQuestion--;
            justSwitchedQuestion = true; // 标记刚刚切换了问题
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
            currentQuestion++;
            justSwitchedQuestion = true; // 标记刚刚切换了问题
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
        let questionCounter = 0;
        
        for (let i = 0; i < examData.sections.length; i++) {
            const section = examData.sections[i];
            
            for (let j = 0; j < section.questions.length; j++) {
                if (questionCounter === index) {
                    return {
                        section: section,
                        question: section.questions[j],
                        sectionIndex: i,
                        questionIndex: j
                    };
                }
                questionCounter++;
            }
        }
        
        return null;
    } catch (error) {
        console.error('获取问题信息失败:', error);
        return null;
    }
} 
