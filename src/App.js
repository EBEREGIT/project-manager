import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
