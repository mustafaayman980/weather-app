import React,{Component} from 'react';
import './App.css';
import Form from './components/form';
import Weather from './components/weather';
// https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
const ApiKey="d673eb71952330acc15fef3bec96b65a";
class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }
    
   
  
  
  getWeather =async (e) => {
    e.preventDefault();
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`);

    const data=await api.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      })
    } else {
       this.setState({
          temperature:'',
          city:'',
          country:'',
          humidity:'',
          description:'',
          error:'Enter the data' 
        }) 
      
    }

    
      

    }

    
    render(){
      return (
    <div className="App">
      <div className='container'>
        <span className='info-city'>
       <Weather  city={this.state.city}/>
        </span>
        <img className='info-img' src="8999319.png" alt="img weather"/> 

      <Form getWeather={this.getWeather} />
      <Weather 
        temperature={this.state.temperature}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}

      />

      </div>
      
    </div>
  );

    }
 
}

export default App;

