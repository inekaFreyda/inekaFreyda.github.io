
const imageSet1 = ["wireframeFE.png", "wireframeBE.png"]; 
const imageSet2 = ["homepage.png", "Admin.png"]; 
function nextImage(imageId, imageArray) {
    let imgElement = document.getElementById(imageId);
    let currentSrc = imgElement.src.split("/").pop(); 
    let currentIndex = imageArray.indexOf(currentSrc);

    
    let nextIndex = (currentIndex + 1) % imageArray.length;
    imgElement.src = imageArray[nextIndex];
}