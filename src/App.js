import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// router
const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <Router>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='general' />}></Route>
        <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='business' />}></Route>
        <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='entertainment' />}></Route>
        <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='general' />}></Route>
        <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='health' />}></Route>
        <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='science' />}></Route>
        <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='sports' />}></Route>
        <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} country="in" category='technology' />}></Route>
        </Routes>
      </Router>
    )
  }

  export default App;
