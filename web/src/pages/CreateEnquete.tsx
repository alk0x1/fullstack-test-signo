import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { CreateEnqueteForm } from '../components/CreateEnqueteForm';
import { ToastContainer } from 'react-toastify';

export function CreateEnquete() {
  return (
    <>
      <ToastContainer />
      <h1>Criar Enquete</h1>
      <CreateEnqueteForm />
      <p><Link to="listEnquetes">ver suas enquetes criadas</Link></p>
    </>
  );
}
