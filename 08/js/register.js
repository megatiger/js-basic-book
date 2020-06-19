function newRegister() {
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var delBtn = document.createElement("span");
    delBtn.setAttribute("class", "del");
    delBtn.innerText = "X";
    newP.appendChild(delBtn);

    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);
    //nameList.appendChild(newP);
    userName.value = "";

    var removeBtns = document.querySelectorAll(".del");
    for (var i=0 ; i<removeBtns.length; i++) {
        removeBtns[i].addEventListener("click", function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}