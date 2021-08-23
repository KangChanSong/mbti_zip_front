import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import Main from './main/Main';
function App(){
  return (
    <Layout children = {<Main />}/>
  ) 
  
}

export default App;
