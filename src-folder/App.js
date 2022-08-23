import './App.css';
import Folder from './Components/Folder'
import explorer from './data/Explorer';
function App() {
  return (
    <div className="App">
      <Folder explorer={explorer}/>
    </div>
  );
}

export default App;
