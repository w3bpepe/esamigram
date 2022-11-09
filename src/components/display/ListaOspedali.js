import React from "react";
import Ospedali from "./Ospedali";


function ListaOspedali({ ospedali, termineRicerca }){
    return(
        <div className="mt-4">
            { ospedali.filter((val) => {
                if( termineRicerca === ''){
                    return val
                } else if (val.esami.toLowerCase().includes(termineRicerca.toLowerCase())) {
                    return val
                }
            }).map(ospedali => {
                return <Ospedali datiOspedali={ospedali}/>
            })
            }
        </div>
    )
};

export default ListaOspedali;