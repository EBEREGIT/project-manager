import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: "",
        content: ""
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
            <h5 className="grey-text text darken-3">Create Project</h5>

            {/* email field */}
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>

            {/* password field */}
            <div className="input-field">
                <label htmlFor="content">Password</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>

            {/* button here */}
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create Project</button>
            </div>
        </form>
      </div>
    )
  }
}

export default CreateProject;
