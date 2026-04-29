function run(action) {
    const target = document.getElementById('target').value;
    const term = document.getElementById('terminal');
    
    if (!target) {
        term.innerHTML += `<p style="color:red;">> Error: Pehle Target URL enter karo Jani!</p>`;
        return;
    }

    term.innerHTML += `<p>> Initializing ${action} on ${target}...</p>`;
    
    // Yahan hum simulation animation daalenge
    setTimeout(() => {
        term.innerHTML += `<p style="color:#0f0;">> [!] ${action} attack started successfully on target!</p>`;
    }, 1000);
}
