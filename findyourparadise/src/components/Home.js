import { useNavigate } from 'react-router-dom'
import './Home.css';
import plane from '../images/plane border.jpg'

console.log(plane);

function Home() {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/Quiz')
    }

    return (
        <div>
            <div className="banner">
                <div className="find"><b><h1>FIND YOUR</h1></b></div>
                <div className="paradise"><h1>Paradise</h1></div>
            </div>
            <div className="description"><p>TAKE A SHORT QUIZ AND FIND YOUR HOME AWAY FROM HOME.</p></div>
            <div className="button">
                <button onClick={handleClick}>TAKE THE QUIZ</button>
            </div> 
            <img className="left" src={plane} alt="plane" width="400px"/>
            <img className="right" src={plane} alt="plane" width="400px"/>
         </div>       
    );
}

export default Home;