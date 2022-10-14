import { BasicFormExample } from './pages/Form';
import { ListEnquetes } from './pages/ListEnquetes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BasicFormExample/>
      <ListEnquetes/>
      </header>
    </div>
  );
}

export default App;
