import React from 'react';

import './styles.css'

import WeatherApp from './components/WeatherApp';

function App() {
  return (
      <React.Fragment>
        <header>
          <h1>Weather App</h1>
        </header>

        <main className='mx-1'>
          <WeatherApp/>
        </main>
        
      </React.Fragment>
  );
}

export default App;
