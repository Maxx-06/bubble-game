let timeVal = 20;
let score = 0;
var hitVal;
function makeBubble() {
    var clutter = ''

    for (var i = 1; i <= 102; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function timer() {
    const timerInterval = setInterval(() => {
        if (timeVal > 0) {
            document.querySelector("#timerVal").textContent = timeVal;
            timeVal--;
        }
        else {
            document.querySelector("#pbtm").innerHTML = `<div class="last-div">
            <h2 class="game-over">Game Over✅❤️🫶</h2>
            <button onclick="location.reload()" class="btn">Restart Game</button></div>`;
            clearInterval(timerInterval)
        }
    }, 1000)
}

function hitNum() {
    hitVal = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitVal;
}

function scoreSum() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
    if (details.target.textContent == hitVal) {
        scoreSum();
        makeBubble();
        hitNum();
    }
})



makeBubble();
timer();
hitNum();
