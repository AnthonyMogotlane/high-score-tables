import logo from './logo.svg';
import './App.css';
import Table from './HighScoreTable';

const scores = [{name: "John", score: 39}, {name: "Anthony", score: 32}, {name: "Lebo", score: 60}]

function App() {
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
      <Table country="Sounth Africa" data={scores}/>
      <Table country="Sounth Africa" data={scores}/>
      <Table country="Sounth Africa" data={scores}/>
    </div>
  );
}

export default App;
