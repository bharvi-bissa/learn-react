import './App.css';
import Counter from './Counter'; //

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialValue={0} />
      </header>
    </div>
  );
}

export default App;
