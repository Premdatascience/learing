import React from 'react';
import Home from './Home';

const HomePage = () => {
  return (
  <>
  <Home />
  <div className='container'>
<h1>Welcome to Homepage which is only visible when you are logged in </h1>
</div>
  </>
  );
}

export default HomePage;