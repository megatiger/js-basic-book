var bigPic = document.querySelector("#cup");
var smallPic = document.querySelectorAll(".small");

for(var i=0; i<smallPic.length; i++) {
    smallPic[i].onclick = showBig;
}

function showBig() {
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
}