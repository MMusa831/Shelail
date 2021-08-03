import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './about/About';
import Home from './cover/Home';
import Contact from './contact/Contact';
import More from './more/more';
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';

function App() {
  return (
    

    
       <div className="App">
        
          <Router>            
            <NavBar/>                    
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Router>
         
       </div>
   
  );
}

export default App;
