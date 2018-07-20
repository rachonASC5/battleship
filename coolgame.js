function setup() {
    createCanvas(1001, 1001);
    // background('gray');
}

let x = 0;

function draw() {

    while (x < 951) {
        rect(x, 0, 100, 100);
        rect(x, 100, 100, 100);
        rect(x, 200, 100, 100);
        rect(x, 300, 100, 100);
        rect(x, 400, 100, 100);
        rect(x, 500, 100, 100);
        rect(x, 600, 100, 100);
        rect(x, 700, 100, 100);
        rect(x, 800, 100, 100);
        rect(x, 900, 100, 100);

        x = x + 100;

    }
}

function mouseClicked() {
    line(0, 0, 100, 100);
    line(100, 0, 0, 100);
} 