import { useNavigate } from 'react-router-dom'
import './Home.css';

function Home() {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/Quiz')
    }

    return (
        <div>
            <div className="banner">
                <div className="header"><b><h1>FIND YOUR</h1></b></div>
                <div className="paradise"><h1>Paradise</h1></div>
            </div>
            <div className="description"><p>TAKE A SHORT QUIZ AND FIND YOUR HOME AWAY FROM HOME.</p></div>
            <div className="button">
                <button onClick={handleClick}>TAKE THE QUIZ</button>
            </div> 
         </div>       
    );
}

export default Home;