import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

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
    [1, 2, 3].map(divId => (
      // Pass parameters in a 'div_id' and div_name data attributes
      <div
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
      // Retrieve a passed parameter from 'div_id' and 'div_name' datasets
      message: `${ev.currentTarget.dataset.div_name}: ${
        ev.currentTarget.dataset.div_id
      } clicked`
    });
  };

  render() {
    return (
      <div className="App">
        <div>Click on one of the DIVs below:</div>
        {this.renderButtons()}
        {this.state.message && (
          <div class="alert alert-primary">{this.state.message}</div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
