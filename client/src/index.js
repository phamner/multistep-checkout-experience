
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {
    return(
      //The divs below will hold my app
      <div>
        <h1>the app lives here</h1>
        <button>Click me sucka</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

