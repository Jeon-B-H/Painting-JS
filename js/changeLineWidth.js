const controlThick = document.querySelector('#control-thick');

// function : onChangeThick
function onChangeThick(event){
    ctx.lineWidth = event.target.value;
}

// addEventListener
controlThick.addEventListener('input', onChangeThick);