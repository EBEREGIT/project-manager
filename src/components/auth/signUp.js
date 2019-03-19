import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    // OnChange function
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // onSubmit function
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text darken-3">Sign Up</h5>

            {/* email field */}
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>

            {/* password field */}
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>

            {/* firstName field */}
            <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>

            {/* lastName field */}
            <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>

            {/* button here */}
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign In</button>
            </div>
        </form>
      </div>
    )
  }
}

export default SignUp;