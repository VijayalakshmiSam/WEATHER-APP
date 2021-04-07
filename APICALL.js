import React,{useState,useEffect} from 'react';

const Home=()=>{
    const[info,setInfo]=useState({
        name:"loading !!",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
    })
    useEffect(()=>
    {
        getWeather()
    })
    const getWeather=()=>
    {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=bd2d67a73f2dc8279264a2ca534b5bcc')
        .then(data=>data.json())
        .then(results=>{
           //console.log(results)
           setInfo({
               name:results.name,
               temp:results.main.temp,
               humidity:results.main.humidity,
               desc:results.weather[0].description,
               icon:results.weather[0].icon,

           })
        })
    }

    return(
        <div>
            {/* <Header name="weather app"/> */}
            <h1>Weather API</h1>
            <div>
                 Place:{info.name} <br/>
                 Temperature:{info.temp} <br/>
                 Humidity:{info.humidity} <br/>
                 Description: {info.desc}
            </div>
        </div>
    )
}

export default Home;