import {BrowserRouter} from 'react-router-dom';
import {Alert} from '@/components';
import {MainMenu} from '@/components/layouts';
import {AlertState} from '@/contexts';
import {LogicBook} from '@/contexts/logic/logic.hoc';
import {Routes} from '@/routes.route';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <MainMenu />
      <AlertState>
        <LogicBook>
          <main>
            <Alert />
            <Routes />
          </main>
        </LogicBook>
      </AlertState>
    </div>
  </BrowserRouter>
);
export default App;
