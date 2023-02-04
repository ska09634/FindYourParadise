import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/results' element={<Results/>}></Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
