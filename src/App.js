import './App.css';
import './assets/css/Menu.css';
import { BrowserRouter as Router } from "react-router-dom";
import Sidemenu from './Dashboard/Sidebar/Sidemenu';
import Header from '../src/Dashboard/Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      {/* <Header/> */}
        <Sidemenu />
      </Router>
    </div>
  );
}
export default App;
