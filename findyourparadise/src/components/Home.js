import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Home() {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/Quiz')
    }

    return (
        <div>
            <div className="header"><h1>FIND YOUR</h1></div>
            <div className="paradise"><h1>Paradise</h1></div>
            <div className="description"><p>TAKE A SHORT QUIZ AND FIND YOUR HOME AWAY FROM HOME.</p></div>
            <div className="button">
                <button onClick={handleClick}>Quiz</button>
            </div> 
         </div>       
    );
}

export default Home;