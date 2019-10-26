import React from 'react';
import './App.css';
import Side from './Side';
import Create from './Create';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tap:'Create',
      tasks: []
  }

  this.tap = 'Create';
  this.handleTap = this.handleTap.bind(this);
  this.saveNewTask = this.saveNewTask.bind(this);
  }

  tag() {
    if (this.state.tap === 'All') {
      return <h1>All</h1>;
    } else if (this.state.tap === 'Pending') {
      return <h1>Pending</h1>;
    } else if (this.state.tap === 'Complete') {
      return <h1>Complete</h1>;
    } else if (this.state.tap === 'Create') {
      return <Create saveNewTask={this.saveNewTask}/>;
    }
  }

  handleTap(selectedTap) {
    console.log('Handle Tap: '+ selectedTap);
    this.setState({tap: selectedTap}, () => this.handleSubmit());
  }

  handleSubmit() {
    this.tap = this.state.tap;
  }

  saveNewTask(newTask) {
    console.log(newTask);
    this.setState({tasks: [...this.state.tasks, newTask]}, () => this.saveTasksInCache(this.state.tasks));
  }

  saveTasksInCache(data) {
    data = JSON.stringify(data);
    localStorage.setItem('tasks', data);
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
