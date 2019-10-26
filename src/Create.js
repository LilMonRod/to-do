import React from 'react';
import './Create.css';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        taskName: '',
        deadline: '',
        hour: '',
        description: ''
      }
    };
    this.saveNewTask = this.props.saveNewTask;
    
    this.manageData = this.manageData.bind(this);
  }

  manageData(event) {
    event.preventDefault();
    const newTask = {
      taskName: '',
      deadline: '',
      hour: '',
      description: '',
      complete: false
    }

    newTask.taskName =event.target.name.value;
    newTask.deadline =event.target.deadline.value;
    newTask.hour =event.target.hour.value;
    newTask.description =event.target.description.value;

    this.saveNewTask(newTask);
  }

  render() {
    return (
      <form onSubmit={this.manageData} className="create">
        <h2 className="create__title">Create new tag</h2>
        <label className="tagLabel" htmlFor="name">
          Task name:
          <input type="text" id="name" className="name tagInput"></input>
        </label>
        <label className="tagLabel" htmlFor="deadline">
          Deadline:
          <input type="date" id="deadline" className="deadline tagInput"></input>
        </label>
        <label className="tagLabel" htmlFor="hour">
          Time/Hour:
          <input type="time" id="hour" className="hour tagInput"></input>
        </label>
        <label className="tagLabel" htmlFor="description">
          Task description:
          <textarea id="description" className="description tagInput" name="description" rows="5" cols="33"></textarea>
        </label>

        <input type="submit" className="btn__create" value="Save task"></input>
      </form>
    );
  }
}

