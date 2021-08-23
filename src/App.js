import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import Main from './main/Main';
import MbtiList from './mbti/list/MbtiList';
import MbtiGet from './mbti/get/MbtiGet';
function App(){
  return (
    <Layout children = {<MbtiGet mbti="INFP" />}/>
  ) 
}

export default App;
