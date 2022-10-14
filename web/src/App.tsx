import { AppRoutes } from './routes';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Stack gap={3} className="col-md-5 mx-auto">
        <AppRoutes />
      </Stack>
    </div>
  );
}

export default App;
