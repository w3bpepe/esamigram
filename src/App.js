import {React, useState, useEffect} from 'react';
import './App.css';


import AddForm from './components/add/AddForm';
import ListaOspedali from './components/display/ListaOspedali';
import Searchbar from './components/Searchbar';
import axios from 'axios';



function App() {
  /* stato a top level per accedere e modificare le strutture */
  const [hospitals, setHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


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
      {/*SearchBar: filtra durante la compilazione */}
      <Searchbar setRicerca = {setSearchTerm}/>
      
      {/*AddForm: Component per aggiungere nuovi Ospedali, vengono
      passate come prop la lista attuale degli ospedali per preservare
      gli ospedali already presenti e la funzione setHospitals per aggiornare
      lo stato */}
      <AddForm ospedali={hospitals} setOspedali = {setHospitals} />
      
      {/*ListaOspedali: Component per visualizzare gli Ospedali, prende
      come prop appunto la lista degli ospedali*/}
      <ListaOspedali termineRicerca = {searchTerm} ospedali={hospitals}/>
    </div>
  );
}

export default App;
