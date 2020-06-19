var bigPic = document.querySelector("#cup");
var smallPic = document.querySelectorAll(".small");

for(var i=0; i<smallPic.length; i++) {
    smallPic[i].addEventListener("click", showBig);
}

function showBig() {
    var newSrc = this.src;
    bigPic.setAttribute("src",newSrc);
}