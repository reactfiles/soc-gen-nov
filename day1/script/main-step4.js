var count = 1;
function addBoxHandler(){
    var element = document.createElement("div");
    element.setAttribute("class","box");
    element.textContent = "box "+count;
    document.getElementsByClassName("container")[0].appendChild(element);
    count++;
}
function removeBoxHandler(){
    var selectedBox = document.getElementsByClassName("container")[0].firstChild;
    if(selectedBox){
        document.getElementsByClassName("container")[0].removeChild(selectedBox);
    }else{
        alert("nothing to remove")
    }
}
function init(){
    document.getElementsByTagName("button")[0].addEventListener("click",addBoxHandler);
    document.getElementsByTagName("button")[1].addEventListener("click",removeBoxHandler);
};

document.addEventListener("DOMContentLoaded", init);