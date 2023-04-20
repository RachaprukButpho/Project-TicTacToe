//test git pull
//select id from all the blocks
const block11 = document.getElementById("block11");
const block12 = document.getElementById("block12");
const block13 = document.getElementById("block13");
const block21 = document.getElementById("block21");
const block22 = document.getElementById("block22");
const block23 = document.getElementById("block23");
const block31 = document.getElementById("block31");
const block32 = document.getElementById("block32");
const block33 = document.getElementById("block33");

//select id from text in the blocks
const count11 = document.getElementById("count11");
const count12 = document.getElementById("count12");
const count13 = document.getElementById("count13");
const count21 = document.getElementById("count21");
const count22 = document.getElementById("count22");
const count23 = document.getElementById("count23");
const count31 = document.getElementById("count31");
const count32 = document.getElementById("count32");
const count33 = document.getElementById("count33");

//select id from something, I dont remember
const turn = document.getElementById("turn");
const restart = document.getElementById("restart");
const select = document.getElementById("select");
const win = document.getElementById("win");
const bgm = document.getElementById("bgm");
const draw = document.getElementById("draw");

let x = 1; //use to define whose turn is it rn. X or O
let y = 0; //counter to draw
let choice = ["O", "X"];

//click to put O or X on the blocks
block11.addEventListener("click", upCount11);
block12.addEventListener("click", upCount12);
block13.addEventListener("click", upCount13);
block21.addEventListener("click", upCount21);
block22.addEventListener("click", upCount22);
block23.addEventListener("click", upCount23);
block31.addEventListener("click", upCount31);
block32.addEventListener("click", upCount32);
block33.addEventListener("click", upCount33);

//to play bgm music when restart the game
restart.addEventListener("click", autoBgm());

//setting all the volumes
bgm.volume = 0.1;
select.volume = 0.2;
win.volume = 0.2;
draw.volume = 0.3;

function upCount11() {
    select.play();
    if (x % 2 != 0) {
        count11.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count11.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block11.style.pointerEvents = "none";
    checkWin();
}
function upCount12() {
    select.play();
    if (x % 2 != 0) {
        count12.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count12.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block12.style.pointerEvents = "none";
    checkWin();
}
function upCount13() {
    select.play();
    if (x % 2 != 0) {
        count13.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count13.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block13.style.pointerEvents = "none";
    checkWin();
}
function upCount21() {
    select.play();
    if (x % 2 != 0) {
        count21.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count21.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block21.style.pointerEvents = "none";
    checkWin();
}
function upCount22() {
    select.play();
    if (x % 2 != 0) {
        count22.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count22.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block22.style.pointerEvents = "none";
    checkWin();
}
function upCount23() {
    select.play();
    if (x % 2 != 0) {
        count23.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count23.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block23.style.pointerEvents = "none";
    checkWin();
}
function upCount31() {
    select.play();
    if (x % 2 != 0) {
        count31.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count31.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block31.style.pointerEvents = "none";
    checkWin();
}
function upCount32() {
    select.play();
    if (x % 2 != 0) {
        count32.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count32.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block32.style.pointerEvents = "none";
    checkWin();
}
function upCount33() {
    select.play();
    if (x % 2 != 0) {
        count33.innerText = choice[0];
        turn.innerText = "Player 'X' turn";
    }
    else {
        count33.innerText = choice[1];
        turn.innerText = "Player 'O' turn";
    }
    x += 1;
    y += 1;
    block33.style.pointerEvents = "none";
    checkWin();
}

function checkWin() {
    //check O winner
    if (count11.innerText == choice[0] & count12.innerText == choice[0] & count13.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count21.innerText == choice[0] & count22.innerText == choice[0] & count23.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count31.innerText == choice[0] & count32.innerText == choice[0] & count33.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count11.innerText == choice[0] & count21.innerText == choice[0] & count31.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count12.innerText == choice[0] & count22.innerText == choice[0] & count32.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count13.innerText == choice[0] & count23.innerText == choice[0] & count33.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count13.innerText == choice[0] & count22.innerText == choice[0] & count31.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count11.innerText == choice[0] & count22.innerText == choice[0] & count33.innerText == choice[0]) {
        turn.innerText = "Player 'O' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }

    //check X winner
    else if (count11.innerText == choice[1] & count12.innerText == choice[1] & count13.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count21.innerText == choice[1] & count22.innerText == choice[1] & count23.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count31.innerText == choice[1] & count32.innerText == choice[1] & count33.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count11.innerText == choice[1] & count21.innerText == choice[1] & count31.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count12.innerText == choice[1] & count22.innerText == choice[1] & count32.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count13.innerText == choice[1] & count23.innerText == choice[1] & count33.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count13.innerText == choice[1] & count22.innerText == choice[1] & count31.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (count11.innerText == choice[1] & count22.innerText == choice[1] & count33.innerText == choice[1]) {
        turn.innerText = "Player 'X' win!!"
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        win.play();
        bgm.pause();
    }
    else if (y == 9) {
        turn.innerText = ".......Draw......."
        restart.style.visibility = "visible";
        block11.style.pointerEvents = "none";
        block12.style.pointerEvents = "none";
        block13.style.pointerEvents = "none";
        block21.style.pointerEvents = "none";
        block22.style.pointerEvents = "none";
        block23.style.pointerEvents = "none";
        block31.style.pointerEvents = "none";
        block32.style.pointerEvents = "none";
        block33.style.pointerEvents = "none";
        bgm.pause();
        draw.play();
    }
}

function autoBgm() {
    bgm.play();
}

function muteBgm() {
    bgm.pause();
}

