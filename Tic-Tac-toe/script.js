let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');

let trurn0 = true;

const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box clicked');

        box.innerText = "abc"
        // if (box.textContent === '') {
        //     box.textContent = trurn0 ? 'X' : 'O';
        //     trurn0 = !trurn0;
        //     checkWinner();
        // }
    });
});