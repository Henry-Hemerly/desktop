import React, {Component} from 'react';

class Welcome extends Component {
  state={};

  nameHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  clickHandler = (event) => {
    this.props.name(this.state.name, false);
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrap">
        <div className="welcome">
          <form>
            <div className="from-group">
              <label>Name:</label>
              <input
                type="username"
                className="form-control"
                onChange={this.nameHandler}
              />
              <div class="form-text text-muted">Welcome to Salt's Memory Game!</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}