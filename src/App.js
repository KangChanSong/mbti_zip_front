import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import Main from './main/Main';
import MbtiList from './mbti/list/MbtiList';
import MbtiGet from './mbti/get/MbtiGet';
import JobList from './job/list/JobList';
function App(){
  return (
    <Layout children = {<JobList />}/>
  ) 
}

export default App;
