const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// setting width, height of canvas
canvas.width = 700;
canvas.height = 700;

// setting default value of context line
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

// painting = True : 그림 그리는 것 가능
// painting = False : 그림 그리는 것 불가능
let painting = false;

// function : onMouseMove
function onMouseMove(event){
    let x = event.offsetX;
    let y = event.offsetY;

    if(!painting){
        ctx.beginPath(); 
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// function : stopPainting 
function stopPainting(){
    // painting = true인 상태에서 canvas를 벗어날 경우 자동적으로 painting = false으로 전환
    painting = false;
}

// function : onMouseDown
function onMouseDown(event){
    // painting가 true일 경우에만 그림 그리는 것이 가능
    painting = true;
}

// addEventListener
if(canvas !== null){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}