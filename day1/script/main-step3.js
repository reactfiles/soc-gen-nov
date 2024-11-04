function clickHandler(){
    // alert("you clicked the button");
    var element = document.createElement("div");
    element.setAttribute("class","box");
    document.getElementsByClassName("container")[0].appendChild(element);
}
function init(){
    // alert("dom is ready");
    document.getElementsByTagName("button")[0].addEventListener("click",clickHandler);
};

document.addEventListener("DOMContentLoaded", init);