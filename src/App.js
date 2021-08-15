import './App.css';
import Create from './components/create';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Update from './components/update';
import Read from './components/read';

function App() {
  return (
    <Router>
    <div className="main">
        <Link to="/create">Create</Link> 
        <Link to="/read">Read</Link> 
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <Route path='/update' component={Update} />
    </div>
    </Router>
  );
}

export default App;
