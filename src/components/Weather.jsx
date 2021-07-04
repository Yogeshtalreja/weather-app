import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
const Weather = (props)=>{
    const temp = {tempr : props.data.main.temp , min_temp : props.data.main.temp_min , max_temp:props.data.main.temp_max};
    return(
<div>
<div className="container">

<div className="cards">
    <h1>Weather Check</h1>
    <h5 className="py-5">
        <i className="wi wi-day-sunny display-1"></i>


    </h5>
    <h1 className="py-2">
        {Math.floor(temp.tempr-273.15)}&deg;
    </h1>
    {minMax(Math.floor(temp.min_temp-273.15),Math.floor(temp.max_temp-273.15))}
    <div className="py-2">
        {props.data.weather[0].description}
    </div>
</div>

</div>

</div>


    );


}

const minMax = (min,max) =>{
    return(
<h3>
    <span className="px-4">
        Min = {min}&deg; 
    </span>
    <span className="px-4">
        Max = {max}&deg; 
    </span>
</h3>
    );
}

export default Weather;