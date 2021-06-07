const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";
var bgimg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(bgimg) {
    background(bgimg)
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg() {
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11, 13)
    console.log(hour)
    if(hour > 4 && hour < 6) {
    debugger;
    bg = "sunrise1.png"    
    }
    if(hour > 6 && hour < 8) {
    debugger;
    bg = "sunrise2.png"    
    }
    if(hour > 8 && hour < 10) {
    debugger;
    bg = "sunrise3.png"    
    }   
    if(hour > 10 && hour < 12) {
    debugger;
    bg = "sunrise4.png"    
    }
    if(hour > 12 && hour < 14) {
    debugger;
    bg = "sunrise5.png"    
    }
    if(hour > 14 && hour < 16) {
    debugger;
    bg = "sunrise6.png"    
    }
    if(hour > 16 && hour < 18) {
    debugger;
    bg = "sunset7.png"    
    }
    if(hour > 18 && hour < 20) {
    debugger;
    bg = "sunset8.png"    
    }
    if(hour > 20 && hour < 22) {
    debugger;
    bg = "sunset9.png"    
    }
    if(hour > 22 && hour < 24) {
    debugger;    
    bg = "sunset10.png"    
    }
    if(hour > 24 && hour < 2) {
    debugger;    
    bg = "sunset11.png"    
    }
    if(hour > 2 && hour < 4) {
    debugger;
    bg = "sunset12.png"    
    }
    
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset

    bgimg = loadImage(bg)
    //load the image in backgroundImg variable here

}
