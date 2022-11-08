import {React, useState} from 'react';
import './App.css';


import AddForm from './components/add/form';
import ListaOspedali from './components/listaOspedali';
import Searchbar from './components/searchbar';

const ospedali = [
  {Nome: "S1", Regione: "Sardegna", Città: "Cagliari", numero: 1234, esami: ["ES1", "ES2"]},
  {Nome: "S2", Regione: "Lazio", Città: "Roma", numero: 4342, esami: ["ES3", "ES4"]},
  {Nome: "S3", Regione: "Liguria", Città: "Genova", numero: 4523, esami: ["ES5", "ES6"]},
]

function App() {

  const [hospitals, setHospitals] = useState(ospedali);

  return (
    <div className="App text-center">
      <h1 id="logo" className='m-4'>EsamiGram</h1>
      <Searchbar/>
      <AddForm ospedali={hospitals} setOspedali = {setHospitals} />
      <ListaOspedali ospedali={hospitals}/>
    </div>
  );
}

export default App;
