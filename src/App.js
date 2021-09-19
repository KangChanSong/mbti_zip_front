import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';
import React, { useEffect} from 'react';
import axios from 'axios';
import { ContextProvider} from './context/ContextContainer';

const App = () => {

  useEffect(() => {
    const getCookie = async () => {
      await axios.get("/api/v1/cookie/get");
    }

    getCookie();
  },[]);

  return (
      <ContextProvider>
        <BrowserRouter>
            <LayoutContainer />
        </BrowserRouter>
      </ContextProvider>
  ) 
}

export default App;
