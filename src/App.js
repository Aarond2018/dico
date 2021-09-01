import react, {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main.js';
import word from './data'


/* import logo from './logo.svg'; */
import './App.css';

function App() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData("a")
  }, [])

  const fetchData = async (word) => {
    setLoading(true);
    setError(null)
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      
      const data = await response.json();

      if(response.status === 404) {
        throw new Error(data.title);
      }

      if (!response.ok) {
        throw new Error("An error occurred..")
      }

      setState(...data)
    } catch (error) {
      setError(error.message)
    }

    
    setLoading(false);
  }

  return (
    <div className="App">
      <Header fetchData={fetchData}/>
      {!error && <Main data={state} loading={loading} fetchData={fetchData} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
