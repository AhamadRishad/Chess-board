


const board = document.getElementById('chessboard');
const size = 8;
var btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
for(let i = 0 ; i < size ; i++){
    for(let j = 0 ; j < size ; j++){
        let square = document.createElement('div');
        if((i + j) % 2 ==0) {
            square.className = 'white-square'
        } else {
            square.className = 'black-square'
        }
        board.appendChild(square);
    }
}
})