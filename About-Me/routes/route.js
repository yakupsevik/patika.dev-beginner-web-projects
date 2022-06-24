/* Route System - Start */
let path;

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    if (event.target.innerText == "") {
        path = "/";
    } else {
        path = "/" + event.target.innerText.toLowerCase();
    }
    window.history.pushState({}, "", path);
    handleLocation();
};

const routes = {
    404: "/views/404.html",
    "/": "/views/index.html",
    "/skills": "/views/skills.html",
    "/experience": "/views/experience.html",
    "/projects": "/views/projects.html",
    "/certificates": "/views/certificates.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("content").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

/* Route System End */
