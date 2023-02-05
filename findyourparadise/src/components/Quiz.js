import React from "react";
import './Quiz.css';
import Axios from "axios";
import {useState} from "react";
import leftIMG from '../images/QuizLeft.png';
import rightIMG from '../images/QuizRight.png'
import { useNavigate } from 'react-router-dom'


console.log(leftIMG);

function Quiz() {
    const [selects, setSelects]=useState();

    const url = "https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=200000&lon=-121.4944&lat=38.58157&kinds=beaches&rate=2"; 
    const [data, setData] = useState({
        place: ""
    })

    function submit(e) {
        e.preventDefault(); 
        Axios.post(url, {
            place: data.place
        })
        .the(res=>{
            console.log(res.data)
        })
    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    let navigate = useNavigate();
    // function handleClick() {
    //     navigate('/Results')
    // }

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '99198a81c2mshe75bcd720fbf471p195fc0jsnae431783a0d1',
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
        }
      };

      const handleClick = () => {
        console.log("handle the submit");
        fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=200000&lon=-121.4944&lat=38.58157&kinds=beaches&rate=2', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        navigate('/Results')
        console.log("after...");
      }
      
  
    
    return(
      
        <body className="background">
            <img className="picLeft" src={leftIMG} alt="travel icon"/>
            <h1>QUIZ</h1>
            <img className="picRight" src={rightIMG} alt="house icon"/>


        <div className="rec">
            <form>
                <label>Question 1: What speaks to you more? Nature, Beaches, Amusement Parks, Museums, or Sports?</label>
                    <select value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option value="nature">Nature</option>
                        <option value="beaches">Beaches</option>
                        <option value="aparks">Amusement Parks</option>
                        <option value="museums">Museums</option>
                        <option value="sports">Sports</option>
                    </select>

                    <label>Question 2: Are you traveling with children?</label>
                    <select value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                        <option value="not sure">not sure</option>
                    </select>

                    <label>Question 3: Where are you located? How far are you traveling?</label>
                    <select value={selects} onChange={e=>setSelects(e.target.value)}>
                        <option value="1000m-4999m">1000m-4999m</option>
                        <option value="5000m-9999m">5000m-9999m</option>
                        <option value="10000m-15000m">10000m-15000m</option>
                    </select>

                    <div className="buttonform">
                <button onClick={handleClick}>SHOW ME MY RESULTS!</button>
            </div>
            </form>

           <div class="result-box"> 
           
           
           </div>

        </div>
        </body>
    );
}


export default Quiz;