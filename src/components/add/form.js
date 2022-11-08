import React, { useState, useEffect } from "react";
import { Container, Form, Button, FormLabel, FormControl } from "react-bootstrap";

function AddForm( { setOspedali, ospedali }) {
    const [struttura, setStruttura] = useState({
        Nome: '',
        Regione: '',
        Città: '',
        numero: '',
        esami: ['']
    });

    console.log(struttura);

    const [esami, setEsami] = useState(['']);

    const handleNome = e => {
        setStruttura({...struttura, Nome: e.target.value});
    }

    const handleRegione = e => {
        setStruttura({...struttura, Regione: e.target.value});
    }

    const handleCitta = e => {
        setStruttura({...struttura, Città: e.target.value});
    }

    const handleNumero = e => {
        setStruttura({...struttura, numero: e.target.value});
    }

    const handleEsami = async (e, index) => {
        const value = e.target.value;
        console.log(value);
        const examsTemp = [...esami];
        examsTemp[index] = value;
        console.log(examsTemp);
        setEsami(examsTemp);
        console.log(esami);

    }

    useEffect(()=>{
        setStruttura({...struttura, esami:[...esami]});;
    },[esami])


    const handleSubmit = e => {
        e.preventDefault();
        setOspedali([...ospedali, struttura]);
        console.log("submit");
    }

    const handleAddExam = () => {
        setEsami([...esami, ''])
    }
    
    const handleRemoveExam = (index) => {
        const exams = [...esami];
        exams.splice(index, 1);
        setEsami(exams)
        setStruttura({...struttura, esami:[...exams]});;

    }

    return(
        <Container id="formContainer" className="d-grid h-100 mt-4">
            <Form onSubmit={handleSubmit} className="text-center w-100">
                <h3>Aggiungi Struttura</h3>
                
                <FormLabel>Nome struttura</FormLabel>
                <FormControl value={struttura.Nome} onChange={handleNome}></FormControl>
                
                <FormLabel>Regione</FormLabel>
                <FormControl value={struttura.Regione} onChange={handleRegione}></FormControl>
                
                <FormLabel>Città</FormLabel>
                <FormControl value={struttura.Città} onChange={handleCitta}></FormControl>
                
                <FormLabel>Numero di telefono</FormLabel>
                <FormControl value={struttura.numero} onChange={handleNumero}></FormControl>
                
                <FormLabel>Esami</FormLabel>
                {esami.map((esame, index) => (
                    <>
                    <div className="input-group mb-3">
                    <FormControl type="text" className="form-control" value={esame} onChange={(e) => handleEsami(e, index)}></FormControl>
                    {esami.length > 1 && (
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-danger" type="button" onClick={() => handleRemoveExam(index)}>-</button>
                    </div>
                    )}
                    </div>
                    {esami.length -1 === index && 
                        (
                            <>
                            <Button className="mt-2" onClick={handleAddExam}>+</Button><p></p>
                            </>
                        )
                    }
                    </>
                ))}

                
                <Button type="submit" className="mt-4">Aggiungi</Button>
            </Form>
        </Container>
    )
}

export default AddForm;