import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { epochs: [] }

  componentDidMount (){
    fetch('/time')
    .then(res => res.json())
    .then(epochs => this.setState({ epochs }));
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Time data</h1>
      <ul className="App-data">
          {this.state.epochs.map(epoch => 
            <li key={epoch.id}>{epoch.translation}<br/>
            <small>{epoch.type}</small></li>
            )};
        </ul>
      </header>

    </div>
  );
  }
}

export default App;
