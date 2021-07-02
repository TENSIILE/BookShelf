import { BrowserRouter } from 'react-router-dom'
import { Alert } from '@/components'
import { MainMenu } from '@/components/layouts'
import { AlertState } from '@/contexts'
import { LogicBook } from '@/pages/Logic'
import { useRoutes } from '@/routes'

function App() {
  const routes = useRoutes()

  return (
    <BrowserRouter>
      <div className='container'>
        <MainMenu />
        <AlertState>
          <LogicBook>
            <main>
              <Alert />
              {routes}
            </main>
          </LogicBook>
        </AlertState>
      </div>
    </BrowserRouter>
  )
}

export default App
