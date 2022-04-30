const JSmode = document.querySelector('.JS-mode');

// setting default value
let filling = false;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// function : changeModeText)
function changeModeText(event){
    const modeText = event.target.innerText;

    if(modeText === "Fill"){
        filling = true;
        JSmode.innerText = 'Paint';

    }else{
        filling = false;
        JSmode.innerText = 'Fill';
    }
}

// function : handleCanvasClick
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// addEventLisener 
JSmode.addEventListener('click', changeModeText);
canvas.addEventListener('click', handleCanvasClick);