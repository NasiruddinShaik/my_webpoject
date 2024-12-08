
// Array of image URLs
const imageArray = [
    "https://picsum.photos/id/1/300/200",
    "https://picsum.photos/id/2/300/200",
    "https://picsum.photos/id/3/300/200",
    "https://picsum.photos/id/4/300/200"
];


const realImage = document.getElementById("slideshow-imag");
    let imageIndex = 0; 
    let activeImageIndex = imageIndex;

    realImage.src = imageArray[imageIndex];

    function previous() {
        activeImageIndex--;
        if(activeImageIndex <= 0) {
            activeImageIndex = realImage.length - 1;
        }
        realImage.src = imageArray[activeImageIndex]; 
    }


    function nextImage () {
        activeImageIndex++;
        if(activeImageIndex >= realImage.length){
            activeImageIndex =imageIndex +1;
        }
        realImage.src = imageArray[activeImageIndex]; 
    }

