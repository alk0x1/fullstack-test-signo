import { useState, useEffect } from 'react';
import { Enquete } from '../@types/enquete';


export function ListEnquetes() {
  const [enquetes, setEnquetes] = useState<Enquete[]>([{titulo: '', data_fim: '', data_inicio: '', opcoes_de_resposta: ['']}]);
  
  function checkStatus(startDate: string, endDate: string): string {
    const today = parseInt(new Date().toLocaleDateString('pt-BR').split('/').reverse().join(''));
    let numberStartDate = parseInt(startDate.split('/').reverse().join(''));
    let numberEndDate = parseInt(endDate.split('/').reverse().join(''));
    if (today < numberStartDate) {
      return "Não iniciado"
    }
    return today > numberEndDate ? "Finalizado" : "Em Andamento";
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    fetch('http://localhost:5001/getAll', requestOptions)
        .then(response => response.json())
        .then(data => setEnquetes(data));

  }, []);

      return (
        <ul>
          <br />
          <br />
          <br />
          <br />
          {enquetes.map((enquete) => {
            return <li key={enquete.id}>
              {enquete.titulo} | data inicio: {enquete.data_inicio} | data fim: {enquete.data_fim} | status: {
                enquete.data_inicio && enquete.data_fim ? checkStatus(enquete.data_inicio, enquete.data_fim) : ""
              }
            </li>
          })}
        </ul>
      )
}