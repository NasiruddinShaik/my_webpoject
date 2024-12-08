
// Array of image URLs
const imageArray = [
    "https://picsum.photos/id/1/300/200",
    "https://picsum.photos/id/2/300/200",
    "https://picsum.photos/id/3/300/200",
    "https://picsum.photos/id/4/300/200"
];


const realImage = document.getElementById("slideshow-image");
    let imageIndex = 0; 
    let activeImageIndex = imageIndex;

    realImage.src = imageArray[imageIndex];

    function setPagination () {
    let paginationHolder = document.getElementById("pagination");
        paginationHolder.innerText = (activeImageIndex + 1) + "/" + imageArray.length;

    }
    function previous() {
        activeImageIndex--;
        if(activeImageIndex < 0) {
            activeImageIndex = imageArray.length - 1;
    
        }
        realImage.src = imageArray[activeImageIndex]; 
        setPagination();
    }


    function nextImage () {
        activeImageIndex++;
        if(activeImageIndex >= imageArray.length){
            activeImageIndex =imageIndex;
        }
        realImage.src = imageArray[activeImageIndex]; 
        setPagination();
    }

