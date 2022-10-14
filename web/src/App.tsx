import { AppRoutes } from './routes';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{height: '100vh', backgroundColor: '#eee', paddingTop: '5%'}}>
      <Stack gap={3} className="col-md-5 mx-auto">
        <AppRoutes />
      </Stack>
    </div>
  );
}

export default App;
