// import { Enquete } from "../@types/enquete";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Enquete } from '../@types/enquete';
import { checkStatus } from '../utils';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';

export function ShowEnquete() {
  let { id } = useParams(); 
  const [enquete, setEnquete] = useState<Enquete>();
  const [option, setOption] = useState('');

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:5001/get/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data); setEnquete(data)});

  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(option)
  }

  function WithLabelExample() {
    const now = 1010;
    return <ProgressBar now={now} label={`${now}%`} />;
  }

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">{enquete?.titulo}</Card.Title>
          <Card.Text>
            Data de Inicio: {enquete?.data_inicio}
          </Card.Text>
          <Card.Text>
            Data de Término: {enquete?.data_fim}
          </Card.Text>
          <Card.Subtitle>
            Opções
          </Card.Subtitle>
          <Form>
            {enquete?.opcoes_de_resposta && enquete?.opcoes_de_resposta.map((op) => (
              <Form.Check
                key={op}
                id={`inline-${op}-2`}
                type={'radio'}
                name={'group1'}
                label={op}
                value={op}
                onChange={(e) => setOption(e.target.value)}
              />
            ))}
            <Button variant="primary" type="submit" onClick={(e)=> handleSubmit(e)}>
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {enquete?.opcoes_de_resposta && enquete.opcoes_de_resposta.map((op) => (
        <ListGroup.Item
          key={op}
        >
          {op}: {WithLabelExample()}
        </ListGroup.Item>
      ))}
    </Stack>
  )
}