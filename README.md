# 🎰 Lottery Game Ticket App

An interactive lottery ticket game built with **React.js**, featuring slot machine animations, win tracking, and a dark casino-themed UI.

🔗 **Live Demo:** [lottery-game-lemon.vercel.app](https://lottery-game-lemon.vercel.app/)

---

## 📸 Preview

> Buy a ticket, watch the numbers spin, and see if your sum hits 15 to win!

---

## ✨ Features

- 🎰 **Slot machine spin animation** on every new ticket
- 🏆 **Win detection** — sum of 3 numbers must equal 15
- 🎉 **Confetti celebration** on winning ticket
- 📊 **Live stats** — Tries, Wins & Win Rate tracker
- ✅ Win state with green glow effect
- ❌ Lose state with clear feedback
- 🌙 Dark casino-themed UI with gold accents
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Lottery.jsx
│   ├── Ticket.jsx
│   └── TicketNum.jsx
├── utils/
│   └── helper.js
├── styles/
│   ├── global.css
│   ├── Lottery.css
│   ├── Ticket.css
│   └── TicketNum.css
├── App.jsx
└── main.jsx
```

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/Muhammad-Danish-ReactJs/Lottery-Game.git

# Navigate to project
cd Lottery-Game

# Install dependencies
npm install

# Start development server
npm start
```

App runs on `http://localhost:3000`

---

## 🎮 How It Works

1. Click **"Buy New Ticket"** to generate 3 random numbers (0–9)
2. Numbers animate with a slot machine spin effect
3. If the **sum equals 15** → You Win! 🏆
4. Stats update automatically after every ticket

---

## 💡 Key Concepts Demonstrated

- Component-based architecture (Lottery → Ticket → TicketNum)
- CSS keyframe animations
- `useEffect` for spin animation timing
- Props drilling between components
- Utility functions in separate `utils/` folder

---

## 👨‍💻 Author

**Muhammad Danish**
- LinkedIn: [muhammad-danish-js](https://www.linkedin.com/in/muhammad-danish-js/)
- GitHub: [Muhammad-Danish-ReactJs](https://github.com/Muhammad-Danish-ReactJs)
- Email: muhammaddanish.reactjs@gmail.com
