import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { consumers } from 'stream';
import { Enquete } from './@types/enquete';

export function BasicFormExample() {
  // const [enquete, setEnquete] = useState<Enquete>({titulo:'', data_fim: '', data_inicio: ''});
  const [titulo, setTitulo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');


  
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newEnquete: Enquete = {
      titulo,
      data_inicio: dataInicio,
      data_fim: dataTermino
    }
    console.log(newEnquete);
    // setEnquete(newEnquete);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEnquete)
    };
    fetch('http://localhost:5001/createEnquete', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }


  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="Titulo da enquete" onChange={(e) => setTitulo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Data de ínicio</Form.Label>
        <Form.Control type="text" placeholder="xx/xx/xxxx" onChange={(e) => setDataInicio(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Data de término</Form.Label>
        <Form.Control type="text" placeholder="xx/xx/xxxx" onChange={(e) => setDataTermino(e.target.value)}/>
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label>Adicionar opção de resposta</Form.Label>
        <Form.Control type="text" placeholder="opção" />
      </Form.Group> */}

      <Button variant="primary" type="submit" onClick={(e)=> handleSubmit(e)}>
        Submit
      </Button>
    </>
  );
}
