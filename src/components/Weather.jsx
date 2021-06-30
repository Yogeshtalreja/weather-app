import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
const Weather = ()=>{
    return(
<div>
<div className="container">

<div className="cards">
    <h1>Weather Check</h1>
    <h5 className="py-5">
        <i className="wi wi-day-sunny display-1"></i>


    </h5>
    <h1 className="py-2">
        25&deg;
    </h1>
    {minMax(23,56)}
    <div className="py-2">
        Slow Rain
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