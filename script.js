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
    ctx.lineWidth = 5;
    ctx.strokeRect(window.innerWidth/4,window.innerHeight/4
                    ,(window.innerWidth/4)*2
                    ,(window.innerHeight/4)*2);
   
    // placeholders for future things
    ctx.fillText("List of players", 30 
                                    , 30)
    ctx.strokeRect(10,10
                        ,(window.innerWidth/4)-20
                        ,window.innerHeight-20);
    
    
    ctx.fillText("Chat/answers", window.innerWidth/4*3+30 
                        , 30)

    ctx.strokeRect(window.innerWidth/4*3+10
                        ,10
                            ,(window.innerWidth/4)-20
                            ,window.innerHeight-20);
    
    
    ctx.fillText("Drawing options", window.innerWidth/4+30 
                            , window.innerHeight/4*3+30)
    
    ctx.strokeRect(window.innerWidth/4+10
                            ,window.innerHeight/4*3+10
                                ,(window.innerWidth/2)-20
                                ,window.innerHeight/4-20);                        
                            /*
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(400,400);
    ctx.lineTo(400,100);
    ctx.stroke();
        */

    ctx.strokeStyle = "red";
    ctx.beginPath();

    //variables
    let painting = false;

    //functions
    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 13;
        ctx.lineCap = "round";

        //test to see if the drawing occurs in the drawing rectangle
        if (e.clientY >= window.innerHeight/4 
            && e.clientY <= (window.innerHeight/4)*3
            && e.clientX >= window.innerWidth/4 
            && e.clientX <= (window.innerWidth/4)*3)
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

window.addEventListener('resize', function(event) {
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth;
});