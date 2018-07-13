import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
  import Home from './components/Home';
  import Projects from './components/Projects';
  import Header from './components/Header'
  import NoMatch from './components/NoMatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact sensitive />
            <Route path="/projects" component={Projects}/>
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;