import React from 'react';
import './Container.css';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeInfo = this.routeInfo.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  routeInfo(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Container">
        <header className="Container-header">
          <h1 className="Container-title">cont</h1>
        </header>

        {this.routeInfo()}
      </div>
    );
  }
}

export default Container;