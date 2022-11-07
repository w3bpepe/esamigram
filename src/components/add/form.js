import React from "react";
import { Container, Form, Button, FormLabel, FormControl } from "react-bootstrap";

function AddForm() {
    return(
        <Container id="formContainer" className="d-grid h-100 mt-4">
            <Form className="text-center w-100">
                <h3>Aggiungi Struttura</h3>
                <FormLabel>Nome struttura</FormLabel>
                <FormControl></FormControl>
                <FormLabel>Regione</FormLabel>
                <FormControl></FormControl>
                <FormLabel>Città</FormLabel>
                <FormControl></FormControl>
                <FormLabel>Numero di telefono</FormLabel>
                <FormControl></FormControl>
                <FormLabel>Esami</FormLabel>
                <FormControl></FormControl>
            </Form>
            <Button className="mt-4">Add</Button>
        </Container>
    )
}

export default AddForm;