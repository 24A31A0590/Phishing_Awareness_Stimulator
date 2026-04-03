const questions = [
    {
        question: "You receive an email asking for your bank password. What should you do?",
        options: ["Reply with password","Ignore or report the email","Click the link and login","Forward to friends"],
        answer: 1,
        explanation: "Legitimate organizations never ask for passwords via email. This is a phishing attempt."
    },
    {
        question: "Which of these is a sign of phishing?",
        options: ["Proper grammar","Official domain email","Urgent message asking for personal info","Secure HTTPS website"],
        answer: 2,
        explanation: "Phishing emails often create urgency to trick users into sharing sensitive data."
    },
    {
        question: "What should you check in a suspicious email?",
        options: ["Sender email address","Spelling mistakes","Links before clicking","All of the above"],
        answer: 3,
        explanation: "All these checks help identify phishing emails."
    },
    {
        question: "What does HTTPS indicate?",
        options: ["Website is fake","Secure connection","Virus present","Slow website"],
        answer: 1,
        explanation: "HTTPS means the connection is encrypted, but still verify the website."
    },
    {
        question: "If a link looks suspicious, what should you do?",
        options: ["Click it quickly","Ignore it","Hover to preview URL","Share it"],
        answer: 2,
        explanation: "Hovering shows the real URL before clicking."
    },
    {
        question: "What is the safest way to create a password?",
        options: ["Use your birthdate","Use a mix of letters, numbers, and symbols","Use your name","Use '123456'"],
        answer: 1,
        explanation: "Strong passwords combine letters, numbers, and symbols."
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: ["Using two passwords","Logging in from two devices","A second verification step after password","Sharing login with a friend"],
        answer: 2,
        explanation: "2FA adds an extra layer of security beyond passwords."
    },
    {
        question: "Which of these is the most secure password?",
        options: ["password123","john1990","Tr!9kL@92#mZ","qwerty"],
        answer: 2,
        explanation: "Strong passwords are random and complex."
    },
    {
        question: "What should you do before installing an app?",
        options: ["Install it immediately","Check permissions and reviews","Share it","Disable antivirus"],
        answer: 1,
        explanation: "Always check permissions and reviews before installing apps."
    },
    {
        question: "What is malware?",
        options: ["Hardware","Safe extension","Harmful software","Email service"],
        answer: 2,
        explanation: "Malware is software designed to damage or exploit devices."
    },
    {
        question: "Which network is safest for banking?",
        options: ["Public Wi-Fi","Home network","Airport Wi-Fi","Free Wi-Fi"],
        answer: 1,
        explanation: "Private networks are safer than public Wi-Fi."
    },
    {
        question: "What does a VPN do?",
        options: ["Speed internet","Remove viruses","Encrypt connection","Block ads"],
        answer: 2,
        explanation: "VPN encrypts your internet traffic for privacy."
    },
    {
        question: "How often should you update passwords?",
        options: ["Never","10 years","Only when hacked","Every few months"],
        answer: 3,
        explanation: "Regular updates reduce risk of compromise."
    },
    {
        question: "What is a firewall?",
        options: ["Physical wall","Traffic control system","Virus","Backup"],
        answer: 1,
        explanation: "Firewall monitors and controls network traffic."
    },
    {
        question: "Which action is risky?",
        options: ["Strong passwords","2FA","Reusing passwords","Logout"],
        answer: 2,
        explanation: "Reusing passwords makes accounts vulnerable."
    },
    {
        question: "What to do if device is stolen?",
        options: ["Wait","Lock/wipe device","Post online","Buy new"],
        answer: 1,
        explanation: "Remote lock/wipe protects your data."
    },
    {
        question: "What is ransomware?",
        options: ["Speed tool","Antivirus","Locks files for money","Storage"],
        answer: 2,
        explanation: "Ransomware demands payment to unlock files."
    },
    {
        question: "Safe email practice?",
        options: ["Open all","Click links","Verify sender","Share password"],
        answer: 2,
        explanation: "Always verify sender before responding."
    },
    {
        question: "Why avoid oversharing?",
        options: ["Storage","Slow phone","Social engineering risk","Less followers"],
        answer: 2,
        explanation: "Attackers use personal info for scams."
    },
    {
        question: "Purpose of antivirus?",
        options: ["Speed net","Remove malware","Block sites","Backup"],
        answer: 1,
        explanation: "Antivirus detects and removes threats."
    }
];

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const skipBtn = document.getElementById("skip-btn");

const explanationBox = document.getElementById("explanation-box");
const explanationEl = document.getElementById("explanation");

const currentQEl = document.getElementById("current-q");
const totalQEl = document.getElementById("total-q");

const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

totalQEl.innerText = questions.length;

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;
    currentQEl.innerText = currentQuestion + 1;

    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
        let btn = document.createElement("button");
        btn.innerText = opt;

        btn.onclick = () => {
            if (answers[currentQuestion] === null) {
                answers[currentQuestion] = index;
                showExplanation();
                loadQuestion();
            }
        };

        if (answers[currentQuestion] !== null) {
            if (index === q.answer) btn.classList.add("correct");
            if (index === answers[currentQuestion] && index !== q.answer)
                btn.classList.add("wrong");
        }

        optionsEl.appendChild(btn);
    });

    if (answers[currentQuestion] !== null) {
        showExplanation();
    } else {
        explanationBox.classList.add("hidden");
    }
}

nextBtn.onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
};

prevBtn.onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};

skipBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showExplanation() {
    explanationEl.innerText = questions[currentQuestion].explanation;
    explanationBox.classList.remove("hidden");
}

function showResult() {
    let correct = 0, wrong = 0, skipped = 0;

    answers.forEach((ans, i) => {
        if (ans === null) skipped++;
        else if (ans === questions[i].answer) correct++;
        else wrong++;
    });

    document.querySelector(".quiz-container").classList.add("hidden");
    resultBox.classList.remove("hidden");

    scoreEl.innerHTML = `
        Correct: ${correct}<br>
        Wrong: ${wrong}<br>
        Skipped: ${skipped}<br><br>
        Score: ${correct}/${questions.length}
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    answers.fill(null);
    resultBox.classList.add("hidden");
    document.querySelector(".quiz-container").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();
