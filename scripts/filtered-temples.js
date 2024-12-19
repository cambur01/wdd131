const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
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
	location: "Manti, Utah, USA",
	dedicated: "1888, May, 21",
	area: 74792,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
	templeName: "Payson Utah",
	location: "Payson, Utah, USA",
	dedicated: "2015, June, 7",
	area: 96630,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
	location: "Kensington, Maryland, USA",
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
	templeName: "Orem Utah",
	location: "Orem, Utah, USA",
	dedicated: "2024, January, 21",
	area: 71998,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-42110-thumb.jpg"
},
{
	templeName: "Adelaide Australia",
	location: "Adelaide, Australia",
	dedicated: "2000, June, 15",
	area: 10700,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-thumb.jpg"
},
{
	templeName: "Columbus Ohio",
	location: "Columbus, Ohio, USA",
	dedicated: "1999, September, 4-5",
	area: 11745,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/columbus-ohio-temple/columbus-ohio-temple-34814-thumb.jpg"
},
{
	templeName: "St. George Utah",
	location: "St. George, Utah, USA",
	dedicated: "1877, April, 6-8",
	area: 143969,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-thumb.jpg"
},

];

createTempleCard(temples);

const homeLink = document.querySelector("#home")
homeLink.addEventListener('click', () => {
	createTempleCard(temples)
	document.querySelector("h2").innerHTML = "Home"
})

const oldLink = document.querySelector("#old")
oldLink.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) <= 1900))
	document.querySelector("h2").innerHTML = "Old"
})

const newLink = document.querySelector("#new")
newLink.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) >= 2000))
	document.querySelector("h2").innerHTML = "New"
})

const largeLink = document.querySelector("#large")
largeLink.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.area >= 90000))
	document.querySelector("h2").innerHTML = "Large"
})

const smallLink = document.querySelector("#small")
smallLink.addEventListener('click', () => {
	createTempleCard(temples.filter(temple => temple.area <= 10000))
	document.querySelector("h2").innerHTML = "Small"
})

function createTempleCard(filteredTemples) {
	document.querySelector(".album").innerHTML = "";
	filteredTemples.forEach(temple => {
		let newCard = document.createElement('figure');

		let name = document.createElement('h3');
		name.innerHTML = temple.templeName;
		newCard.appendChild(name);

		let loc = document.createElement('figcaption');
		loc.innerHTML = `Location: ${temple.location}`;
		newCard.appendChild(loc);

		let ded = document.createElement('figcaption');
		ded.innerHTML = `Dedicated: ${temple.dedicated}`;
		newCard.appendChild(ded);

		let size = document.createElement('figcaption');
		size.innerHTML = `Size: ${temple.area} sq ft`;
		newCard.appendChild(size);

		let img = document.createElement('img');
		img.src = temple.imageUrl;
		img.width = '256';
		img.alt = `${temple.templeName} Temple image`;
		img.loading = 'lazy';
		newCard.appendChild(img);

		document.querySelector('.album').appendChild(newCard);
	});
}