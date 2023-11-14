const startOverlay = document.getElementById("startOverlay");
const startButton = document.getElementById("startButton");
const projectsButton = document.getElementById("projectsButton");
const aboutUsButton = document.getElementById("aboutUsButton");
const contactsButton = document.getElementById("contactsButton");

function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
        startOverlay.classList.add("active");
        setTimeout(function () {
            startOverlay.style.display = "none"
        }, 500);
    }
}

startButton.addEventListener("click", function () {
    startOverlay.classList.add("active");
    setTimeout(function () {
        startOverlay.style.display = "none";
    }, 500);
});

window.addEventListener("keydown", handleEnterKeyPress);

projectsButton.onclick = function () {
    window.location.href = "projects.html";
};

aboutUsButton.addEventListener('click', function () {
    window.location.href = 'about-us.html';
});

contactsButton.addEventListener('click', function () {
    window.location.href = 'contacts.html';
});