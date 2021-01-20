import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { MainMenu } from './components'

function App() {
  const routes = useRoutes()
  
  return (
    <BrowserRouter>
      <div className="container">
        <MainMenu/>
        <main>
          {routes}
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
