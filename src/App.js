import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results'


class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Search App</h1>
          <p>This is a simple search app.</p>
          <SearchForm/>

        </Jumbotron>
        <Results/>
      </div>
    );
  }
}

export default App;
