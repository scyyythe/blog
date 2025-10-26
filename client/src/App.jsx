import React, { useEffect, useState } from 'react';
import { getApi } from './request/api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getApi()
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;