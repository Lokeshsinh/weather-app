import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const handleChange =(e) =>{
    setCity(e.target.value)
  }
  const CheckWeather = (e) =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(response => response.json()
  ).then(data =>{
    const kelvin = data.main.temp
    const clesius = kelvin - 273.15
    setResult("Temperature At "+""+city+""+Math.round(clesius) +""+"°C")
    setCity("")
  }).then(error => console.log(error))
  }

  return (
    <div className="App">
      <div className='app2'>
        <h1>Weather App</h1>
        <div className='app3'>
          <input type='text'  onChange={handleChange} placeholder='Enter Your Location' />
          <button onClick={CheckWeather}>Click</button>
        </div>
        <h2>{result}</h2>
      </div>
     
    </div>
  );
}

export default App;
