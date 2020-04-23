var HomePage = function(props){
  return(
    <div>
      <button onClick={props.handleHomePageClick}>Checkout</button>
    </div>
  )
}

var FormOne = function(props){
  console.log(props)
  return (
    //name, email, and password for account creation
    <div>
      <h3>Form One</h3>

      <form>
        <label>
          Name:
          <input type="text" id="name" onChange={props.handleChange} value={props.name} />
        </label>
        <br />

        <label>
          Email:
          <input type="text" id="email" onChange={props.handleChange} value={props.email} />
        </label>
        <br />

        <label>
          Password:
          <input type="text" id="password" onChange={props.handleChange} value={props.password} />
        </label>
        <br />
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
          <input type="text" id="line1" onChange={props.handleChange} value={props.line1} />
        </label>
        <br />

        <label>
          line 2:
          <input type="text" id="line2" onChange={props.handleChange} value={props.line2} />
        </label>
        <br />

        <label>
          City:
          <input type="text" id="city" onChange={props.handleChange} value={props.city} />
        </label>
        <br />

        <label>
          State:
          <input type="text" id="state" onChange={props.handleChange} value={props.state} />
        </label>
        <br />

        <label>
          Zipcode:
          <input type="text" id="zipCode" onChange={props.handleChange} value={props.zipCode} />
        </label>
        <br />

        <label>
          Phone number:
          <input type="text" id="phoneNumber" onChange={props.handleChange} value={props.phoneNumber} />
        </label>
        <br />
      </form>

      <button onClick={props.handleNextClickFormTwo}>NEXT</button>

    </div>
  );
};

var FormThree = function(props){
  console.log(props)
  return (
    //credit card #, expiry date, CVV, and billing zip code
    <div>
      <h3>Form Three</h3>

      <form>
        <label>
          CC Number:
          <input type="text" id="creditCardNumber" value={props.creditCardNumber} onChange={props.handleChange} />
        </label>
        <br />

        <label>
          Expiry date:
          <input type="text" id="expiryDate" value={props.expiryDate} onChange={props.handleChange} />
        </label>
        <br />

        <label>
          CVV:
          <input type="text" id="CVV" value={props.CVV} onChange={props.handleChange} />
        </label>
        <br />

        <label>
          Billing zip code:
          <input type="text" id="billingZipCode" value={props.billingZipCode} onChange={props.handleChange} />
        </label>
      </form>

      <button onClick={props.handleNextClickFormThree}>NEXT</button>
    </div>
  );
};

var ConfirmationPage = function(props){
  console.log(props)
  return(
    <div>
      <h4>
        Thank you for shopping with us!  Please confirm that your personal data is correct before completing this purchase.
      </h4>

      <ul>
        <li>Name: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Password: {props.password}</li>
        <li>Line 1: {props.line1}</li>
        <li>Line 2: {props.line2}</li>
        <li>City: {props.city}</li>
        <li>State: {props.state}</li>
        <li>Zip Code: {props.zipCode}</li>
        <li>Phone Number: {props.phoneNumber}</li>
        <li>Credit Card #: {props.creditCardNumber}</li>
        <li>Expiry Date: {props.expiryDate}</li>
        <li>CVV: {props.CVV}</li>
        <li>Billing Zip Code: {props.billingZipCode}</li>
      </ul>

      <button onClick={props.handlePurchaseClick}>Purchase</button>


    </div>
  )
};


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentForm: 'HomePage',
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      creditCardNumber: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: ''
    };
    this.handleHomePageClick = this.handleHomePageClick.bind(this);
    this.handleNextClickFormOne = this.handleNextClickFormOne.bind(this);
    this.handleNextClickFormTwo = this.handleNextClickFormTwo.bind(this);
    this.handleNextClickFormThree = this.handleNextClickFormThree.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
  }


  handleHomePageClick() {
    console.log('SAY WHAT AGAIN.  SAY IT I DARE YOU I DOUBLE DOG DARE YOU.  Clicked in HomePage');
    this.setState({
      currentForm: 'FormOne'
    })
  }
  handleNextClickFormOne(){
    console.log('clicked NEXT in FormOne');
    console.log('NAME: ', this.state.name, 'EMAIL: ', this.state.email, 'PASSWORD: ', this.state.password)
    this.setState({
      currentForm: 'FormTwo'
    })
  }
  handleNextClickFormTwo(){
    console.log('clicked NEXT in FormTwo');
    console.log('LINE1: ', this.state.line1, 'LINE2: ', this.state.line2, 'CITY: ', this.state.city, 'STATE: ', this.state.state, 'ZIPCODE: ', this.state.zipCode, 'PHONE NUM: ', this.state.phoneNumber)
    this.setState({
      currentForm: 'FormThree'
    })
  }
  handleNextClickFormThree(){
    console.log('clicked NEXT in FormThree.  NEED TO SUBMIT ALL DATA TO DB HERE');

    console.log('CC Number: ', this.state.creditCardNumber, 'expiryDate: ', this.state.expiryDate, 'CVV: ', this.state.CVV, 'billingZipCode: ', this.state.billingZipCode)

    this.setState({
      currentForm: 'ConfirmationPage'
    })
  }
  handlePurchaseClick(){
    console.log('purchase button has been clicked yall!');
    alert(`thank you for your purchase ${this.state.name}`);
    this.setState({
      currentForm: 'HomePage'
    })
  }



  handleChange(event){
    // console.log('handling change');
    var field = event.target.id
    this.setState({
      [`${field}`]: event.target.value
    })
    console.log('FIELD: ', event.target.id, ' TEXT: ', event.target.value)
  }

  render() {
    if (this.state.currentForm === 'HomePage') {
      return(<HomePage handleHomePageClick={this.handleHomePageClick}/>)
    }
    else if (this.state.currentForm === 'FormOne') {
      return(<FormOne
        handleNextClickFormOne={this.handleNextClickFormOne}
        handleChange={this.handleChange}
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
      />)
    }
    else if (this.state.currentForm === 'FormTwo') {
      return(<FormTwo
        handleNextClickFormTwo={this.handleNextClickFormTwo}
        handleChange={this.handleChange}
        line1={this.state.line1}
        line2={this.state.line2}
        city={this.state.city}
        state={this.state.state}
        zipCode={this.state.zipCode}
        phoneNumber={this.state.phoneNumber}
      />)
    }
    else if (this.state.currentForm === 'FormThree') {
      return(<FormThree
        handleNextClickFormThree={this.handleNextClickFormThree}
        handleChange={this.handleChange}
        creditCardNumber={this.state.creditCardNumber}
        expiryDate={this.state.expiryDate}
        CVV={this.state.CVV}
        billingZipCode={this.state.billingZipCode}
      />)
    }
    else if (this.state.currentForm === 'ConfirmationPage') {
      return(<ConfirmationPage
        handlePurchaseClick={this.handlePurchaseClick}
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        line1={this.state.line1}
        line2={this.state.line2}
        city={this.state.city}
        state={this.state.state}
        zipCode={this.state.zipCode}
        phoneNumber={this.state.phoneNumber}
        creditCardNumber={this.state.creditCardNumber}
        expiryDate={this.state.expiryDate}
        CVV={this.state.CVV}
        billingZipCode={this.state.billingZipCode}

      />)
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

