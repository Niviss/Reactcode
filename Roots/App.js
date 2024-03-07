import "./App.css"
import Home from './Home'
import About from "./About"
import Contact from "./Contact"
import Feedback from "./Feedback"

import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom'
const App = () => {
  return (
    <body>
       <h1>Roots</h1>
    <div>
      <BrowserRouter>
      <ul>
        <li><Link to="/" >Home</Link> </li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/contact">Contact</Link> </li>
        <li><Link to="/feedback">Feedback</Link> </li>
      </ul>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/feedback" element={ <Feedback/> }/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
    </body>
  )
}

export default App 