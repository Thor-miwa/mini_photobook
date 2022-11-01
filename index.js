const photos = document.getElementsByClassName("photo-item");
let photoPosition = 0;
const totalPhotos = photos.length;

let photosBtnNext = document.getElementById("photo-btn-next")
let photosBtnPrev = document.getElementById("photo-btn-prev")

function hideAllPhotos(){
    for(let photo of photos){
        photo.classList.remove("photo-item-visible")
        photo.classList.add("photo-item-hidden")
    }
}

photosBtnNext.addEventListener("click", function moveToNextPhoto(){
    hideAllPhotos();
    if(photoPosition === totalPhotos - 1){
        photoPosition = 0;
    }else{
        photoPosition++;
    }

    photos[photoPosition].classList.add("photo-item-visible");
})

photosBtnPrev.addEventListener("click", function(){
    hideAllPhotos();
    if(photoPosition === 0){
        photoPosition = totalPhotos - 1;
    }else{
        photoPosition--;
    }

    photos[photoPosition].classList.add("photo-item-visible");
})