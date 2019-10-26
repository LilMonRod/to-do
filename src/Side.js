import React from 'react';
import './Side.css';

export default class Side extends React.Component {
  constructor(props) {
    super(props);
    this.handleTap = props.handleTap; 
    this.state = {
      create:'list__item--selected',
      all:'list__item',
      pending:'list__item',
      complete:'list__item'
    };
    this.name='';

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.setState({name:event.target.id}, () => this.switchItem() );
    this.handleTap(event.target.id);
  }

  switchItem() {
    let varCreate;
    let varAll;
    let varPending;
    let varComplete;
    switch(this.state.name) {
      case 'Create':
        console.log('Create');
        varCreate = 'list__item--selected';
        varAll = 'list__item';
        varPending = 'list__item';
        varComplete = 'list__item';
        break;
      case 'All':
        console.log('All');
        varCreate = 'list__item';
        varAll = 'list__item--selected';
        varPending = 'list__item';
        varComplete = 'list__item';
        break;
      case 'Pending':
        console.log('Pending');
        varCreate = 'list__item';
        varAll = 'list__item';
        varPending = 'list__item--selected';
        varComplete = 'list__item';
        break;
      case 'Complete':
        console.log('Complete');
        varCreate = 'list__item';
        varAll = 'list__item';
        varPending = 'list__item';
        varComplete = 'list__item--selected';
        break;
      default:
        varCreate = 'list__item';
        varAll = 'list__item';
        varPending = 'list__item';
        varComplete = 'list__item';
    }
    this.setState({create: varCreate, all: varAll, pending: varPending, complete: varComplete});;
  } 
  toggleSidenav(e) {
    // var css = (this.props.toggle+e.name === "hidden") ? "show" : "hidden";
    // this.setState({"showHideSidenav":css});
  }
  render() {
    return (
      <div className="Side">
        <ul className="list__container">
          <li onClick={this.handleClick} id="Create" className={this.state.create}>
            Crate new task
          </li>
          <li onClick={this.handleClick} id="All" className={this.state.all}>
            All tasks
          </li>
          <li onClick={this.handleClick} id="Pending" className={this.state.pending}>
            Pending taks
          </li>
          <li onClick={this.handleClick} id="Complete" className={this.state.complete}>
            Complete taks
          </li>
        </ul>
      </div>
    );
  }
}
