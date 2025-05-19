const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const navigation = document.querySelector('nav');
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamburger.classList.toggle('show');
});