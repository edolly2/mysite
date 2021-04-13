"use strict";

var home = document.getElementById('home');
var homeS = document.getElementById('home-shield');
var about = document.getElementById('about');
var aboutS = document.getElementById('about-shield');
var projects = document.getElementById('projects');
var projectsS = document.getElementById('projects-shield');
var clients = document.getElementById('clients');
var clientsS = document.getElementById('clients-shield');
var contact = document.getElementById('contact');
var contactS = document.getElementById('contact-shield');
home.addEventListener('mouseover', function () {
  homeS.classList.remove('hide-shield');
});
home.addEventListener('mouseleave', function () {
  homeS.classList.add('hide-shield');
});
about.addEventListener('mouseover', function () {
  aboutS.classList.remove('hide-shield');
});
about.addEventListener('mouseleave', function () {
  aboutS.classList.add('hide-shield');
});
projects.addEventListener('mouseover', function () {
  projectsS.classList.remove('hide-shield');
});
projects.addEventListener('mouseleave', function () {
  projectsS.classList.add('hide-shield');
});
clients.addEventListener('mouseover', function () {
  clientsS.classList.remove('hide-shield');
});
clients.addEventListener('mouseleave', function () {
  clientsS.classList.add('hide-shield');
});
contact.addEventListener('mouseover', function () {
  contactS.classList.remove('hide-shield');
});
contact.addEventListener('mouseleave', function () {
  contactS.classList.add('hide-shield');
});