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
    var helloLabel;
    function Init() {
        console.log("Initialization start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        //Initialize CreateJS
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update); // every single tick call update function. 
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game Start...");
        helloLabel = new createjs.Text("Hello World!", "40px Consolate", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map