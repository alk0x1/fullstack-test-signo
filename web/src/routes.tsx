import { BrowserRouter, Route, Routes  } from 'react-router-dom' 
import { BasicFormExample } from './pages/Form';
import { ListEnquetes } from './pages/ListEnquetes';
import { ShowEnquete } from './pages/ShowEnquete';


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<BasicFormExample />} />
        <Route path="/list"  element={<ListEnquetes />} />
        <Route 
          path="/showEnquete/:id"
          element={<ShowEnquete />}
        />
      </Routes>
    </BrowserRouter>
  )
}
