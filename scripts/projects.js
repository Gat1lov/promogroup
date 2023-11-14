const indexButton = document.getElementById("indexButton")
const aboutUsButton = document.getElementById("aboutUsButton");
const contactsButton = document.getElementById("contactsButton");

indexButton.addEventListener('click', function () {
    window.location.href = 'index.html'
});

aboutUsButton.addEventListener('click', function () {
    window.location.href = 'about-us.html';
});

contactsButton.addEventListener('click', function () {
    window.location.href = 'contacts.html';
});