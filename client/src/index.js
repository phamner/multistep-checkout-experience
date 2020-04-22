
var FormOne = function(){
  return (
    //name, email, and password for account creation
    <div>
      <h3>Form One</h3>
      <form>
        <label>
          Name:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          Email:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          Password:
          <input type="text" value='' />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

var FormTwo = function(){
  return (
    //ship to address (line 1, line 2, city, state, zip code) and phone number
    <div>
      <h3>Form Two</h3>
      <form>
        <h5>Ship to address:</h5>
        <label>
          line 1:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          line 2:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          City:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          State:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          Zipcode:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          Phone number:
          <input type="text" value='' />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

var FormThree = function(){
  return (
    //credit card #, expiry date, CVV, and billing zip code
    <div>
      <h3>Form Three</h3>
      <form>
        <label>
          Credit Card Number:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          Expiry date:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          CVV:
          <input type="text" value='' />
        </label>
        <br />

        <label>
          Billing zip code:
          <input type="text" value='' />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

var HomePage = function(props){
  return(
    <div>
      <button onClick={props.handleClick}>Checkout</button>
    </div>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentForm: 'FormThree',
      data: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('SAY WHAT AGAIN.  SAY IT I DARE YOU I DOUBLE DOG DARE YOU. no bind needed.')
  }

  render() {
    if (this.state.currentForm === 'HomePage') {
      return(<HomePage handleClick={this.handleClick}/>)
    } else if (this.state.currentForm === 'FormOne') {
      return(<FormOne />)
    } else if (this.state.currentForm === 'FormTwo') {
      return(<FormTwo />)
    } else if (this.state.currentForm === 'FormThree') {
      return(<FormThree />)
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

