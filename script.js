window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    ///resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //console.log("hello");

    //drawing the rectangle that delimits the drawing space
    //values will be changed later
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeText('Guess My Draw', window.innerWidth / 2, 20);

    ctx.lineWidth = 5;
    ctx.strokeRect(window.innerWidth / 4, window.innerHeight / 8, 
        window.innerWidth / 2, window.innerHeight / 5 * 3);

    // placeholders for future things
    ctx.fillText("List of players", 30
        , 30)
    ctx.strokeRect(10, 10
        , (window.innerWidth / 4) - 20
        , window.innerHeight - 20);


    ctx.fillText("Chat/answers", window.innerWidth / 4 * 3 + 30
        , 30)

    ctx.strokeRect(window.innerWidth / 4 * 3 + 10
        , 10
        , (window.innerWidth / 4) - 20
        , window.innerHeight - 20);


    ctx.fillText("Drawing options", window.innerWidth / 4 + 30
        , window.innerHeight / 4 * 3 + 30)

    ctx.strokeRect(window.innerWidth / 4 + 10
        , window.innerHeight / 4 * 3 + 10
        , (window.innerWidth / 2) - 20
        , window.innerHeight / 4 - 20);

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 10; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(85 * i) + ', ' +
                Math.floor(21.25 * j) + ', ' + Math.floor(255 - 21.25 * j) + ')';
            ctx.fillRect(j * 30 + 420, i * 30 + 540, 30, 30);
        }
    }

    ctx.strokeStyle = "red";
    ctx.beginPath();

    //variables
    let painting = false;

    //functions
    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 4;
        ctx.lineCap = "round";

        /*(window.innerWidth / 4, window.innerHeight / 8, 
        window.innerWidth / 2, window.innerHeight / 5 * 3) */

        //test to see if the drawing occurs in the drawing rectangle
        /*if (e.clientY >= window.innerHeight / 8 + 5
            && e.clientY <= window.innerHeight / 5 * 3 - 5
            && e.clientX >= window.innerWidth / 4 + 5
            && e.clientX <= window.innerWidth / 2 - 5)
            ctx.lineTo(e.clientX, e.clientY);*/
        if (e.clientX >= window.innerWidth / 4 + 2.5
            && e.clientX <= window.innerWidth / (4 / 3)- 2.5
            && e.clientY >= window.innerHeight / 8 + 2.5
            && e.clientY <= window.innerHeight / 8 + window.innerHeight / (5 / 3) - 2.5)
            ctx.lineTo(e.clientX, e.clientY);
        //ctx.fillRect(e.clientX,e.clientY,20,20);
        ctx.stroke();

        //I haven't found a nice way to draw points yet


    }
    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
})

window.addEventListener('resize', function (event) {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});