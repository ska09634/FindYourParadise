import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Quiz from './components/Quiz';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
