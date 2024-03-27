import search_icon from '../Assets/search.png'
import weather from '../Assets/temp.png'
import humidity from '../Assets/humidity.png'
import wind from '../Assets/wind.png'
import './WeatherApp.css'
function WeatherApp() {
    let api_key = `895284fb2d2c50a520ea537456963d9c`
    const search = async() => {
        const element = document.getElementsByClassName('cityInput')
        if(element[0].value==='') {
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`
     
        let response =await fetch(url)
        let data = await response.json()
        const humidity = document.getElementsByClassName('humidity-percent')
        const wind = document.getElementsByClassName('wind-rate')
        const tempereture = document.getElementsByClassName('weather-temp')
        const location = document.getElementsByClassName('weather-location')
        humidity[0].innerHTML = data.main.humidity+'%'
        wind[0].innerHTML = data.wind.speed+'km/h'
        tempereture[0].innerHTML = data.main.temp+'°c'
        location[0].innerHTML = data.name
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="search-icon" onClick={() => {search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={weather} alt="" />
        </div>
        <div className="weather-temp">°c</div>
        <div className="weather-location"></div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind} alt="" className='icon'/>
                <div className="data">
                    <div className="wind-rate"> km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp