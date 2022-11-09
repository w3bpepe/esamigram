import {React, useState, useEffect} from 'react';
import './App.css';


import AddForm from './components/add/form';
import ListaOspedali from './components/listaOspedali';
import Searchbar from './components/searchbar';
import axios from 'axios';



function App() {
  /* stato a top level per accedere e modificare le strutture */
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/strutture', {})
      .then( res => {
        setHospitals(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  },[hospitals])

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
