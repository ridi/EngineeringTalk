import React, { useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<{message: string}>();
  
  const handleOnClick = () => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then((result) => {
        setData(result);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError(error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is manta-frontend.
        </p>
        <div>
          <button onClick={() => handleOnClick()}>Get data</button>
          {error
            ? <p>Error: ${error.message}</p>
              : data
                ? <p>Server: {data?.message}</p>
                : <p>Press the button to get the server message</p>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
