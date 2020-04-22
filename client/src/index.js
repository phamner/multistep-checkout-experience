var HomePage = function(props){
  return(
    <div>
      <button onClick={props.handleCheckoutClick}>Checkout</button>
    </div>
  )
}

var FormOne = function(props){
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

      <button onClick={props.handleNextClickFormOne}>NEXT</button>

    </div>
  );
};

var FormTwo = function(props){
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
      <button onClick={props.handleNextClickForm}>NEXT</button>

    </div>
  );
};

var FormThree = function(props){
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
      <button onClick={props.handleNextClickFormThree}>NEXT</button>


    </div>
  );
};


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentForm: 'FormThree',
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipeCode: '',
      phoneNumber: '',
      creditCardNumber: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: ''
    };
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleNextClickFormOne = this.handleNextClickFormOne.bind(this);
    this.handleNextClickFormTwo = this.handleNextClickFormTwo.bind(this);
    this.handleNextClickFormThree = this.handleNextClickFormThree.bind(this);

  }
  handleCheckoutClick() {
    console.log('SAY WHAT AGAIN.  SAY IT I DARE YOU I DOUBLE DOG DARE YOU.  Clicked in HomePage')
  }
  handleNextClickFormOne(){
    console.log('clicked NEXT in FormOne')
  }
  handleNextClickFormTwo(){
    console.log('clicked NEXT in FormTwo')
  }
  handleNextClickFormThree(){
    console.log('clicked NEXT in FormThree')
  }

  render() {
    if (this.state.currentForm === 'HomePage') {
      return(<HomePage handleCheckoutClick={this.handleCheckoutClick}/>)
    } else if (this.state.currentForm === 'FormOne') {
      return(<FormOne handleNextClickFormOne={this.handleNextClickFormOne}/>)
    } else if (this.state.currentForm === 'FormTwo') {
      return(<FormTwo handleNextClickFormTwo={this.handleNextClickFormTwo}/>)
    } else if (this.state.currentForm === 'FormThree') {
      return(<FormThree handleNextClickFormThree={this.handleNextClickFormThree}/>)
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

