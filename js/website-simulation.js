let riskScore = 0;
let startTime = Date.now();

function simulateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    riskScore = 0;

    // 🧠 Behavior Tracking
    if (username !== "") riskScore += 30;
    if (password !== "") riskScore += 50;
    riskScore += 20;

    // ⏱ Time Tracking
    let timeTaken = Math.floor((Date.now() - startTime) / 1000);

    // ⏳ Fake Loading
    result.style.display = "block";
    result.style.background = "#333";
    result.innerHTML = "Logging in... Please wait ⏳";

    setTimeout(() => {
        showResult(timeTaken);
    }, 2000);
}

function showResult(timeTaken) {
    const result = document.getElementById("result");

    let message = "";
    let color = "";

    // 🎯 Score Evaluation
    if (riskScore >= 80) {
        message = "⚠️ High Risk! You entered sensitive data on a phishing site!";
        color = "red";
    } else if (riskScore >= 50) {
        message = "⚠️ Moderate Risk! Be more careful.";
        color = "orange";
    } else {
        message = "✅ Safe Behavior! You avoided phishing.";
        color = "green";
    }

    // 💾 Save score (for dashboard later)
    localStorage.setItem("phishingScore", riskScore);

    result.style.background = color;
    result.innerHTML = `
        <h3>${message}</h3>
        <p><strong>Risk Score:</strong> ${riskScore}</p>
        <p><strong>Time Taken:</strong> ${timeTaken} sec</p>
        <p>This was a fake phishing website. Always check URLs carefully!</p>
    `;

    // 🔄 Auto Reset after 5 sec
    setTimeout(() => {
        resetSimulation();
    }, 5000);
}

function resetSimulation() {
    document.getElementById("result").style.display = "none";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    startTime = Date.now();
}
