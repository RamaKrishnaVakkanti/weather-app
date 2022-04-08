import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="inner-app">
        <div className="header">
          <h1>Weather App</h1>
        </div>
        <div className="search">
          <input type="text" className="textBox" placeholder="New York"></input>
        </div>
        <div className="middle">
        <div className="about">
          <div className="about-inner">
            <p>New York, US </p>
            <p>Friday, 8th April</p>
            <div className="about-cloud"></div>
          </div>
          <div className="about-data">
            <div className="degree">
              <h1 className="degree-value">5 </h1>
            </div>
            <div className="degree-symbol">
              <p>o</p>
            </div>
          </div>
          Overcast Clouds
        </div>
        <div className="details">
          <div className="details-1">
            <div className="details-inner">
              <div>6 <span>&#8451;</span></div>
              <div >High</div> 
            </div>
            <div className="details-inner">
            <div >3 <span>&#8451;</span></div>
              <div >Low</div> 
            </div>
          </div>
          <div className="details-2">
          <div className="details-inner">
              <div >3.1mph</div>
              <div >Wind</div> 
            </div>
            <div className="details-inner">
            <div >70%</div>
              <div >Rain</div> 
            </div>
          </div>
          <div className="details-3">
          <div className="details-inner">
              <div >6:20</div>
              <div >Sunrise</div> 
            </div>
            <div className="details-inner">
            <div >7:10</div>
              <div >Sunset</div> 
            </div>
          </div>
        </div>
          </div>
        <div className="forecast">
         <div className="forecast-heading"> Forecast</div>
        <div className="forecast-inner">
              <div>4th April</div>
              <div>05:00</div>
              <div className="forecast-image1"></div>
              <div>4 <span>&#8451;</span></div>
            </div>
            <div className="forecast-inner">
              <div>4th April</div>
              <div>08:00</div>
              <div className="forecast-image2"></div>
              <div>6 <span>&#8451;</span></div>
            </div>
            <div className="forecast-inner">
              <div>4th April</div>
              <div>11:00</div>
              <div className="forecast-image3"></div>
              <div>7 <span>&#8451;</span></div>
            </div>
            <div className="forecast-inner">
              <div>4th April</div>
              <div>14:00</div>
              <div className="forecast-image4"></div>
              <div>10 <span>&#8451;</span></div>
            </div>
            <div className="forecast-inner">
              <div>4th April</div>
              <div>17:00</div>
              <div className="forecast-image5"></div>
              <div>10 <span>&#8451;</span></div>
            </div>
            <div className="forecast-inner">
              <div>4th April</div>
              <div>20:00</div>
              <div className="forecast-image6"></div>
              <div>9 <span>&#8451;</span></div>
            </div>
            <div className="forecast-inner">
              <div>4th April</div>
              <div>23:00</div>
              <div className="forecast-image7"></div>
              <div>5 <span>&#8451;</span></div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default App;
