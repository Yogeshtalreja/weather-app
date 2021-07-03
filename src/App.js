import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import { useEffect, useState } from 'react';
import {Form , Button} from 'react-bootstrap';
function App() {
  const APIKEY = 'de66fbb1ed3365202fef510725ba0786';
  const [data,setData] = useState({});
 const [state , setState] = useState({
   city : '',
   Country : ''
 });
   const onClick = () =>{
    console.log(state);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state.city},${state.Country}&appid=${APIKEY}`)
    .then((res)=>res.json())
    .then((total)=>{
     setData(total);
     console.log(total);
     
     }
    
    );
  
  }

  const handleChange = ((e)=>{
      console.log(e.target.name); 
      
    if(e.target.name === 'city'){
        
          setState({...state,city: e.target.value})
          console.log(state);
      }
      if(e.target.name === 'country'){
        setState({...state,Country:e.target.value});
        console.log(state);
      }
  })

  console.log(data)

  return (
    <div className="App">
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>City Name</Form.Label>
    <Form.Control type="text" placeholder="Enter City" value={state.city} name="city" onChange={handleChange} />
    <Form.Text className="text-muted">
      Please Enter City Name 
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Country Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Country" name="country" value={state.Country} onChange={handleChange}/>
    <Form.Text className="text-muted">
      Please Enter Country Name 
    </Form.Text>
  </Form.Group>
<Button variant="primary" onClick={onClick}>
    Submit
  </Button>
</Form>
      <Weather data={data}/>
    </div>
  );
}

export default App;
