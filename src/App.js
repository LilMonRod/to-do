import React from 'react';
import './App.css';
import Side from './Side';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tap:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleTap(selectedTap) {
    alert('Handle Tap');
    this.setState({tap: selectedTap});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do list</h1>
        </header>
        <Side handleTap={this.handleTap}/>
      </div>
    );
  }
}

export default App;
