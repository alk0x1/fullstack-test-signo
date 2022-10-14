import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Enquete } from '../@types/enquete';

export function BasicFormExample() {
  // const [enquete, setEnquete] = useState<Enquete>({titulo:'', data_fim: '', data_inicio: ''});
  const [titulo, setTitulo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');
  const [options, setOptions] = useState(['']);
  const [newOption, setNewOption] = useState('');

  
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newEnquete: Enquete = {
      titulo,
      data_inicio: dataInicio,
      data_fim: dataTermino,
      opcoes_de_resposta: options
    }
    console.log(newEnquete);
    
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

      <InputGroup className="mb-3">
        <Form.Control type="text" placeholder="Opção" onChange={(e) => setNewOption(e.target.value)} />
        <Button variant="outline-secondary" id="button-addon2" onClick={(e) => setOptions([...options, newOption])}>
          Adicionar
        </Button>
      </InputGroup>

      <Button variant="primary" type="submit" onClick={(e)=> handleSubmit(e)}>
        Submit
      </Button>
    </>
  );
}
