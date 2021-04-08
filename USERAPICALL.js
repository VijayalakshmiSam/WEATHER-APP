import React,{Component} from 'react';

class UserApiCall extends Component 
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            city:'chennai',
            name:'',
            temp:'',
            humidity:'',
            desc:''
        };

        this.updateValue=this.updateValue.bind(this);
        this.submit=this.submit.bind(this);
    }
    
    updateValue=(event)=>
    {
        this.setState
        ({
            city: event.target.value,
        })
        
    }
    
    submit=event=>
    {
        event.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=bd2d67a73f2dc8279264a2ca534b5bcc`)
        .then(data=>data.json())
        .then(results=>{
           //console.log(results)
           this.setState
           ({
               name:results.name,
               temp:results.main.temp,
               humidity:results.main.humidity,
               desc:results.weather[0].description,
           })
        })
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <label>Enter the location:
                            <input type="text" 
                                   value={this.state.city} 
                                   onChange={this.updateValue}/>
                        </label>
                    </div>
                    <br/>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    <div>
                       Place:{this.state.name}        <br/>
                       Temperature:{this.state.temp}  <br/>
                       Humidity:{this.state.humidity} <br/>
                       Description: {this.state.desc} <br/>
                    </div> 
                </form>
            </div>
        )
    }
}

export default UserApiCall;
