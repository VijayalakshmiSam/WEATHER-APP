import React,{useState,useEffect,setState,Component} from 'react';

const Home2=()=>{
    const[info,setInfo]=useState({
        name:"loading !!",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
    })

    const[location,setCity]=useState("chennai")
    useEffect(()=>
    {
        getWeather(location)},[location]
    )
    const getWeather=(location)=>
    {
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bd2d67a73f2dc8279264a2ca534b5bcc`)
        .then(data=>data.json())
        .then(results=>{
           console.log(results)
           setInfo({
               name:results.name,
               temp:results.main.temp,
               humidity:results.main.humidity,
               desc:results.weather[0].description,

           })
        })
    }
    return(
        <div>
            <h1>Weather API</h1>
            <div>
                 Place:{info.name} <br/>
                 Temperature:{info.temp} <br/>
                 Humidity:{info.humidity} <br/>
                 Description: {info.desc} <br/>
                 Enter the location:<input type="text" value={location} onChange={(e)=>setCity(e.target.value)} />
            </div>
        </div>
    )
}

export default Home2;