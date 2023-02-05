import React from "react";
import './Quiz.css';

function Quiz() {
    return (
        <div className= "container-horizontal">
        <body className="background">

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
        
        </body>
    
    </div>
    );
 }
 

export default Quiz;