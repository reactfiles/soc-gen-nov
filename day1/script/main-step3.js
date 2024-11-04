function addBoxHandler(){
    // alert("you clicked the button");
    var element = document.createElement("div");
    element.setAttribute("class","box");
    document.getElementsByClassName("container")[0].appendChild(element);
}
function removeBoxHandler(){
    document.getElementsByTagName("button")[0].removeEventListener("click",addBoxHandler);
}
function init(){
    // alert("dom is ready");
    document.getElementsByTagName("button")[0].addEventListener("click",addBoxHandler);
    document.getElementsByTagName("button")[1].addEventListener("click",removeBoxHandler);
};

document.addEventListener("DOMContentLoaded", init);