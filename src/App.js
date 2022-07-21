import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Admin from './components/admin/admin'
import Theorieexamens from './pages/theorieexamens'
import Contact from './pages/contact'
import Examen1 from './pages/examens/examen1'
import Dropdown from './components/dropdown';
import Examen2 from './pages/examens/examen2'
import Examen3 from './pages/examens/examen3'
import Examen4 from './pages/examens/examen4'
import Examen5 from './pages/examens/examen5'
import Examen6 from './pages/examens/examen6'
import Examen7 from './pages/examens/examen7'
import Examen8 from './pages/examens/examen8'
import Examen9 from './pages/examens/examen9'
import Examen10 from './pages/examens/examen10'
function App() {
  return (
    <Router>
    
      <Dropdown />

      <div>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/theorieexamens'>
          <Theorieexamens />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/examen1'>
          <Examen1 />
        </Route>
        <Route path='/examen2'>
          <Examen2 />
        </Route>
        <Route path='/examen3'>
          <Examen3 />
        </Route>
        <Route path='/examen4'>
          <Examen4 />
        </Route>
        <Route path='/examen5'>
          <Examen5 />
        </Route>
        <Route path='/examen6'>
          <Examen6 />
        </Route>
        <Route path='/examen7'>
          <Examen7 />
        </Route>
        <Route path='/examen8'>
          <Examen8 />
        </Route>
        <Route path='/examen9'>
          <Examen9 />
        </Route>
        <Route path='/examen10'>
          <Examen10 />
        </Route>
      </div>
    </Router>
  )
}

export default App;
