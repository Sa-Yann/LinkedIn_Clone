import './App.css';
import Header from "./Header";
import Sidebar from './Components/Sidebar';
import Feeds from './Components/Feeds';

function App() {
  return (
    <div className="app">
      {/* <h1>Building a LinkedIn Clone</h1> */}
  
      <Header />
      {/* App Body */}
      <div className="app__body">
          
          <Sidebar />
          <Feeds />
          {/* Widgets */}
      </div>
        
    </div>
  );
}

export default App;
