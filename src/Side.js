import React from 'react';
import './Side.css';

export default class Side extends React.Component {
  constructor(props) {
    super(props);
    this.handleTap = props.handleTap;
    this.selectedTap = props.selectedTap; 
    this.name='';
    
    this.state = {
      create: (this.selectedTap === 'Create') ? 'list__item--selected' : 'list__item',
      all: (this.selectedTap === 'All') ? 'list__item--selected' : 'list__item',
      pending: (this.selectedTap === 'Pending') ? 'list__item--selected' : 'list__item',
      complete: (this.selectedTap === 'Complete') ? 'list__item--selected' : 'list__item'
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  UNSAFE_componentWillReceiveProps(){
    this.setState({
      create: (this.selectedTap === 'Create') ? 'list__item--selected' : 'list__item',
      all: (this.selectedTap === 'All') ? 'list__item--selected' : 'list__item',
      pending: (this.selectedTap === 'Pending') ? 'list__item--selected' : 'list__item',
      complete: (this.selectedTap === 'Complete') ? 'list__item--selected' : 'list__item'
    }, () => this.switchItem() );
  }
  handleClick(event) {
    this.setState({name:event.target.id}, () => this.switchItem() );
    this.handleTap(event.target.id);
  }

  switchItem(event) {
    const name = event ? event : this.state.name;
    let varCreate;
    let varAll;
    let varPending;
    let varComplete;
    switch(name) {
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
            New task
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
