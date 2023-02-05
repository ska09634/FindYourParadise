import React from "react";
import './Quiz.css';
import leftIMG from '../images/QuizLeft.png';
import rightIMG from '../images/QuizRight.png'

console.log(leftIMG);

function Quiz() {
    return (
      
        <div className= "container-horizontal">
        <body className="background">
            <img className="picLeft" src={leftIMG} alt="travel icon"/>
            <h1>Quiz </h1>
            <img className="picRight" src={rightIMG} alt="house icon"/>
        <div className="rec">
        <p>Question 1 </p>
        <br></br>
        <p>Question 2</p>
        </div>
        </body>
        
        </div>
      
    );
 }
 

export default Quiz;