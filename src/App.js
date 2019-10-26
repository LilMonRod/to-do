import React from 'react';
import './App.css';
import Side from './Side';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tap:'Create'
    };

    this.tap = 'Create';
    this.handleTap = this.handleTap.bind(this);
  }

  tag() {
    if (this.state.tap === 'All') {
      return <h1>All</h1>
    } else if (this.state.tap === 'Pending') {
      return <h1>Pending</h1>
    } else if (this.state.tap === 'Complete') {
      return <h1>Complete</h1>
    } else if (this.state.tap === 'Create') {
      return <h1>Create</h1>
    }
  }

  handleTap(selectedTap) {
    console.log('Handle Tap: '+ selectedTap);
    this.setState({tap: selectedTap}, () => this.handleSubmit());
  }

  handleSubmit() {
    this.tap = this.state.tap;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do list</h1>
        </header>
        <Side handleTap={this.handleTap}/>
        {this.tag()}
      </div>
    );
  }
}

export default App;
