import React , {useSelector}from 'react-redux';
import './App.css';
import Header from "./Header";
import Sidebar from './Components/Sidebar';
import Feeds from './Components/Feeds';
import { selectUser } from './features/userSlice';
import Login from './Components/LogPages/Login';


function App() {

const user = useSelector(selectUser)

  return (
    <div className="app">
      
      
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">
              <Sidebar />
              <Feeds />
              {/* Widgets */}
            </div>
        </div>    
      )}
      
        
    </div>
  );
}

export default App;
