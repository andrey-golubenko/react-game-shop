import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer'
import {Shop} from './components/Shop'


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Shop />
      <Footer />
    </>
  );
};

export default App;
