import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import style from "./p5Canvas.module.css"
import P5 from "p5"
import {getRandomFloat, getRandomColor} from "../../Helper/helperFunctions.ts"

let p5;

let leftEye,rightEye,leftEyeBrow,rightEyeBrow,
    leftEyePoint,rightEyePoint;

const sketch = ( p ) => {

    p.setup = () => {
        p5 = p;
        p5.createCanvas(window.innerWidth, window.innerHeight);

        leftEye= new Circle(p5.width/2 - 150,p5.height/2-100,200,false)
        leftEyePoint = new Circle(p5.width/2 - 150,p5.height/2-100,60,true)

        rightEye = new Circle(p5.width/2 + 150,p5.height/2-100,200,false)
        rightEyePoint = new Circle(p5.width/2 + 150,p5.height/2-100,60,true)

        leftEyeBrow = new Rectangle(p5.width/2-260,p5.height/2-260,200,34);
        rightEyeBrow = new Rectangle(p5.width/2+50,p5.height/2-260,200,34);
       
    };
  
    p.draw = () => {
        p5.background(255, 215, 180);

        leftEye= new Circle(p5.width/2 - 150,p5.height/2-100,200,false)
        rightEye = new Circle(p5.width/2 + 150,p5.height/2-100,200,false)

        if(p5.mouseY > leftEye.y + 400 &&
            p5.mouseX > leftEye.x - 300 && 
            p5.mouseX < rightEye.x + 300) 
        {
            leftEyePoint.lookAtDown()
            rightEyePoint.lookAtDown()
        } 
        if(p5.mouseY > leftEye.y + 400 && p5.mouseX < leftEye.x - 300) 
        {
            leftEyePoint.lookAtDownLeft()
            rightEyePoint.lookAtDownLeft()
        } 



        if(p5.mouseY < leftEye.y + 400 && 
            p5.mouseX > leftEye.x - 300 && 
            p5.mouseX < rightEye.x + 300){
            leftEyePoint.center();
            rightEyePoint.center();
        }
        
    };
};

class Rectangle{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.init();
    }

    init(){
        p5.push();
        p5.fill(215, 127, 4)
        p5.noStroke()
        p5.rect(this.x,this.y,this.width,this.height)
        p5.pop();
    }
}

class Circle{
    constructor(x,y,radius,fill){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.fill = fill;

        this.init();
    }

    init(){
        if(this.fill){
            p5.push();
            p5.fill(41, 26, 5)
            p5.noStroke()
            p5.circle(this.x,this.y,this.radius)
            p5.pop();
            
        } else {
            p5.push();
            p5.stroke(179, 88, 8)
            p5.fill(255, 234, 215)
            p5.strokeWeight(10)
            p5.circle(this.x,this.y,this.radius)
            p5.pop();
        }
    }

    lookAtDown(){

        if(this.x < rightEye.x){
            if(this.y < p5.height/2 - 40){
                this.y += 5;
            }
            if(this.x < p5.width/2 - 150){
                this.x += 3.6;
            }
        }
        
        p5.push();
        p5.fill(41, 26, 5)
        p5.noStroke()
        p5.circle(this.x,this.y,this.radius) 
        p5.pop();
    }

    lookAtDownLeft(){

        if(this.x < rightEye.x){
            if(this.x > p5.width/2 - 200){
                this.x -= 5;
            }
            if(this.y > p5.width/2 -520){
                this.y -= 2;
            }
            if(this.y < p5.width/2 -520){
                this.y += 2;
            }
        }

       
        
        
        p5.push();
        p5.fill(41, 26, 5)
        p5.noStroke()
        p5.circle(this.x,this.y,this.radius) 
        p5.pop();
    }

    center(){
        if(this.y > p5.height/2-100){
            this.y -= 5;
        }
        
        p5.push();
        p5.fill(41, 26, 5)
        p5.noStroke()
        p5.circle(this.x,this.y,this.radius) 
        p5.pop();
    }

}

const P5Canvas = () => {

    const canvasRef = useRef();

    useEffect(() => {
        const p5 = new P5(sketch,canvasRef.current)

        return () => {
            p5.remove();
        } 

    }, [])

  return (
    <div ref={canvasRef} >

    </div>
  )
}

export default P5Canvas