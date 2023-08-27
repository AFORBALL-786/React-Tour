import React, { useState } from 'react';
import data from './data';
import Tour from "./components/Tour";
import './App.css';

const App = () => {

  const [tours,setTour] = useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTour(newTours);
  }

  function refreshHandler() {
    setTour(data);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tour Left</h2>
        <button className='reset-btn' onClick={refreshHandler}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Tour tours = {tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
