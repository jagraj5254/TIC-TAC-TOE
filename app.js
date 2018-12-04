const table = document.querySelector("table");
let cells = document.querySelectorAll("td");
const cell1 = document.querySelector("#first");
const cell2 = document.querySelector("#second");
const cell3 = document.querySelector("#third");
const cell4 = document.querySelector("#fourth");
const cell5 = document.querySelector("#fifth");
const cell6 = document.querySelector("#sixth");
const cell7 = document.querySelector("#seventh");
const cell8 = document.querySelector("#eighth");
const cell9 = document.querySelector("#nineth");
const button = document.querySelector(".newGame")
let currentPlayer = "1";
table.addEventListener('click', function(e){
    if (e.target.classList.contains("cell")){
            if(currentPlayer ==="1" && e.target.nodeName === 'TD'){
                e.target.style.backgroundImage = "url('x.jpg')"; 
                e.target.style.backgroundSize = "contain";
                e.target.style.backgroundRepeat = "no-repeat";
                e.target.style.backgroundColor = "blue"
                currentPlayer = "2";
                e.target.classList.remove('cell');
                e.target.classList.add('x');
                checkIfPlayer1Won();
                checkIfPlayer2Won();
            }else if(currentPlayer === "2" && e.target.nodeName === 'TD'){
                e.target.style.backgroundImage = "url('o.png')"; 
                e.target.style.backgroundSize = "contain" ;
                e.target.style.backgroundRepeat = "no-repeat"
                e.target.style.backgroundColor = "red"
                currentPlayer = "1";
                e.target.classList.remove('cell');
                e.target.classList.add('o');
                checkIfPlayer1Won();
                checkIfPlayer2Won();
            };
    };
})

button.addEventListener("click", function(e){
    e.preventDefault();
    location.reload();
})

const checkIfPlayer1Won = function() {
    if(cell1.classList.contains('x') && cell2.classList.contains('x') && cell3.classList.contains('x')) {
        winner1Name();
    } else if(cell4.classList.contains('x') && cell5.classList.contains('x') && cell6.classList.contains('x')) {
        winner1Name();
    } else if(cell7.classList.contains('x') && cell8.classList.contains('x') && cell9.classList.contains('x')) {
        winner1Name();
    } else if(cell1.classList.contains('x') && cell5.classList.contains('x') && cell9.classList.contains('x')) {
        winner1Name();
    } else if(cell7.classList.contains('x') && cell5.classList.contains('x') && cell3.classList.contains('x')) {
        winner1Name();
    } else if(cell2.classList.contains('x') && cell5.classList.contains('x') && cell8.classList.contains('x')) {
        winner1Name();
    } else if(cell1.classList.contains('x') && cell4.classList.contains('x') && cell7.classList.contains('x')) {
        winner1Name();
    } else if(cell3.classList.contains('x') && cell6.classList.contains('x') && cell9.classList.contains('x')) {
        winner1Name();
    }
 }
 const checkIfPlayer2Won = function() {
    if(cell1.classList.contains('o') && cell2.classList.contains('o') && cell3.classList.contains('o')) {
        winner2Name();
    } else if(cell4.classList.contains('o') && cell5.classList.contains('o') && cell6.classList.contains('o')) {
        winner2Name();
    } else if(cell7.classList.contains('o') && cell8.classList.contains('o') && cell9.classList.contains('o')) {
        winner2Name();
    } else if(cell1.classList.contains('o') && cell5.classList.contains('o') && cell9.classList.contains('o')) {
        winner2Name();
    } else if(cell7.classList.contains('o') && cell5.classList.contains('o') && cell3.classList.contains('o')) {
        winner2Name();
    } else if(cell2.classList.contains('o') && cell5.classList.contains('o') && cell8.classList.contains('o')) {
        winner2Name();
    } else if(cell1.classList.contains('o') && cell4.classList.contains('o') && cell7.classList.contains('o')) {
        winner2Name();
    } else if(cell3.classList.contains('o') && cell6.classList.contains('o') && cell9.classList.contains('o')) {
        winner2Name();
    }
 }
 const winner1Name = function(){
    swal({
        title: "Party on Dude!!",
        text: ` PLAYER 1 WINS!!!`,
    })
 }
 const winner2Name = function(){
    swal({
        title: "Party on Dude!!",
        text: ` PLAYER 2 WINS!!!`,
    })
 }
