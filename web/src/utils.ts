export function checkStatus(startDate: string, endDate: string): string {
  const today = parseInt(new Date().toLocaleDateString('pt-BR').split('/').reverse().join(''));
  let numberStartDate = parseInt(startDate.split('/').reverse().join(''));
  let numberEndDate = parseInt(endDate.split('/').reverse().join(''));
  if (today < numberStartDate) {
    return "Não iniciado"
  }
  return today > numberEndDate ? "Finalizado" : "Em Andamento";
}
