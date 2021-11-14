import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark Mode Enabled", "success");
      document.title = 'TextUtils-Dark Mode'
      // setInterval(() => {
      //   document.title='TextUtils is Amazing'
      // }, 1500);
      // setInterval(() => {
      //   document.title='TextUtils Install Now'
      // }, 2000);
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'TextUtils-Light Mode'
    }
  }

  return (
    <>
        <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode} />}/>  
            {/* <TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
