import './App.css';
import './App.scss';
import { Route } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import Home from '../../Components/Home/Home'
import Work from '../../Components/Work/Work'
import Skills from '../../Components/Skills/Skills'
import Contact from '../../Components/Contact/Contact'

function App() {
  return (
    <main className="App">
      <Route><NavBar /></Route>
     <Route exact path="/"><Home/></Route>
     <Route exact path="/work"><Work /></Route>
     <Route exact path="/skills"><Skills /></Route>
     <Route exact path="/contact"><Contact /></Route>
    </main>
  );
}

export default App;
