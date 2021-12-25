
import './App.css';
import Header from './Componets/Header';
import Home from './Componets/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

function App() {
  React.useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className="App">
    <Header />
    <Home />
    </div>
  );
}

export default App;
