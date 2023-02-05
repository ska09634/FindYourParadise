import React from "react";
import './Quiz.css';
import Axios from "axios";
import {useState} from "react";
import leftIMG from '../images/QuizLeft.png';
import rightIMG from '../images/QuizRight.png'
import { useNavigate } from 'react-router-dom'


console.log(leftIMG);

function Quiz() {
    // const [selects, setSelects]=useState();

    const url = "https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=200000&lon=-121.4944&lat=38.58157&kinds=beaches&rate=2"; 
    const [data, setData] = useState({
        place: "",
        radius:""
    })

    const [paradise, setParadise] = useState("");

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '99198a81c2mshe75bcd720fbf471p195fc0jsnae431783a0d1',
          'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
        }
      };


    function submit(e) {
        e.preventDefault(); 
        Axios.post(url, {
            place: data.place,
            radius: data.radius
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    var nPlace = ""; 
    var nRadius ="";
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
        nPlace = newdata.place
        //console.log("the new place is", nPlace)
    }
    nPlace = data.place;
    nRadius = data.radius;
   // console.log("nPlace is ", nPlace);
   console.log("nRadius is ", nRadius);

    let navigate = useNavigate();

    var rateURL = "&rate=3";
    //url https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=200000&lon=-121.4944&lat=38.58157&kinds=beaches&rate=2'
    var firstURL = 'https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=200000&lon=-121.4944&lat=38.58157&kinds=';
    var fullURL = firstURL + nPlace + rateURL;
    


    var oneURL = "https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=";
    var twoURL = "&lon=-121.4944&lat=38.58157&kinds=";
    var fullURLL = oneURL + nRadius + twoURL + nPlace + rateURL;  
    console.log("the full url is ", fullURLL);

      const handleClick = () => {
        console.log("handle the submit");
        fetch(fullURL, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        //navigate('/Results')
        console.log("after...");

      }

      
      
//   ---------------------------------------

    // var state = {
    //     value: ''
    // };

    // const getValue = (event) => {
    //     console.log("Place: ", event.target.value);

    //     this.setState({value: event.target.value});
    // }

 
    
    return(
      
        <body className="background">
            <img className="picLeft" src={leftIMG} alt="travel icon"/>
            <h1>QUIZ</h1>
            <img className="picRight" src={rightIMG} alt="house icon"/>


            <div className="rec">
                

                <form onSubmit={(e) =>submit(e)}>
                    <label>Question 1: What speaks to you more? Nature, Beaches, Amusement Parks, Museums, or Sports?</label>
                        <select id="place" name="" value={data.place} onChange={(e)=> handle(e)}>
                            <option id="natural" value="natural">Nature</option>
                            <option id="beaches" value="beaches">Beaches</option>
                            <option id="aparks" value="amusement_parks">Amusement Parks</option>
                            <option id="museums" value="museums">Museums</option>
                            <option id="sports" value="sports">Sports</option>
                        </select>

                        <label>Question 2: Are you traveling with children?</label>
                        <select id="child" name="" value={data.child} onChange={(e)=> handle(e)}>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                            <option value="not sure">not sure</option>
                        </select>

                        <label>Question 3: Where are you located? How far are you traveling?</label>
                        <select id="radius" name="" value={data.radius} onChange={(e)=> handle(e)}>
                            <option value="50000">50000m</option>
                            <option value="100000">100000m</option>
                            <option value="500000m">500000m</option>
                        </select>

                    <div className="buttonform">
                        <button onClick={handleClick}>SHOW ME MY RESULTS!</button>
                    </div>
                </form>

                <p> Your new paradise is {paradise} </p>

            </div>



        </body>
    );
}


export default Quiz;