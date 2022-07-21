import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Admin from './components/admin/admin'
import Theorieexamens from './pages/theorieexamens'
import Contact from './pages/contact'
import Examen1 from './pages/examens/examen1'
import Dropdown from './components/dropdown'
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

      <Routes>
        <Route exact path='/'element={ <Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/theorieexamens' element={ <Theorieexamens />} />
        <Route path='/contact' element={<Contact />}/>
          
     
        <Route path='/examen1' element={<Examen1 />} />
        <Route path='/examen2' element={<Examen2 />} />
        <Route path='/examen3' element={<Examen3 />} />
        <Route path='/examen4' element={<Examen4 />} />
        <Route path='/examen5' element={<Examen5 />} />
        <Route path='/examen6' element={<Examen6 />} />
        <Route path='/examen7' element={<Examen7 />} />
        <Route path='/examen8' element={<Examen8 />} />
        <Route path='/examen9' element={<Examen9 />} />
        <Route path='/examen10' element={<Examen10 />} />
      </Routes>
    </Router>
  )
}

export default App
