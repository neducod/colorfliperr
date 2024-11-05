const body = document.getElementsByTagName("body")[0]
//body.style.backgroundColor = "red"

function setColor(name){
    body.style.backgroundColor = name;
}
setColor("green");
setColor("red");
setColor("blue");

function randomColor(){
    const red = Math.round(Math.random()*225)
    const green = Math.round(Math.random()*225)
    const blue = Math.round(Math.random()*225)

    const color = `rgb(${red}, ${green}, ${blue})` 

    body.style.backgroundColor = color;
}

randomColor()