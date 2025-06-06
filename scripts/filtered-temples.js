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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Asunción Paraguay",
    location: "Asunción, Paraguay",
    dedicated: "2002, May, 19",
    area: 11906,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg"
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-784251-wallpaper.jpg"
  },
  {
    templeName: "Montreal Quebec Canada",
    location: "Montreal Quebec, Canada",
    dedicated: "2000, June, 4",
    area: 11550,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/400x250/montreal-quebec-temple-lighted-1169263-wallpaper.jpg"
  },
  {
    templeName: "Port-Au-Prince Haiti",
    location: "Port-Au-Prince, Haiti",
    dedicated: "2019, September, 1",
    area: 10396,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/port-au-prince-haiti/400x250/02-Port-au-Prince-Haiti-Temple-2264533.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
  }
  // Add more temple objects here...
];

createTempleCard(temples);

const oldTmpLink = document.querySelector("#old");

oldTmpLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple  => {
      const year = parseInt(temple.dedicated.split(",")[0].trim());
      return year <= 1900;
    })
  );
});


const newTmpLink = document.querySelector("#new");

newTmpLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple  => {
      const year = parseInt(temple.dedicated.split(",")[0].trim());
      return year > 2000;
    })
  );
});

const largeTmpLink = document.querySelector("#large");

largeTmpLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple  => temple.area > 90000)
  )

})

const smallTmpLink = document.querySelector("#small");

smallTmpLink.addEventListener("click", () => {
  createTempleCard(
    temples.filter(temple  => temple.area < 10000)
  )
  
})

const homeTempLink = document.querySelector("#home")

homeTempLink.addEventListener("click", () => {
  createTempleCard(temples)
});

function createTempleCard(filteredTemples) {
  document.querySelector(".img-container").innerHTML = "";

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let size = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">LOCATION:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "label">DEDICATED:</span> ${temple.dedicated}`;
    size.innerHTML = `<span class = "label">SIZE:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt",  `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(size);
    card.appendChild(img);

    document.querySelector(".img-container").appendChild(card);
  })
}