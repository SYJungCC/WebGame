// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function () {
    //Global Game Variables
    var canvas = document.getElementById("canvas"); // if you change canvas name, you should change this "name"
    var stage; // think unity scene. 
    var helloLabel; //I made objects class, that's why the name is objects
    var clickableButton;
    function Init() {
        console.log("Initialization start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        //Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update); // every single tick call update function. 
        Main();
    }
    function Update() {
        helloLabel.rotation += 1;
        stage.update();
    }
    function Main() {
        console.log("Game Start...");
        helloLabel = new objects.Label("I wanna go home!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickableButton = new objects.Button("./Assets/Sprites/UIpack/PNG/blue_button00.png", 320, 340);
        clickableButton.regX = clickableButton.getBounds().width * 0.5;
        clickableButton.regY = clickableButton.getBounds().height * 0.5;
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);
        /*
        clickableButton = new createjs.Bitmap("./Assets/Sprites/UIpack/PNG/blue_button00.png");
        clickableButton.regX = clickableButton.getBounds().width * 0.5;
        clickableButton.regY = clickableButton.getBounds().height * 0.5;
        clickableButton.x = 320;
        clickableButton.y = 340;
        stage.addChild(clickableButton);
        
        clickableButton.on("mouseover",clickableButtonMouseOver);
        clickableButton.on("mouseout",clickableButtonMouseOut);
        clickableButton.on("click",clickableButtonMouseClick);
        */
    }
    /*
        BUTTON EVENT LISTENER FUNCTIONS
    */
    function clickableButtonMouseOver() {
        clickableButton.alpha = 0.7;
    }
    function clickableButtonMouseOut() {
        clickableButton.alpha = 1.0;
    }
    function clickableButtonMouseClick() {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map