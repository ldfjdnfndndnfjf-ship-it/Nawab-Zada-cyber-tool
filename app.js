function run(action) {
    const term = document.getElementById('terminal');
    term.innerHTML += `<p>> Initializing ${action} attack...</p>`;
    // Yahan hum API call karenge jo tumhare Python backend se connect hogi
    console.log("Starting: " + action);
}
