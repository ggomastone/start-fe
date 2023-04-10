let isPress = fasle,
    prePosx = 0,
    prePosy = 0;

const $target = document.querySelector('.mover');

$target.onmousedown = start;
$target.onmouseup = end;

window.onmousemove = move;

function start(e){
    prePosx = e.clientX;
    prePosy = e.clientY;

    isPress = true;
}

function move(e){
    if (!press){
        return;
    }
    
}