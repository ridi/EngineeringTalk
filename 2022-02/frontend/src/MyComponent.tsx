import { useState } from 'react';


function MyComponent() {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<{message: string}>();
  
  const handleOnClick = () => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then((result) => {
        setData(result);
      },
      (error) => {
        console.log(error);
        setError(error);
      })
  }

  return (
    <div>
      <button onClick={handleOnClick}>Get data</button>
      {error
        ? <div>Error: ${error.message}</div>
          : data
            ? <p>Server: {data?.message}</p>
            : <p>Press the button to get the server message</p>
      }
    </div>
  );
}

export default MyComponent;
