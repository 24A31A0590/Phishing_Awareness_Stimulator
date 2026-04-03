// POPUP (improved with outside click close)
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// close when clicking outside popup
window.onclick = function(event) {
  let popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

function openVideo() {
  window.open("https://www.youtube.com/watch?v=XBkzBrXlle0", "_blank");
}
let gameInterval;
let score = 0;
let lives = 2;
let gameOver = false;

let player = document.getElementById("player");
let gameArea = document.getElementById("gameArea");

// move player
let targetX = 0;
let currentX = 0;

// track mouse position
gameArea.addEventListener("mousemove", function(e) {
  targetX = e.offsetX;
});

// smooth animation loop
function animatePlayer() {
  if (!gameOver) {
    // easing effect (smooth follow)
    currentX += (targetX - currentX) * 0.1;

    player.style.left = currentX + "px";
  }

  requestAnimationFrame(animatePlayer);
}

animatePlayer();

// update lives UI
function updateLives() {
  let livesText = "Lives: ";
  for (let i = 0; i < lives; i++) {
    livesText += "❤️";
  }
  document.getElementById("lives").innerText = livesText;
}

// create falling emails
function createEmail() {
  if (gameOver) return;

  let email = document.createElement("div");
  email.classList.add("email-drop");

  let isPhish = Math.random() > 0.5;

  email.innerText = isPhish ? "📧⚠️" : "📧";
  email.dataset.type = isPhish ? "phish" : "safe";

  email.style.left = Math.random() * 90 + "%";

  gameArea.appendChild(email);

  let fall = setInterval(() => {
    let top = email.offsetTop;
    email.style.top = top + 5 + "px";

    let playerRect = player.getBoundingClientRect();
    let emailRect = email.getBoundingClientRect();

    // collision
    if (
      emailRect.bottom >= playerRect.top &&
      emailRect.left < playerRect.right &&
      emailRect.right > playerRect.left
    ) {
      if (email.dataset.type === "safe") {
        score++;
      } else {
        lives--; // lose life
        updateLives();
      }

      document.getElementById("score").innerText = "Score: " + score;

      email.remove();
      clearInterval(fall);

      // GAME OVER
     if (lives <= 0) {
  gameOver = true;

  document.getElementById("game-over").innerText = "💀 Game Over!";
  document.getElementById("final-score").innerText = "Final Score: " + score;

  document.getElementById("restart-btn").style.display = "inline-block";

  clearInterval(gameInterval); // stop spawning
}
    }

    // remove if missed
    if (top > 400) {
      email.remove();
      clearInterval(fall);
    }

  }, 50);
}

// start spawning
gameInterval = setInterval(createEmail, 1500);

// initialize lives display
updateLives();
function restartGame() {
  score = 0;
  lives = 2;
  gameOver = false;

  document.getElementById("score").innerText = "Score: 0";
  document.getElementById("game-over").innerText = "";
  document.getElementById("final-score").innerText = "";

  document.getElementById("restart-btn").style.display = "none";

  updateLives();

  // remove all emails
  let emails = document.querySelectorAll(".email-drop");
  emails.forEach(e => e.remove());

  // restart game loop
  gameInterval = setInterval(createEmail, 1500);
}
function toggleChatbot() {
    let chatbot = document.getElementById("chatbot-container");
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    let input = document.getElementById("chat-input");
    let message = input.value;
    let chatBody = document.getElementById("chat-body");

    if (message.trim() === "") return;

    // User message
    chatBody.innerHTML += `<p><b>You:</b> ${message}</p>`;

    // Bot reply
    let reply = getBotReply(message);
    chatBody.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("phishing")) {
        return "Phishing is a scam where attackers trick you into giving sensitive information like passwords or bank details.";
    }
    else if (message.includes("email")) {
        return "Check the sender's address, avoid suspicious links, and beware of urgent or threatening messages.";
    }
    else if (message.includes("password") || message.includes("otp") || message.includes("pin")) {
        return "Never share your password, OTP, or PIN with anyone. Legitimate companies will never ask for them.";
    }
    else if (message.includes("link") || message.includes("url") || message.includes("click")) {
        return "Avoid clicking unknown links. Always hover over links to check if the URL looks legitimate.";
    }
    else if (message.includes("bank") || message.includes("payment") || message.includes("card") || message.includes("account")) {
        return "Be cautious with banking messages. Always verify directly through official websites or apps.";
    }
    else if (message.includes("scam") || message.includes("fraud") || message.includes("fake") || message.includes("suspicious")) {
        return "Scammers often pretend to be trusted sources. Look for spelling errors, strange links, and urgent requests.";
    }
    else if (message.includes("safe") || message.includes("secure") || message.includes("protect") || message.includes("avoid")) {
        return "Stay safe by verifying sources, not sharing personal info, and avoiding unknown links.";
    }
    else if (message.includes("attachment")) {
        return "Do not download attachments from unknown senders. They may contain malware.";
    }
    else if (message.includes("urgent") || message.includes("verify") || message.includes("login")) {
        return "Messages that create urgency or ask you to verify/login quickly are often phishing attempts.";
    }
    else if (message.includes("help") || message.includes("what to do") || message.includes("guide")) {
        return "If you suspect phishing, do not respond. Report it and delete the message immediately.";
    }
    else {
        return "I'm here to help with phishing awareness! Ask me about emails, links, scams, or online safety.";
    }
}
