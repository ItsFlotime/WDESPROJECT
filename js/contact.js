window.addEventListener('load', () {
    const subject = localStorage.getItem("SUBJECT");
    document.getElementById("Subjectin").textContent = subject;
})