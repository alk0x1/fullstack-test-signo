# SISTEMA DE VOTAÇÃO


<img src="https://user-images.githubusercontent.com/59076746/195950593-05b1314c-11bf-475f-9c03-32fc9fb0c409.png" width="700x700">


<b>Tecnologias usadas no Backend</b>
- NodeJs
- Typescript
- Mysql
- Prisma (ORM)

<b>Tecnologias usadas no Frontend</b>
- React
- Bootstrap

<b>Instruções para executar localmente:</b>

```bash
git clone https://github.com/alk0x1/fullstack-test-signo.git

cd backend
yarn ou npm install
```
na raíz da pasta adicione um .env no seguinte formato
```env
PORT=5001
DATABASE_URL="mysql://<user>:<pass>@<ip>:<port>/signo_mysql"
```
em seguida execute ```yarn dev``` e o servidor inicializara na porta 5001

Em outro terminal
```bash
cd frontend
yarn ou npm install
yarn start
```
e se navegador vai abrir a página do formulário
