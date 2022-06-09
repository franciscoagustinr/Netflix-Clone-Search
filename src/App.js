import './App.css';
import { NavBar } from './Components/NavBar';
import { Movies } from './Components/Movies';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [last, setLast] = useState('');


  return (
    <div className="App">

      {/* NAVBAR + FORM INPUT  */}
      <NavBar movies={movies} setMovies={setMovies}
        searchValue={searchValue} setSearchValue={setSearchValue}
        last={last} setLast={setLast}
      />

      {/* MOVIES SECTION */}
      <div className='movieContainer 
                      m-auto 
                      p-1 
                      w-10/12'>
        <Movies movies={movies}
          last={last}
        />
      </div>

      <footer>
        <p className='p-4 
                      text-center text-gray-400 hover:text-white 
                      duration-200'>
          <a href="https://franciscoagustinr.github.io/" target='_blank' rel="noopener noreferrer">
            FranciscoAgustínRodríguez
          </a>
        </p>
      </footer>

    </div>

  );
}

export default App;
