// function createBoard(color){


//     // const $board = document.createElement('div');
//     // $board.c lassName = 'white';

//     const div = `<div class='${color}'></div>`;
//     return div;
// }

// function createRow(count=4, startColor = 'white') {
//     let row = '';
//     for(let i=0; i<count; i++){
//         const startColor = i % 2 === 'white' ? 'black' : 'white';
//         row += createBoard(startColor);
//     }
//     return row;
// }

// function createChessBoard(count=4) {
//     let board = '';
//     for(let i=0; i<count; i++){
//         const startColor = i % 2 === 'black' ? 'white' : 'black';
//         board += createRow(4, startColor);
//     }
//     return board;
// }

// let $prevTarget = '';

// $board.addEventListener('click', event => {
//     console.log(event.target);
//     const $target = event.target;
//     if ($target === $prevTarget) return;
//     $target.classList.add('red');

//     $prevTarget && $prevTarget.classList.remove('red');
//     $prevTarget = $target;

// })

// $board.innerHTML = createChessBoard();