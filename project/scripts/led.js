// Hamburger button for mobile
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    
    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validation
    if (name && email && message) {
        document.getElementById("formStatus").textContent = "Thank you for your message! We'll get back to you shortly.";
        document.getElementById("formStatus").style.color = "green";

    // Clear the form after submission
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formStatus").textContent = "Please fill out all fields.";
        document.getElementById("formStatus").style.color = "red";
    }
});


// Photo Gallery
const gallery = [
    {
        caption: "LED Lighting photo #1",
        imageUrl: "images/photo1.webp"
    },
    {
        caption: "LED Lighting photo #2",
        imageUrl: "images/photo2.jpg"
    },
    {
        caption: "LED Lighting photo #3",
        imageUrl: "images/photo3.jpg"
    },
    {
        caption: "LED Lighting photo #4",
        imageUrl: "images/photo4.webp"
    },
    {
        caption: "LED Lighting photo #5",
        imageUrl: "images/photo5.webp"
    },
    {
        caption: "LED Lighting photo #6",
        imageUrl: "images/photo6.jpg"
    },
    {
        caption: "LED Lighting photo #7",
        imageUrl: "images/photo7.webp"
    },
    {
        caption: "LED Lighting photo #8",
        imageUrl: "images/photo8.webp"
    },
    {
        caption: "LED Lighting photo #9",
        imageUrl: "images/photo9.webp"
    },
    {
        caption: "LED Lighting photo #10",
        imageUrl: "images/photo10.webp"
    }
    ];
    
// Build photo Gallery    
createPhoto(gallery);
    
// Function to iterate through for each photo
function createPhoto(photos) {
    photos.forEach(photo => {
        let newPhoto = document.createElement('figure');
        
        let img = document.createElement('img');
        img.src = photo.imageUrl;
        img.alt = `${photo.caption}`;
        img.loading = 'lazy';
        newPhoto.appendChild(img);

        document.querySelector('.gallery').appendChild(newPhoto);
    });
}