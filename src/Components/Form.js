import React from 'react'

export const Form = ({setMovies, searchValue, setSearchValue, setLast}) => {

  const apiKey = "k_cz3ov99h"; 
  const url = `https://imdb-api.com/API/Search/${apiKey}/${searchValue}`; 
  
  // SETEAR SEARCH VALUE -> INPUT VALUE 
  const onChange = (e) => {
    setSearchValue(e.target.value);
  }

  // ENVIAR FORM
  const onSubmit = (e) => {
    e.preventDefault(); 
    
    // ALERTA SI EL INPUT ESTÁ VACÍO
    if ( !searchValue ) {
      alert("Add a title!"); 
      return; 
    }

    // AL ENVIAR FORMULARIO TRAER DATOS DE LA API CON EL VALOR BUSCADO
    fetch(url)
      .then (res => res.json())
      .then (data => {
        console.log(`La película buscada es: ${searchValue}`);
        console.log(data.results); 
        // SETEAR MOVIES
        setMovies(data.results); 
      })
      .catch((error) => {
        console.log(error); 
      })

      // LIMPIAR INPUT
      setSearchValue('');
      // SETEAR LAST CON ÚLTIMO VALOR BUSCADO
      setLast(searchValue); 
  }

  const clearSearchTarget = () => {
    // LIMPIAR SEARCH VALUE
    setSearchValue(''); 
  }

  return (

        <form className='form 
                         flex content-center items-center  
                         px-2 
                         mr-5 
                         bg-transparent 
                         border rounded-3xl border-gray-600  
                        '
              onSubmit={onSubmit}
        >
        <box-icon name='search' 
                  color='#eae6e6' 
                  onClick={onSubmit}
        />
        <input type='text' 
              className='p-1 
                         ml-1 
                         bg-transparent 
                         outline-none 
                         text-white'
              placeholder='Search by title'
              value={searchValue}
              onChange={onChange}
        />
        <box-icon name='x' 
                  color='#eae6e6'
                  onClick={clearSearchTarget}
        />
    </form>
  )
}
