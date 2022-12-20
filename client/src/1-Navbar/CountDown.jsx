import React, { useState, useEffect } from 'react';

const CountDown = () => {
    // Declare a state variable called "timeRemaining" and a state setter function called "setTimeRemaining"
    const [timeRemaining, setTimeRemaining] = useState(50 * 60 * 60 + 7 * 60);
  
    // Use the useEffect hook to set up an interval that decrements "timeRemaining" by 1 every second
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeRemaining((prevTimeRemaining) => {
          if (prevTimeRemaining <= 0) {
            // Clear the interval when "timeRemaining" is 0 or less to stop the countdown
            clearInterval(intervalId);
          }
          return prevTimeRemaining - 1;
        });
      }, 1000);
  
      // Return a cleanup function that clears the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, []);
  
    // Calculate the number of hours, minutes, and seconds remaining
    const hours = Math.floor(timeRemaining / (60 * 60));
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    const seconds = timeRemaining % 60;
  
    // Render the countdown timer or "Game Time" depending on the value of "timeRemaining"
    return (
      <div id='countdown'>
        {timeRemaining > 0 ? (
          <>
            {hours}:{minutes}:{seconds}
          </>
        ) : (
          'Game Time'
        )}
      </div>
    );
  };
  
  export default CountDown;
  
