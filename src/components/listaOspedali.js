import React from "react";

const ospedali = [
    {Nome: "S1", Regione: "Sardegna", Città: "Cagliari", numero: 1234, esami: ["ES1", "ES2"]},
    {Nome: "S2", Regione: "Lazio", Città: "Roma", numero: 4342, esami: ["ES3", "ES4"]},
    {Nome: "S3", Regione: "Liguria", Città: "Genova", numero: 4523, esami: ["ES5", "ES6"]},
]

function ListaOspedali(){
    return(
        <div className="mt-4">
            Lista ospedali
        </div>
    )
};

export default ListaOspedali;