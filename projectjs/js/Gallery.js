function upDate(previewPic){
    console.log("Mouse over triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo(){
    console.log("Mouse out triggered");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
function addTabFocus(){
    console.log("Page loaded");

    let images = document.querySelectorAll(".preview");

    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}