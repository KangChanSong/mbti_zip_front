import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import LayoutContainer from './layout/LayoutContainer';


function App(){
  return (
    <BrowserRouter>
      <LayoutContainer />
    </BrowserRouter>
  ) 
}

export default App;
