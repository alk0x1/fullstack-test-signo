// import { Enquete } from "../@types/enquete";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Enquete, Result } from '../@types/enquete';
import { checkStatus } from '../utils';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';

export function ShowEnquete() {
  let { id } = useParams(); 
  const [enquete, setEnquete] = useState<Enquete>();
  const [option, setOption] = useState('');
  const [result, setResult] = useState<Result>();
  const [votes, setVotes] = useState<string[]>([]);
  
  let status: string = '';

  if (enquete?.data_inicio && enquete?.data_fim) {
    status = checkStatus(enquete?.data_inicio, enquete?.data_fim);
  }


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:5001/get/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data); setEnquete(data)});
  }, [id]);

  useEffect(() => {
    const count = votes.reduce((accumulator: Result, value) => {
      return {...accumulator, [value]: (accumulator[value] || 0) + 1};
    }, {});

    setResult(count);

  }, [votes])

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setVotes([...votes, option]);
  }

  function WithLabelExample(votes: number) {
    return <ProgressBar now={votes} label={`${votes}`} visuallyHidden  />;
  }

  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">{enquete?.titulo}</Card.Title>
          <Card.Text>
            {status}: {enquete?.data_inicio} - {enquete?.data_fim}
          </Card.Text>
          <Card.Subtitle>
            Opções
          </Card.Subtitle>
          <Form>
            {enquete?.opcoes_de_resposta && enquete?.opcoes_de_resposta.map((op) => (
              <Form.Check
                disabled={status !== 'Em Andamento'? true : false}
                key={op}
                id={`inline-${op}-2`}
                type={'radio'}
                name={'group1'}
                label={op}
                value={op}
                onChange={(e) => setOption(e.target.value)}
              />
            ))}
            <Button disabled={status !== 'Em Andamento'? true : false} variant="primary" type="submit" onClick={(e)=> handleSubmit(e)}>
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {enquete?.opcoes_de_resposta && enquete.opcoes_de_resposta.map((op) => (
        <ListGroup.Item
          key={op}
        >
          {op}: {result && result[op]}
          {result && result[op] && WithLabelExample(result[op])}
        </ListGroup.Item>
      ))}
    </Stack>
  )
}