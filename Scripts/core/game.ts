// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function() {

    //Global Game Variables
    let canvas = document.getElementById("canvas"); // if you change canvas name, you should change this "name"
    let stage:createjs.Stage; // think unity scene. 
    let helloLabel: objects.Label; //I made objects class, that's why the name is objects
    let clickableButton: createjs.Bitmap;

    function Init() : void {
        console.log("Initialization start");
        Start();
    }

    
    function Start() : void
    {
        console.log("Starting Application...");

        //Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);  
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick",Update); // every single tick call update function. 
        Main();
    }

    function Update() : void
    {

        
        helloLabel.rotation +=1;

        stage.update();


    }

    function Main() : void
    {
        console.log("Game Start...");
        helloLabel = new objects.Label("I wanna go home!", "40px","Consolas", "#000000", 320, 240, true);
        clickableButton = new createjs.Bitmap("./Assets/Sprites/UIpack/cliablebutton.png");
        stage.addChild(helloLabel);
    }


    window.onload = Init;

})();