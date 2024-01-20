import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light'); // default dark mode is false
  const [alert, setAlert] = useState(null);

  const showAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#241c51";
      showAlertMessage('Dark Mode Enabled!', 'success');
      document.title = 'Text Modifier - Dark Mode' // change title of page
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlertMessage('Light Mode Enabled!', 'success');
      document.title = 'Text Modifier - Light Mode' // change title of page
    }
  }
  return (
    <>
    <Router>
      {/* title is called props */}
      <Navbar title="Text Editor" aboutText="About Us" mode={mode} toggle={toggleMode} />
      <Alert message={alert} />
      <div className='container my-3'>
          <Routes>
            {/*exact path --> used for complete matching of the url */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="" element={<TextForm alert={showAlertMessage} textLabel="Enter Text to Analyze Below: " mode={mode} />} />
          </Routes>
      </div>
      {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
