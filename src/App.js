import React from 'react';
import './App.css';


import AddForm from './components/add/form';
import ListaOspedali from './components/listaOspedali';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="App text-center">
      <h1 id="logo" className='m-4'>EsamiGram</h1>
      <Searchbar/>
      <AddForm/>
      <ListaOspedali/>
    </div>
  );
}

export default App;
