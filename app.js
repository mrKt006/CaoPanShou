// 全局变量
let currentQuestion = 0;
let userAnswers = [];
let examStarted = false;
let examFinished = false;

// DOM元素
const startExamBtn = document.getElementById('start-exam');
const examContainer = document.getElementById('exam-container');
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-exam');
const resultContainer = document.getElementById('result-container');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const introSection = document.querySelector('.intro-section');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化用户答案数组
    initializeUserAnswers();
    
    // 绑定事件监听器
    startExamBtn.addEventListener('click', startExam);
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', submitExam);
});

// 初始化用户答案数组
function initializeUserAnswers() {
    userAnswers = [];
    let totalQuestions = 0;
    
    examData.sections.forEach(section => {
        section.questions.forEach(() => {
            userAnswers.push(null);
            totalQuestions++;
        });
    });
}

// 开始考试
function startExam() {
    examStarted = true;
    introSection.classList.add('hidden');
    examContainer.classList.remove('hidden');
    currentQuestion = 0;
    displayQuestion(currentQuestion);
    updateProgressBar();
    updateQuestionCounter();
}

// 显示当前问题
function displayQuestion(index) {
    // 获取当前问题信息
    const questionInfo = getQuestionByIndex(index);
    const question = questionInfo.question;
    
    // 清空问题容器
    questionContainer.innerHTML = '';
    
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
        optionItem.addEventListener('click', function() {
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
}

// 显示提示消息
function showMessage(message, isError = false) {
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
            messageArea.textContent = '';
            messageArea.className = 'message-area';
        }, 3000);
    }
}

// 选择选项
function selectOption(questionIndex, optionId) {
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
}

// 前往上一题
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
        updateProgressBar();
        updateQuestionCounter();
    }
}

// 前往下一题
function goToNextQuestion() {
    // 检查当前问题是否已回答
    if (userAnswers[currentQuestion] === null) {
        showMessage('请先回答当前问题再继续！', true);
        return;
    }
    
    if (currentQuestion < userAnswers.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
        updateProgressBar();
        updateQuestionCounter();
    }
}

// 提交考试
function submitExam() {
    // 检查是否所有问题都已回答
    const unansweredQuestions = userAnswers.filter(answer => answer === null).length;
    
    if (unansweredQuestions > 0) {
        if (!confirm(`您还有${unansweredQuestions}道题目未回答，确定要提交吗？`)) {
            return;
        }
    }
    
    examFinished = true;
    examContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    // 计算得分并显示结果
    displayResults();
}

// 显示考试结果
function displayResults() {
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
    resultContainer.innerHTML = resultHTML;
    
    // 添加重新测试按钮事件
    document.getElementById('retry-exam').addEventListener('click', function() {
        resetExam();
    });
}

// 重置考试
function resetExam() {
    examStarted = false;
    examFinished = false;
    currentQuestion = 0;
    initializeUserAnswers();
    resultContainer.classList.add('hidden');
    introSection.classList.remove('hidden');
}

// 更新进度条
function updateProgressBar() {
    const progress = ((currentQuestion + 1) / userAnswers.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// 更新问题计数器
function updateQuestionCounter() {
    questionCounter.textContent = `${currentQuestion + 1}/${userAnswers.length}`;
}

// 更新按钮状态
function updateButtonState() {
    // 上一题按钮
    prevBtn.disabled = currentQuestion === 0;
    
    // 下一题按钮
    nextBtn.disabled = currentQuestion === userAnswers.length - 1;
    
    // 提交按钮
    if (currentQuestion === userAnswers.length - 1) {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }
}

// 根据索引获取问题信息
function getQuestionByIndex(index) {
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
} 