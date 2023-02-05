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

        
            <form>
                    
                <label>Question 1: What speaks to you more? Nature, Beaches, Amusement Parks, Museusm, or Sports?</label>
                    <select>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <select>
                        <option value="nature">Nature</option>
                        <option value="beaches">Beaches</option>
                        <option value="aparks">Amusement Parks</option>
                        <option value="museums">Museums</option>
                        <option value="sports">Sports</option>
                    </select>
            </form>

        </div>
        </body>
        
        </div>
      
    );
 }
 

export default Quiz;