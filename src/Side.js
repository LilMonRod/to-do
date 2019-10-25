import React from 'react';
import './Side.css';

export default class Side extends React.Component {
  constructor(props) {
    super(props);
    this.handleTap = props.handleTap; 
    this.state = {
      create:'list__item',
      all:'list__item',
      pending:'list__item',
      complete:'list__item'
    };
    this.name='';

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({name:event.target.id}, (event) => this.switchItem(event) );
    this.handleTap();
  }

  switchItem(event) {
    console.log(event);
    switch(this.state.name) {
      case 'Create':
        console.log('Create');
        this.setState({create: 'list__item--selected', all:'list__item', pending:'list__item', complete:'list__item'});
        break;
      case 'All':
        console.log('All');
        this.setState({create: 'list__item', all:'list__item--selected', pending:'list__item', complete:'list__item'});
        break;
      case 'Pending':
        console.log('Pending');
        this.setState({create: 'list__item', all:'list__item', pending:'list__item--selected', complete:'list__item'});
        break;
      case 'Complete':
        console.log('Complete');
        this.setState({create: 'list__item', all:'list__item', pending:'list__item', complete:'list__item--selected'});
        break;
      default:
        this.setState({create: 'list__item', all:'list__item', pending:'list__item', complete:'list__item'});;
    }
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
