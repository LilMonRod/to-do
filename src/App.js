import React from 'react';
import './App.css';
import Side from './Side';
import Create from './Create';
import Task from './Task';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = JSON.parse(localStorage.getItem('tasks'));
    this.state = {
      value: '',
      tap:'Create',
      tasks: this.getData ? this.getData : []
  }
  
  this.tap = 'Create';
  console.log(this.getData)
  console.log(this.state.tasks);
  this.handleTap = this.handleTap.bind(this);
  this.saveNewTask = this.saveNewTask.bind(this);
  }

  tag() {
    if (this.state.tap === 'All') {
      return (this.state.tasks.length === 0) ? <h1>All</h1> : <div className="main"><h1>All</h1> {this.state.tasks.map((item) => <Task data={item} />)}  </div> ;
    } else if (this.state.tap === 'Pending') {
      return (this.state.tasks.length === 0) ? <h1>Pending</h1>  : <div className="main"><h1>All</h1> {this.state.tasks.map((item) => (item.status === 'pending') ?  <Task data={item} /> : <span></span>)}  </div> ;;
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
    let cont = [];
    cont = cont.concat(this.state.tasks);
    console.log(cont)
    cont.push(newTask);
    console.log(cont)
    this.setState({tasks: cont}, () => this.saveTasksInCache());
  }

  saveTasksInCache(data) {
    data = JSON.stringify(this.state.tasks);
    localStorage.setItem('tasks', data);

    this.handleTap('All');
    this.showTasks();
  }

  showTasks() {
    console.log("verificar que se muestren todas las tasks y que se actualicen las pestañas")
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do list</h1>
        </header>
        <Side selectedTap={this.state.tap} handleTap={this.handleTap}/>
        {this.tasks ? this.showTasks() : this.tag()}
        {}
      </div>
    );
  }
}

export default App;
