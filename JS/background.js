const images = ["forest.jpg", "sunset.jpg", "winter.jpg"];

const chooseImage = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("img");

bgimage.src = `Image/${chooseImage}`;
bgimage.className = 'image';
document.body.appendChild(bgimage);