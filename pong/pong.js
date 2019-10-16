// @ts-check

function $(element) {
    return document.getElementById(element);
}

function setup() {
    let divBrett = $("brett");
    let divInfo = $("info");
    let divScore = $("score");

    lagPlate();
    lagBall();
    startSpill();

    function lagPlate() {
        let div = document.createElement("div");
        div.className = "plate";
        divBrett.appendChild(div);
    }

    function lagBall() {
        let div = document.createElement("div");
        div.className = "ball";
        divBrett.appendChild(div);
    }

    function startSpill() {
    }
}