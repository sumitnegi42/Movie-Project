import React  from 'react';
import './App.css';
import MovieApp from './component/MovieApp'
import Data from './data.json';
function App() {
  // const [data, setData] = useState(Data)
  return (
    <div>
     <h1 style={{textAlign:"center"}}>
      MOVIES
     </h1>
    <MovieApp send={Data}/>
    </div>
  );
}

export default App;
