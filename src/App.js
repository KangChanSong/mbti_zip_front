import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';
import React, { useEffect} from 'react';
import { ContextProvider} from './context/ContextContainer';

const App = () => {
  return (
      <ContextProvider>
        <BrowserRouter>
            <LayoutContainer />
        </BrowserRouter>
      </ContextProvider>
  ) 
}

export default App;
