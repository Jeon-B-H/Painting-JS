const colors = document.getElementsByClassName('choose-color');

// function : onChangeColor
function onChangeColor(event){
    ctx.strokeStyle = event.target.style.backgroundColor;
     // setting value of context rectangles
     ctx.fillStyle = ctx.strokeStyle;
}

// addEventListeneer
Array.from(colors).forEach(color => color.addEventListener('click', onChangeColor));