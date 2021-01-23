import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { MainMenu } from './components/layouts'
import { Alert } from './components/alert/Alert'
import { AlertState } from './contexts/alert/AlertState'
import { LogicBook } from './pages/Logic'

function App() {
  const routes = useRoutes()
  
  return (
    <BrowserRouter>
      <div className="container">
        <MainMenu/>
        <AlertState>
          <LogicBook>
            <main>
              <Alert/>
              {routes}
            </main>
          </LogicBook>
        </AlertState>
      </div>
    </BrowserRouter>
  )
}

export default App
