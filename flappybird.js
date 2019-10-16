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

    btnStart.addEventListener("click", Spill);

    let bird;

    function Spill() {
        makeBird();
    }


    function makeBird() {
        bird = new Bird(divBird, 300, 200);
        bird.render();
    }

    setInterval(fly, 100);

    function fly() {
        if (Keys.has("space")) {
            bird.y -= 10;
            bird.render();
        }

        bird.y += 2;
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