import React, { useEffect, useState } from 'react';
import { getApi } from './request/api';
import Header from './components/headers/Header';
import Landing from './components/landing/Landing';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getApi()
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Quick visual test for Tailwind: should render a red box if Tailwind is working */}
      <div className="m-4">
        <div className="bg-red-500 text-white p-4 rounded">TAILWIND TEST</div>
      </div>

      <main>
        <Landing message={message} />
      </main>
    </div>
  );
}

export default App;