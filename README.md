# ⏱️ React Stopwatch

A clean and functional **Stopwatch** built using **React** and **TypeScript**.  
This project demonstrates the use of React hooks such as `useState` and `useRef` to manage time, intervals, and state updates efficiently.

---

## 🚀 Features

- Start, Pause, and Reset functionality  
- Real-time time tracking (minutes, seconds, milliseconds)  
- Smooth updates with `setInterval`  
- Built with TypeScript for type safety  
- Minimal, responsive UI built with simple CSS  
- Beginner-friendly React project setup  

---

## 🧠 How It Works

- The stopwatch tracks elapsed time using `Date.now()` and the difference between the current time and start time.  
- `useState` manages the `time` and `isRunning` states.  
- `useRef` stores the timer ID to allow starting and stopping the interval without unnecessary re-renders.  
- `formatTime()` converts raw milliseconds into a formatted `mm:ss:ms` output.  

---

## 🛠️ Tech Stack

- **React** (Functional Components)
- **TypeScript**
- **Vite** (for fast development)
- **CSS** (for styling)

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
