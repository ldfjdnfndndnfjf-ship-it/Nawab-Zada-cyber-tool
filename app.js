// Matrix Background Logic
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight; canvas.width = window.innerWidth;
const chars = "01NAWABZADA🦅";
let drops = Array(Math.floor(canvas.width/10)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    drops.map((y, i) => {
        const text = chars[Math.floor(Math.random()*chars.length)];
        ctx.fillText(text, i*10, y*10);
        drops[i] = y > canvas.height ? 0 : y + 1;
    });
}
setInterval(draw, 50);

// Terminal Typing Effect
function run(action) {
    const target = document.getElementById('target').value;
    const term = document.getElementById('terminal');
    if (!target) return alert("Target URL enter karo Jani!");

    let lines = [`[*] Initiating ${action}...`, `[*] Connecting to ${target}...`, "[*] Bypassing Firewall...", "[!] ACCESS GRANTED!"];
    lines.forEach((line, i) => {
        setTimeout(() => { term.innerHTML += `<p>> ${line}</p>`; term.scrollTop = term.scrollHeight; }, i * 800);
    });
}
