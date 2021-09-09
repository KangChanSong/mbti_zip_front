import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';

import { ContextProvider} from './context/ContextContainer';

import { Provider } from 'react-redux';

function App(){
  return (
    <Provider>
      <ContextProvider>
        <BrowserRouter>
            <LayoutContainer />
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  ) 
}

export default App;
