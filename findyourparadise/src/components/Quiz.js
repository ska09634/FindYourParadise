import React from "react";
import './Quiz.css';
import {useState} from "react";
import leftIMG from '../images/QuizLeft.png';
import rightIMG from '../images/QuizRight.png'


console.log(leftIMG);

function Quiz() {
    const [selects, setSelects]=useState();

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '99198a81c2mshe75bcd720fbf471p195fc0jsnae431783a0d1',
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
        }
      };
      
      fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=200000&lon=-121.4944&lat=38.58157&kinds=beaches&rate=2', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
    return(
      
        <body className="background">
            <img className="picLeft" src={leftIMG} alt="travel icon"/>
            <h1>Quiz </h1>
            <img className="picRight" src={rightIMG} alt="house icon"/>


        <div className="rec">
            <form>
                    
                <label>Question 1: What speaks to you more? Nature, Beaches, Amusement Parks, Museusm, or Sports?</label>
                    <select value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option value="nature">Nature</option>
                        <option value="beaches">Beaches</option>
                        <option value="aparks">Amusement Parks</option>
                        <option value="museums">Museums</option>
                        <option value="sports">Sports</option>
                    </select>
            </form>

        </div>
        </body>
    );
}


export default Quiz;