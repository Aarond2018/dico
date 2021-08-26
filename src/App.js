import react, {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main.js';
import word from './data'


/* import logo from './logo.svg'; */
import './App.css';

function App() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData("classification")
  }, [])

  const fetchData =(word) => {
    setLoading(true)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => {
      setState(...data);
      setLoading(false);
    })
  }

  console.log(state)

  return (
    <div className="App">
      <Header fetchData={fetchData}/>
      <Main data={state} loading={loading}/>
    </div>
  );
}

export default App;
