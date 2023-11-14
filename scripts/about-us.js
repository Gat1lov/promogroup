const indexButton = document.getElementById("indexButton")
const projectsButton = document.getElementById("projectsButton");
const contactsButton = document.getElementById("contactsButton");

indexButton.addEventListener('click', function () {
    window.location.href = 'index.html'
});

projectsButton.addEventListener('click', function () {
    window.location.href = 'projects.html';
});

contactsButton.addEventListener('click', function () {
    window.location.href = 'contacts.html';
});