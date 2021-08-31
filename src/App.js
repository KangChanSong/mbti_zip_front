import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';

import { VoteChartProvider} from './context/MbtiCountContext';
import LeftPane from './practice/context/LeftPane';
import RightPane from './practice/context/RightPane';

function App(){
  return (
    <VoteChartProvider>
      <LeftPane />
      <RightPane />
    </VoteChartProvider>
  )
}

// function App(){
//   return (
//     <BrowserRouter>
//       <LayoutContainer />
//     </BrowserRouter>
//   ) 
// }

export default App;
