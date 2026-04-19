@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html, body { 
    font-family: 'JetBrains Mono', monospace !important; 
    background: #000000 !important; 
    color: #00ff41 !important; 
    min-height: 100vh;
    margin: 0;
    overflow-x: hidden;
}

.scanline { 
    background-color: #000 !important;
    background-image: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
    ) !important;
}

.glow { 
    text-shadow: 0 0 2px #00ff41, 0 0 5px #00ff41, 0 0 10px #00ff41 !important; 
}

#app {
    transition: opacity 0.5s ease-in;
}

/* Timpa Tailwind biar item semua */
.bg-black\/50, .bg-gray-900, .bg-black {
    background-color: rgba(0, 5, 0, 0.85) !important;
}

.border-green-500, .border-green-700, .border-green-600, .border-green-900 {
    border-color: #00ff41 !important;
}

.text-green-300, .text-green-400, .text-green-500, .text-green-700 {
    color: #00ff41 !important;
}

.text-yellow-400, .text-yellow-500 {
    color: #ffff00 !important;
}

.text-red-400, .text-red-500 {
    color: #ff0041 !important;
}

input {
    background: #000 !important;
    border: 1px solid #00ff41 !important;
    color: #00ff41 !important;
    padding: 10px !important;
}

input:focus {
    outline: none !important;
    box-shadow: 0 0 8px #00ff41 !important;
}

button {
    background: #003300 !important;
    border: 1px solid #00ff41 !important;
    color: #00ff41 !important;
    transition: all 0.15s !important;
    cursor: pointer;
}

button:hover {
    background: #00ff41 !important;
    color: #000 !important;
    box-shadow: 0 0 12px rgba(0,255,65,0.6) !important;
}

::selection {
    background: #00ff41;
    color: #000;
}

/* Animasi flicker */
@keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.8; }
    100% { opacity: 1; }
}

.glow {
    animation: flicker 2s infinite;
    }
