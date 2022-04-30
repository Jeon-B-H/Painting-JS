const JSsave = document.querySelector('.JS-save');

// function : handleContextmenu
function handleContextmenu(event){
    event.preventDefault();
}

// function : savingImage
function savingImage(){
    const image = canvas.toDataURL('image/jpeg');
    const link = document.createElement("a");
    link.href = image;
    link.download = "painting_canvas.jpeg";
    link.click();
}

// addEventListener 
canvas.addEventListener('contextmenu', handleContextmenu);
JSsave.addEventListener('click', savingImage);
