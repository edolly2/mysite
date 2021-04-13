const home = document.getElementById('home');
const homeS = document.getElementById('home-shield');
const about = document.getElementById('about');
const aboutS = document.getElementById('about-shield');
const projects = document.getElementById('projects');
const projectsS = document.getElementById('projects-shield');
const clients = document.getElementById('clients');
const clientsS = document.getElementById('clients-shield');
const contact = document.getElementById('contact');
const contactS = document.getElementById('contact-shield');

home.addEventListener('mouseover', () => {
    homeS.classList.remove('hide-shield');
});

home.addEventListener('mouseleave', () => {
    homeS.classList.add('hide-shield');
});

about.addEventListener('mouseover', () => {
    aboutS.classList.remove('hide-shield');
});

about.addEventListener('mouseleave', () => {
    aboutS.classList.add('hide-shield');
});

projects.addEventListener('mouseover', () => {
    projectsS.classList.remove('hide-shield');
});

projects.addEventListener('mouseleave', () => {
    projectsS.classList.add('hide-shield');
});

clients.addEventListener('mouseover', () => {
    clientsS.classList.remove('hide-shield');
});

clients.addEventListener('mouseleave', () => {
    clientsS.classList.add('hide-shield');
});

contact.addEventListener('mouseover', () => {
    contactS.classList.remove('hide-shield');
});

contact.addEventListener('mouseleave', () => {
    contactS.classList.add('hide-shield');
});

