import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';

import { ContextProvider} from './context/ContextContainer';
import LeftPane from './practice/context/LeftPane';
import RightPane from './practice/context/RightPane';

// function App(){
//   return (
//     <ContextProvider>
//       <LeftPane />
//       <RightPane />
//     </ContextProvider>
//   )
// }

function App(){
  return (
    <BrowserRouter>
      <ContextProvider>
        <LayoutContainer />
      </ContextProvider>
    </BrowserRouter>
  ) 
}

export default App;
