import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Enquete } from '../@types/enquete';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export function BasicFormExample() {
  // const [enquete, setEnquete] = useState<Enquete>({titulo:'', data_fim: '', data_inicio: ''});
  const [titulo, setTitulo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');
  const [options, setOptions] = useState(['']);
  const [newOption, setNewOption] = useState('');

  const notify_error = () => toast.error('Necessário adicionar pelo menos 3 opções', {
    position: "top-right",
    autoClose: 3900,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const notify_sucess = () => toast.success('Enquete criada com sucesso', {
    position: "top-right",
    autoClose: 3900,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  const handleSubmit = (event: any) => {
    event.preventDefault();
    options.shift();
    if (options.length < 3) {
      return notify_error();
    }

    const newEnquete: Enquete = {
      titulo: titulo,
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
        .then(data => {
          console.log("data: ", data);
          window.location.reload();
          notify_sucess();
        });
  }

  return (
    <>
      <ToastContainer />
      <h1>Criar Enquete</h1>
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
      <p><Link to="list">ver suas enquetes criadas</Link></p>
    </>
  );
}
