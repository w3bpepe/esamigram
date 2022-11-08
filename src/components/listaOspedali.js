import React from "react";
import Ospedali from "./ospedali";


function ListaOspedali({ ospedali }){
    return(
        <div className="mt-4">
            { ospedali.map(ospedali => {
                return <Ospedali datiOspedali={ospedali}/>
            })
            }
        </div>
    )
};

export default ListaOspedali;