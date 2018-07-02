import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

/*******************************************************************
 * This project demonstrates how to pass a parameter to a an onClick
 * event handler in React.
 ******************************************************************/

class App extends React.Component {
  state = { message: null };

  /**
   * Render three DIVs
   */
  renderButtons = () =>
    // Render a block of three buttons
    [1, 2, 3].map(divId => (
      // Pass parameters in a 'div_id' and div_name data attributes
      <div
        key={divId}
        data-div_id={divId}
        data-div_name={`Div ${divId}`}
        onClick={this.handleButtonClicked}
      >
        Div {divId}
      </div>
    ));

  /**
   * Handle button's onClick event
   */
  handleButtonClicked = ev => {
    this.setState({
      // Retrieve the passed parameters from 'div_id' and 'div_name' datasets
      message: `Clicked div Id ${ev.currentTarget.dataset.div_id}, name ${
        ev.currentTarget.dataset.div_name
      }`
    });
  };

  render() {
    return (
      <div className="App">
        <div>Click on one of the DIVs below:</div>
        {this.renderButtons()}
        {this.state.message && (
          <div className="alert alert-primary">{this.state.message}</div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
