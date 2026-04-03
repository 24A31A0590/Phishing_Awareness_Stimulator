🎣 Phishing Awareness Simulator

> An interactive, browser-based cybersecurity education platform designed to help users recognize and defend against phishing attacks through hands-on simulations, training exercises, and assessments.

📌 Project Overview

The **Phishing Awareness Simulator** is a frontend web application built as part of a cybersecurity lab project. It provides a safe, gamified environment where users can learn to identify phishing emails, suspicious websites, and social engineering tactics — without any real-world risk.

> **Note:** This project covers the **frontend only**, as per lab requirements. Backend integration (user authentication, database, server-side logic) is not included in this version.


👩‍💻 Team Members

| Name |
|------|
| Nadiminti Sai Priya Satwika |
| Killadi Divya Jyothi |
| Chikkam Harshitha |
| Reddypalli Pushpa Varun |

 🚀 Features

 🏠 Home Page
- Introduction to phishing concepts with a "What is Phishing?" popup
- Embedded awareness video link
- **Interactive Catch Safe Emails Game** — players catch legitimate emails and avoid phishing ones, with a live score and lives tracker
- Integrated **AI Chatbot Assistant** for answering phishing-related queries
- About Us section with team information

 📧 Fake Email Simulation
- Displays a realistic phishing email crafted to mimic a trusted sender
- Users choose to either **Report as Phishing** or **Click the Link**
- Instant feedback based on user decision to reinforce learning

 🛡 Identify Suspicious Elements
- Users act as security analysts examining a suspicious email
- Clickable elements within the email highlight phishing red flags such as:
  - Fake/spoofed sender domains
  - Urgent or threatening subject lines
  - Suspicious hyperlinks
  - Poor grammar
- Submit and Retry functionality for repeated practice

📝 Quiz Assessment
- Multi-question phishing awareness quiz
- Progress tracking (current question / total)
- Per-question explanations after answering
- Previous, Skip, and Next navigation
- Final score display with Restart option

 🌐 Website Simulation
- Simulates a fake banking login page to demonstrate how phishing websites look legitimate
- Fake URL bar displaying a suspicious domain (`secure-bank-login.xyz`)
- Login attempt triggers an educational warning popup

---

 🗂 Project Structure

```
phishing_awareness/
│
├── html/
│   ├── home.html                  # Main landing page
│   ├── fake-email.html            # Fake email simulation
│   ├── identify.html              # Identify suspicious elements exercise
│   ├── quiz.html                  # Quiz assessment page
│   └── website-simulation.html    # Fake website simulation
│
├── css/
│   ├── style.css                  # Global styles (home page)
│   ├── fake_email.css             # Styles for fake email simulation
│   ├── identify.css               # Styles for identify exercise
│   ├── quiz.css                   # Styles for quiz page
│   └── website-simulation.css     # Styles for website simulation
│
├── js/
│   ├── script.js                  # Home page logic (game, chatbot, popup)
│   ├── fake_email.js              # Fake email interaction logic
│   ├── identify.js                # Element identification logic
│   ├── quiz.js                    # Quiz engine logic
│   └── website-simulation.js      # Fake login simulation logic
│
└── images/
    ├── hii.png                    # Hero section image

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling and responsive layout |
| JavaScript (Vanilla) | Interactivity, game logic, quiz engine |
| Google Fonts (Orbitron) | Cybersecurity-themed typography |

## ⚙️ How to Run

Since this is a purely frontend project, no installation or server setup is required.

1. **Download or clone** the project folder.
2. Open the `html/` folder.
3. Open `home.html` in any modern web browser (Chrome, Firefox, Edge).
4. Navigate between pages using the top navigation bar.

> **Tip:** For best results, use Google Chrome or Mozilla Firefox with a stable internet connection (required for Google Fonts).

## 🔒 Scope & Limitations

- This project is **frontend-only** as specified by the lab guidelines.
- No real user data is collected or stored.
- The phishing simulations are for **educational purposes only** — no actual emails are sent and no credentials are captured.
- Backend features such as user login, score persistence, and database storage are **out of scope** for this version.


## 🎯 Learning Objectives

By using this simulator, users will be able to:

- Recognize common phishing email indicators
- Understand how attackers create urgency and impersonate trusted brands
- Identify suspicious URLs and fake login pages
- Test and reinforce their phishing awareness through quizzes and games


## 📄 License

This project was developed for educational/lab purposes. Not intended for commercial use.

---

*Cybersecurity Awareness Project — Developed with 💻 and ☕ by the team.*
