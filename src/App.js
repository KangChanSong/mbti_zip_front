import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import Main from './main/Main';
import MbtiList from './mbti/list/MbtiList';
function App(){
  return (
    <Layout children = {<MbtiList />}/>
  ) 
}

export default App;
