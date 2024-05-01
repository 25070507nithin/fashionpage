

let colorBorder1 = document.getElementById("colorBorder1");
let colorBorder2 = document.getElementById("colorBorder2");
let colorBorder3 = document.getElementById("colorBorder3");
let colorBorder4 = document.getElementById("colorBorder4");


colorBorder1.onclick = function(){
    colorBorder1.classList.toggle("color-border1")
}


colorBorder2.onclick = function(){
    colorBorder2.classList.toggle("color-border2")

}

colorBorder3.onclick = function(){
    colorBorder3.classList.toggle("color-border3")
}

colorBorder4.onclick = function(){
    colorBorder4.classList.toggle("color-border4")
}

let buttonEl = document.getElementById("buttonEl");

buttonEl.onclick = function(){
    document.getElementById("selected").classList.add("selected-display")
}