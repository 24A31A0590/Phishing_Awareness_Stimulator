let elements = document.querySelectorAll(".clickable");

elements.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("selected");
    });
});

function checkAnswers() {
    let score = 0;
    let feedback = "<h3>🔍 Analysis Result:</h3>";

    elements.forEach(el => {
        let isCorrect = el.dataset.correct === "true";

        if (el.classList.contains("selected")) {
            if (isCorrect) {
                el.classList.add("correct");
                score++;

                feedback += "<p>✅ " + el.innerText + " → " + el.dataset.info + "</p>";
            } else {
                el.classList.add("wrong");
                feedback += "<p>❌ " + el.innerText + " → Not suspicious</p>";
            }
        }
    });

    feedback += `<h3>Score: ${score} / ${elements.length}</h3>`;

    document.getElementById("resultBox").innerHTML = feedback;
}

function resetGame() {
    elements.forEach(el => {
        el.classList.remove("selected", "correct", "wrong");
    });

    document.getElementById("resultBox").innerHTML = "";
}
