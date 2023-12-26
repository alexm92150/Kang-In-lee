"use strict";

const menu = document.querySelector(".menu");
const burger = document.querySelector(".fa-bars");
const moon = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const email = document.getElementById('email')
const password = document.getElementById('mdp')
const pseudo = document.getElementById('pseudo')
const formulaire = document.querySelector('form')
const messageError = document.querySelector('.messageError')

burger.addEventListener("click",()=>{
    menu.classList.toggle("visible")
});

moon.addEventListener("click",()=>{
    body.classList.toggle("dark")
});


function isPasswordValid(password) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])/;

  if (regex.test(password)) {
    messageError.textContent = ""
    return true
  } else {
    messageError.textContent = 'Le mot de passe doit contenir 1 majuscule, 1 minuscule, un chiffre et un caractère spécial.'
    return false
  }
}

formulaire.addEventListener('submit', (e) => {
  e.preventDefault()

  if (isPasswordValid(password.value)) {
    messageError.textContent =  "Vous êtes logué"
    messageError.style.color = "green"
  } 
})


