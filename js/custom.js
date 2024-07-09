// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();
document.addEventListener("DOMContentLoaded", function() {
    const projectsLink = document.getElementById("projectsLink");
    const projectsSubmenu = document.getElementById("projectsSubmenu");

    projectsLink.addEventListener("click", function(event) {
        event.preventDefault();
        projectsSubmenu.style.display = (projectsSubmenu.style.display === "block") ? "none" : "block";
    });
});
