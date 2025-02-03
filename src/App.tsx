import { Footer } from './components/Footer/Footer'
import { Foods } from './components/Gastronomia/Foods'
import { Header } from './components/Header/Header'
import { Lazer } from './components/Laser/Lazer'

export function App() {
  return (
    <div>
      <Header />
      <Lazer />
      <Foods />
      <Footer />
    </div>
  )    
}
