document.addEventListener('DOMContentLoaded', () => {
    // 首先检查问题数据是否正确加载
    console.log('检查数据加载情况：');
    console.log('window.questions:', window.questions);
    console.log('window.careerQuestions:', window.careerQuestions);
    console.log('window.careerTestConfig:', window.careerTestConfig);

    const startPage = document.getElementById('start-page');
    const quizPage = document.getElementById('quiz-page');
    const resultPage = document.getElementById('result-page');
    const startExamBtn = document.getElementById('start-exam-btn');
    const questionContainer = document.getElementById('question-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitExamBtn = document.getElementById('submit-exam');
    const restartExamBtn = document.getElementById('restart-exam');
    const progressBar = document.getElementById('progress-bar');
    const questionCounter = document.getElementById('question-counter');
    const resultSummary = document.getElementById('result-summary');
    const assessmentChartCanvas = document.getElementById('assessment-chart');
    const testSelectionGroup = document.getElementById('test-selection-group');
    const testSelectBtns = document.querySelectorAll('.test-select-btn');
    const careerAssessmentResultsDiv = document.getElementById('career-assessment-results');
    const careerTotalScoreEvaluationP = document.getElementById('career-total-score-evaluation');
    const careerDimensionAnalysisUl = document.getElementById('career-dimension-analysis');
    const examContainer = document.getElementById('exam-container');
    const closeExamBtn = document.getElementById('close-exam');

    // 检查 DOM 元素是否正确获取
    console.log('检查 DOM 元素：');
    console.log('startExamBtn:', startExamBtn);
    console.log('questionContainer:', questionContainer);
    console.log('examContainer:', examContainer);

    let currentQuestionIndex = 0;
    let userAnswers = [];
    let currentTestType = 'trader-assessment';
    let currentQuestions = [];
    let currentTestConfig = {};
    let assessmentChart = null;

    const traderTestConfig = {
        title: "操盘手能力评估",
        description: "本考试共40题，每题2.5分，满分100分。请根据实际情况选择最符合的答案。",
        questions: window.questions,
        totalQuestions: 40,
        scorePerQuestion: 2.5,
        maxScorePerCategory: {
            '平台认知与规则理解': 20,
            '内容创作与制作': 25,
            '数据分析与转化优化': 20,
            '选品与商业化': 20,
            '团队管理与项目运营': 15
        }
    };

    testSelectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            testSelectBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTestType = btn.dataset.value;
            console.log('切换测试类型为:', currentTestType);
        });
    });

    startExamBtn.addEventListener('click', startExam);
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitExamBtn.addEventListener('click', submitExam);
    restartExamBtn.addEventListener('click', restartExam);
    closeExamBtn.addEventListener('click', () => {
        if (confirm('确定要退出当前测试吗？您的答题进度将不会被保存。')) {
            // 重置所有状态
            currentQuestionIndex = 0;
            userAnswers = [];
            currentQuestions = [];
            currentTestConfig = {};

            // 重置界面显示
            quizPage.style.display = 'none';
            startPage.style.display = 'block';
            progressBar.style.width = '0%';
            questionContainer.innerHTML = '';
            
            // 重置测试选择按钮状态
            testSelectBtns.forEach(btn => btn.classList.remove('active'));
            if (testSelectBtns.length > 0) {
                testSelectBtns[0].classList.add('active');
                currentTestType = testSelectBtns[0].dataset.value;
            }
        }
    });

    function startExam() {
        console.log('开始考试函数被调用');
        if (!currentTestType) {
            const firstActiveButton = testSelectionGroup.querySelector('.test-select-btn.active');
            if (firstActiveButton) {
                currentTestType = firstActiveButton.dataset.value;
            } else {
                alert('请选择一个测试类型!');
                return;
            }
        }

        console.log('当前测试类型:', currentTestType);

        if (currentTestType === 'trader-assessment') {
            currentQuestions = traderTestConfig.questions;
            currentTestConfig = traderTestConfig;
            console.log('加载操盘手测试题目:', currentQuestions);
        } else if (currentTestType === 'career-assessment') {
            currentQuestions = window.careerQuestions;
            currentTestConfig = window.careerTestConfig;
            console.log('加载职业发展测试题目:', currentQuestions);
        } else {
            console.error('未知的测试类型:', currentTestType);
            return;
        }
        
        if (!currentQuestions || currentQuestions.length === 0) {
            console.error('当前测试类型的问题未能加载:', currentTestType, currentQuestions);
            alert('选择的测试题目未能加载，请检查 questions.js 或 career_questions.js 是否正确引入并包含数据。');
            return;
        }

        // 初始化答题状态
        currentQuestionIndex = 0;
        userAnswers = new Array(currentQuestions.length).fill(null);

        // 切换显示状态
        startPage.style.display = 'none';
        quizPage.style.display = 'block';
        resultPage.style.display = 'none';
        examContainer.classList.remove('hidden');

        console.log('准备显示第一题');
        // 显示第一题
        displayQuestion();
        updateNavigationButtons();
        updateProgressBar();
        updateQuestionCounter();
    }

    function displayQuestion() {
        console.log('显示问题函数被调用');
        console.log('当前问题索引:', currentQuestionIndex);
        console.log('当前问题数据:', currentQuestions[currentQuestionIndex]);

        if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuestions.length) {
            console.error("问题索引越界！", currentQuestionIndex, "总题目数:", currentQuestions.length);
            return;
        }

        const questionData = currentQuestions[currentQuestionIndex];
        if (!questionData) {
            console.error("无法获取问题数据");
            return;
        }

        questionContainer.innerHTML = '';

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<p>${questionData.question}</p>`;

        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';

        questionData.options.forEach((option, index) => {
            const optionId = `q${currentQuestionIndex}_option${index}`;
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${currentQuestionIndex}`;
            input.id = optionId;
            if (currentTestType === 'career-assessment') {
                input.value = option.score;
                input.dataset.score = option.score;
            } else {
                input.value = option.id;
            }
            input.dataset.section = questionData.section;

            if (userAnswers[currentQuestionIndex] !== null) {
                if (currentTestType === 'career-assessment') {
                    if (parseFloat(input.value) === userAnswers[currentQuestionIndex]) {
                        input.checked = true;
                    }
                } else {
                    if (input.value === userAnswers[currentQuestionIndex]) {
                        input.checked = true;
                    }
                }
            }

            const label = document.createElement('label');
            label.htmlFor = optionId;
            label.textContent = option.text;

            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            optionsElement.appendChild(optionDiv);

            input.addEventListener('change', () => {
                if (currentTestType === 'career-assessment') {
                    userAnswers[currentQuestionIndex] = parseFloat(input.value);
                } else {
                    userAnswers[currentQuestionIndex] = input.value;
                }
                updateNavigationButtons();
            });
        });

        questionElement.appendChild(optionsElement);
        questionContainer.appendChild(questionElement);
        
        // 确保每次显示新题目时都更新这些状态
        updateProgressBar();
        updateQuestionCounter();
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        
        // 最后一题且已选择答案时，显示提交按钮而不是下一题按钮
        if (currentQuestionIndex === currentQuestions.length - 1) {
            if (userAnswers[currentQuestionIndex] !== null) {
                nextBtn.style.display = 'none';
                submitExamBtn.classList.remove('hidden');
            } else {
                nextBtn.style.display = 'inline-block';
                submitExamBtn.classList.add('hidden');
            }
        } else {
            nextBtn.style.display = 'inline-block';
            submitExamBtn.classList.add('hidden');
        }
        
        nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
    }

    function goToNextQuestion() {
        if (userAnswers[currentQuestionIndex] === null) {
            alert('请选择一个答案！');
            return;
        }
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
            updateNavigationButtons();
            updateProgressBar();
            updateQuestionCounter();
        }
    }

    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
            updateNavigationButtons();
            updateProgressBar();
            updateQuestionCounter();
        }
    }

    function updateProgressBar() {
        if (!currentQuestions || currentQuestions.length === 0) {
            progressBar.style.width = '0%';
            return;
        }
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function updateQuestionCounter() {
        if (!currentQuestions || currentQuestions.length === 0) {
            questionCounter.textContent = '0/0';
            return;
        }
        const totalQuestions = currentQuestions.length;
        const currentNumber = currentQuestionIndex + 1;
        questionCounter.textContent = `${currentNumber}/${totalQuestions}`;
    }

    function submitExam() {
        if (currentQuestionIndex !== currentQuestions.length - 1 || userAnswers[currentQuestionIndex] === null) {
            alert('请先完成所有题目！');
            return;
        }

        quizPage.style.display = 'none';
        resultPage.style.display = 'block';

        if (currentTestType === 'trader-assessment') {
            calculateAndDisplayTraderResults();
        } else if (currentTestType === 'career-assessment') {
            calculateAndDisplayCareerResults();
        }
    }
    
    function calculateAndDisplayTraderResults() {
        const scores = {};
        for (const sectionName in traderTestConfig.maxScorePerCategory) {
            scores[sectionName] = 0;
        }

        let totalScore = 0;
        const scorePerQuestion = traderTestConfig.scorePerQuestion;

        userAnswers.forEach((answer, index) => {
            const question = currentQuestions[index];
            if (answer !== null && question) {
                if (answer === question.correctAnswer) {
                    scores[question.section] += scorePerQuestion;
                    totalScore += scorePerQuestion;
                }
            }
        });

        const percentages = {};
        for (const section in scores) {
            if (traderTestConfig.maxScorePerCategory[section]) {
                percentages[section] = (scores[section] / traderTestConfig.maxScorePerCategory[section]) * 100;
            } else {
                percentages[section] = 0;
            }
        }

        // 获取评估等级
        let evaluation = "";
        let description = "";
        if (examData.evaluationStandards) {
            const result = examData.evaluationStandards.find(
                standard => totalScore >= standard.scoreRange[0] && totalScore <= standard.scoreRange[1]
            );
            if (result) {
                evaluation = result.level;
                description = result.description;
            }
        }

        // 显示总分和评估结果
        resultSummary.innerHTML = `
            <h2 style="font-size: 28px; margin-bottom: 20px;">得分：${totalScore.toFixed(1)}/100</h2>
            <h3 style="color: #2ecc71; font-size: 24px; margin-bottom: 15px;">${evaluation}</h3>
            <p style="color: #666; margin-bottom: 30px;">${description}</p>
            <h3>各部分得分：</h3>
            <ul style="list-style: none; padding: 0;">
                ${Object.entries(scores).map(([section, score]) => {
                    const maxScore = traderTestConfig.maxScorePerCategory[section];
                    const percentage = ((score / maxScore) * 100).toFixed(0);
                    return `
                        <li style="margin-bottom: 15px;">
                            <div>${section}</div>
                            <div>得分：${score.toFixed(1)}/${maxScore.toFixed(1)} (正确率：${percentage}%)</div>
                        </li>
                    `;
                }).join('')}
            </ul>
        `;

        // 确保图表显示
        assessmentChartCanvas.style.display = 'none';  // 隐藏雷达图
        careerAssessmentResultsDiv.style.display = 'none';
    }

    function calculateAndDisplayCareerResults() {
        let totalScore = 0;
        const sectionScores = {};

        currentTestConfig.sections.forEach(sec => {
            sectionScores[sec.name] = { score: 0, maxScore: sec.maxScore, threshold: sec.threshold };
        });

        userAnswers.forEach((answerScore, index) => {
            if (answerScore !== null && !isNaN(parseFloat(answerScore))) {
                totalScore += parseFloat(answerScore);
                const question = currentQuestions[index];
                if (question && question.section && sectionScores[question.section]) {
                    sectionScores[question.section].score += parseFloat(answerScore);
                }
            }
        });
        
        let evaluationResult = currentTestConfig.resultEvaluations.find(res => totalScore >= res.minScore && totalScore <= res.maxScore);

        // 显示总分和评估结果
        resultSummary.innerHTML = `
            <h2 style="font-size: 28px; margin-bottom: 20px;">得分：${totalScore.toFixed(1)}/${currentTestConfig.totalMaxScore}</h2>
            ${evaluationResult ? `
                <h3 style="color: #2ecc71; font-size: 24px; margin-bottom: 15px;">${evaluationResult.evaluation}</h3>
                ${evaluationResult.characteristics ? `
                    <div style="margin-bottom: 20px; text-align: left;">
                        <h4 style="color: #333; margin-bottom: 10px;">核心特征：</h4>
                        <ul style="list-style: disc; padding-left: 20px; color: #666;">
                            ${evaluationResult.characteristics.map(c => `<li style="margin-bottom: 8px;">${c}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${evaluationResult.suggestions ? `
                    <div style="margin-bottom: 30px; text-align: left;">
                        <h4 style="color: #333; margin-bottom: 10px;">建议：</h4>
                        <ul style="list-style: disc; padding-left: 20px; color: #666;">
                            ${evaluationResult.suggestions.map(s => `<li style="margin-bottom: 8px;">${s}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            ` : '<p style="color: #666;">无法获取评估结果。</p>'}
            
            <h3 style="color: #333; margin-bottom: 15px; text-align: left;">各能力维度分析：</h3>
            <ul style="list-style: none; padding: 0; margin: 0; text-align: left;">
                ${Object.entries(sectionScores).map(([sectionName, data]) => {
                    const percentage = ((data.score / data.maxScore) * 100).toFixed(0);
                    const isLowScore = data.score < data.threshold;
                    return `
                        <li style="margin-bottom: 15px; padding: 10px; border-bottom: 1px solid #eee;">
                            <div style="font-weight: bold; color: #333; margin-bottom: 5px;">${sectionName}</div>
                            <div style="color: ${isLowScore ? '#ff4757' : '#666'};">
                                得分：${data.score.toFixed(1)}/${data.maxScore} (达成率：${percentage}%)
                                ${isLowScore ? `<span style="color: #ff4757;"> (低于阈值 ${data.threshold}分，建议提升)</span>` : ''}
                            </div>
                        </li>
                    `;
                }).join('')}
            </ul>
            <p style="color: #666; margin-top: 30px; font-style: italic;">
                <strong>注意：</strong>这个测试结果仅供参考，实际的职业选择还需要结合具体的行业环境、个人情况和市场机会来综合考虑。建议定期重新评估，因为个人能力和环境都在不断变化。
            </p>
        `;

        // 隐藏雷达图，显示职业评估结果
        assessmentChartCanvas.style.display = 'none';
        careerAssessmentResultsDiv.style.display = 'none';
    }

    function displayChart(percentages) {
        if (assessmentChart) {
            assessmentChart.destroy();
        }
        const ctx = assessmentChartCanvas.getContext('2d');
        assessmentChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(percentages),
                datasets: [{
                    label: '能力评估 (%)',
                    data: Object.values(percentages),
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            },
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: { display: false },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        pointLabels: {
                           font: {
                               size: 14 
                           }
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 16
                            }
                        }
                    }
                }
            }
        });
    }

    function restartExam() {
        currentQuestionIndex = 0;
        userAnswers = [];
        testSelectBtns.forEach(btn => btn.classList.remove('active'));
        if(testSelectBtns.length > 0) {
            testSelectBtns[0].classList.add('active');
            currentTestType = testSelectBtns[0].dataset.value;
        }
        
        currentQuestions = [];
        currentTestConfig = {};

        if (assessmentChart) {
            assessmentChart.destroy();
            assessmentChart = null;
        }

        startPage.style.display = 'block';
        quizPage.style.display = 'none';
        resultPage.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        submitExamBtn.classList.add('hidden');
        assessmentChartCanvas.style.display = 'block';
        careerAssessmentResultsDiv.style.display = 'none';
        examContainer.classList.add('hidden');
    }
});
