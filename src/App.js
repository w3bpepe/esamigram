import {React, useState} from 'react';
import './App.css';


import AddForm from './components/add/form';
import ListaOspedali from './components/listaOspedali';
import Searchbar from './components/searchbar';

/*ospedali: Lista degli ospedali, da sostituire con db */
const ospedali = [
]

function App() {
  /* stato a top level per accedere e modificare le strutture */
  const [hospitals, setHospitals] = useState(ospedali);

  return (
    <div className="App text-center">
      <h1 id="logo" className='m-4'>EsamiGram</h1>
      {/*SearchBar: Component che sarà adibita alla ricerca delle strutture
      per esame */}
      <Searchbar/>
      
      {/*AddForm: Component per aggiungere nuovi Ospedali, vengono
      passate come prop la lista attuale degli ospedali per preservare
      gli ospedali already presenti e la funzione setHospitals per aggiornare
      lo stato */}
      <AddForm ospedali={hospitals} setOspedali = {setHospitals} />
      
      {/*ListaOspedali: Component per visualizzare gli Ospedali, prende
      come prop appunto la lista degli ospedali*/}
      <ListaOspedali ospedali={hospitals}/>
    </div>
  );
}

export default App;
