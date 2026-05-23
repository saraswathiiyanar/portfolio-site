function openPopup(image){

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popup-img").src = image;
}

function closePopup(){

  document.getElementById("popup").style.display = "none";
}