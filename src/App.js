import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import { useEffect } from 'react';

function App() {
  const APIKEY = "d6fa07f6c5abb09eb9064698144d78bb";


    fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKEY}`)
    .then((res)=>res.json())
    .then((result)=> console.log(result));
  

  return (
    <div className="App">
 <Weather />
    </div>
  );
}

export default App;
