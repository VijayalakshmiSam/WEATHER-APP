import React,{useState,useEffect} from 'react'

function UserHook()
{
    const[info,setInfo]= useState({
        name:"loading",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
        city:"chennai" //default value 
    })
    
    function fetchData()
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${info.city}&appid=e407e5e811a987fe2d5c853d29e292dc`)
        .then(data=>data.json())
        .then(res=>{
            //console.log(res)
            setInfo({
                name:res.name,
                temp:res.main.temp,
                humidity:res.main.humidity,
                desc:res.weather[0].description,
            })
        })
    }

    useEffect(()=>
    {
        fetchData()
    },[])

    const handleSubmit=e=>
    {
        e.preventDefault()
        fetchData()
    }

    return(
        <div>
            <h2>Weather API</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={info.city} 
                        onChange={e=>setInfo({...info,city: e.target.value})}
                    />
                    <button type="submit">Submit</button> 
                </form>
            </div>
            <div>
                Place:{info.name}<br/>
                Temperature:{info.temp}<br/> 
                Humidity: {info.humidity} <br/>
                Description: {info.desc} 
            </div>
        </div>
    )
}

export default UserHook;