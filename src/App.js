import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
 // Import necessary components from v6

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, state) => {
    setAlert({ message: msg, state: state });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(49, 49, 49)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  setTimeout(() => setAlert(null), 5000);

  return (
    <>
      <BrowserRouter>
      <Navbar title={'TextUtils'} toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<TextForm setAlert={setAlert} showAlert={showAlert} mode={mode} heading="Enter Text Here:" />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;