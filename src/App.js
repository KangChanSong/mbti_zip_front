import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';

import { ContextProvider} from './context/ContextContainer';

function App(){
  return (
    <ContextProvider>
      <BrowserRouter>
          <LayoutContainer />
      </BrowserRouter>
    </ContextProvider>
  ) 
}

export default App;
