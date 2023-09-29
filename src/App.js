import Navbar from './Navbar';
import Home from './Home';

function App() {

  const console = (e) => {
    alert(e.target.value)
  }


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <button onClick={() => console()}>console.log</button>
        <input type="text" onClick={(e) => console(e)} />
      </div>
    </div>
  );

}

export default App;
