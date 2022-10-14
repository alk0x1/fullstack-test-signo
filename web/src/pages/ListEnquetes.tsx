import { useState, useEffect } from 'react';
import { Enquete } from '../@types/enquete';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { checkStatus } from '../utils';

export function ListEnquetes() {
  const [enquetes, setEnquetes] = useState<Enquete[]>([{titulo: '', data_fim: '', data_inicio: '', opcoes_de_resposta: ['']}]);
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch('http://localhost:5001/getAll', requestOptions)
        .then(response => response.json())
        .then(data => setEnquetes(data));

  }, []);

  const handleDelete = (id: string) => {
    const requestOptions = {
      method: 'DELETE',
    };
    fetch(`http://localhost:5001/delete/${id}`, requestOptions)
        .then(response => window.location.reload());

  }

  return (
    <>
      <h1> Enquetes Criadas </h1>
      <ListGroup variant="flush">
        {enquetes.map((enquete) => {
          return <ListGroup.Item  
          className="d-flex justify-content-between align-items-start"
          key={enquete.id}>
            {enquete.titulo}  {enquete.data_inicio} - {enquete.data_fim}  {
              enquete.data_inicio && enquete.data_fim ? checkStatus(enquete.data_inicio, enquete.data_fim) : ""
            }
            <Stack direction="horizontal" gap={3}>
              <Button variant="outline-primary" size="sm"><Link to={`/showEnquete/${enquete.id}`}>Acessar</Link></Button>
              <Button variant="outline-danger" size="sm" onClick={() => { enquete.id && handleDelete(enquete.id)}}>Excluir</Button>
            </Stack>
          </ListGroup.Item>
        })}
      </ListGroup>
    </>
  )
}