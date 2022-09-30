var button = document.getElementById("button");
var block = document.getElementById("block");

button.onclick = function changeColor(){
    if(block.style.background == "lightgreen"){
    block.style.background ="#B4D2E7";
    }else{
        block.style.background = "lightgreen";}
}
