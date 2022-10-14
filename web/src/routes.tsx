import { BrowserRouter, Route, Routes  } from 'react-router-dom' 
import { CreateEnquete } from './pages/CreateEnquete';
import { ListEnquetes } from './pages/ListEnquetes';
import { ShowEnquete } from './pages/ShowEnquete';


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<CreateEnquete />} />
        <Route path="/listEnquetes"  element={<ListEnquetes />} />
        <Route 
          path="/showEnquete/:id"
          element={<ShowEnquete />}
        />
      </Routes>
    </BrowserRouter>
  )
}
