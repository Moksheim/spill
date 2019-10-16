//@ts-check

class Keys {
    static keys = new Set();
    static za = document.addEventListener("keydown", Keys.mark)
    static zb = document.addEventListener("keyup", Keys.unmark);
    static mark(e) { Keys.keys.add(e.key); }
    static unmark(e) { Keys.keys.delete(e.key); }
    static any() { return Keys.keys.size > 0; }
    static many() { return Keys.keys.size > 1; }
    static has(a) { return Keys.keys.has(a); }
}

class Bird {
    x;
    y;
    vx = 0;
    vy = 0;
    div;

    constructor(div, x, y) {
        this.div = div;
        this.x = x;
        this.y = y;
    }
    render() {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}

function setup() {
    let divBird = document.getElementById("bird");
    let divHinder1 = document.getElementById("hinder1");
    let divHinder2 = document.getElementById("hinder2");
    let btnStart = document.getElementById("start");
    let divGameover = document.getElementById("gameover");

    let bird;

    btnStart.addEventListener("click", Spill);
    makeBird();

    function Spill() {
        setInterval(fly, 5);
        setInterval(gameover,10);
    }

   

    function makeBird() {
        bird = new Bird(divBird, 300, 200);
        bird.render();
    }



    function tyngdekraft() {
        if (bird.y > 568) {
            return;
        }
        bird.y += 3;
        bird.render();
    }

    function fly() {
        if (bird.y > 568) {
            return;
        }
        if (Keys.has(" ")) {
            bird.y -= 30;
        }
        tyngdekraft();
    }

    function gameover() {
        if (bird.y > 568) {
            let melding = 'Du tapte'
            divGameover.innerHTML = String(melding);
        }
    }

    function tap() {

    }


}




/*

function poeng() {
    let divScore = document.getElementById("score");
    let poeng = 0;
    if (Bird.x = luft.x && Bird.y > 500 && Bird.y < 600) {
        poeng += 1;
    }
    divScore.innerHTML = String(poeng);
}
    }


}
*/