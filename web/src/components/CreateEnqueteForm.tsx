import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { Enquete } from '../@types/enquete';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseButton from 'react-bootstrap/CloseButton';

export function CreateEnqueteForm() {
  // const [enquete, setEnquete] = useState<Enquete>({titulo:'', data_fim: '', data_inicio: ''});
  const [titulo, setTitulo] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');
  const [options, setOptions] = useState(['']);
  const [newOption, setNewOption] = useState('');

  const notify_error = (message: string) => toast.error(message, {
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

  // useEffect(() => {
  //   setOptions(options);
  //   console.log(options);
  // },[options]);


  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (options && options[0] === '') {
      options.shift();
    }
    if (options.length < 3) {
      return notify_error('Necessário adicionar pelo menos 3 opções');
    }
    
    if (!titulo) {
      return notify_error("Titulo não pode estar vazio");
    }

    if (dataInicio.length < 10 || dataTermino.length < 10) {
      return notify_error("As datas devem ser escritas no seguinte formato xx/xx/xxxx");
    }

    if (dataTermino < dataInicio) {
      return notify_error("A data de termino não pode ser antes da data de inicio");

    }

    const newEnquete: Enquete = {
      titulo: titulo,
      data_inicio: dataInicio,
      data_fim: dataTermino,
      opcoes_de_resposta: options
    }
    
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

  const removeFromStringArray = (removed: string): string[] => {
    return options.filter(option => option !== removed);
  };

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
        <Button variant="outline-secondary" id="button-addon2" onClick={() => { setOptions([...options, newOption])}}>
          Adicionar
        </Button>
      </InputGroup>
      <Stack direction="horizontal" gap={3}>
        {options.map((option, i) => {
          return option && 
          <div key={i} >
            <div key={i} className="bg-light border">
               {option} 
               <CloseButton key={i} onClick={() => setOptions(options.filter(op => op !== option))} />
            </div>
          </div>
        })}
      </Stack >
      <Button variant="primary" type="submit" onClick={(e)=> handleSubmit(e)}>
        Submit
      </Button>
    </>
  );
}
