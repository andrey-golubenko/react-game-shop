import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer'
import {Shop} from './components/Shop'
import {ShopContext} from './ShopContext';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <ShopContext>
          <Shop />
      </ShopContext>
      <Footer />
    </>
  );
};

export default App;