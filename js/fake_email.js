function reportPhishing() {
    const result = document.getElementById("result");

    result.innerHTML =
        "✅ Correct! This is a phishing email. You identified it properly.";
    result.style.color = "green";
}

function clickPhishingLink() {
    const result = document.getElementById("result");

    result.innerHTML =
        "❌ Oops! You clicked a phishing link. Always verify before clicking.";
    result.style.color = "red";
}
