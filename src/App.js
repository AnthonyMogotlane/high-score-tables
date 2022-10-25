import logo from './logo.svg';
import './App.css';
import Table from './HighScoreTable';
import allCountryScores from './data/allCountryScores';


function App() {
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
        {allCountryScores.map(country => (
          <Table country={country.name} data={country.scores} />
        ))}
    </div>
  );
}

export default App;
