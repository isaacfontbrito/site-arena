import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Registration } from './components/Matricula/Registration'
import { PageInitial } from './components/paginaInicial/InitialPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageInitial/>
  },
  {
    path: '/registration',
    element: <Registration/>
  }
])

export function App() {
  return <RouterProvider router={router} />
      
    
  
}
