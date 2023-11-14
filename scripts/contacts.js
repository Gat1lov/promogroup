const indexButton = document.getElementById("indexButton")
const aboutUsButton = document.getElementById("aboutUsButton");
const projectsButton = document.getElementById("projectsButton");

indexButton.addEventListener('click', function () {
    window.location.href = 'index.html'
});

aboutUsButton.addEventListener('click', function () {
    window.location.href = 'about-us.html';
});

projectsButton.addEventListener('click', function () {
    window.location.href = 'projects.html';
});