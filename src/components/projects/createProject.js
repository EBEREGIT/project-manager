import React, { Component } from 'react';
import { connect } from 'net';
import { createProject } from '../../store/actions/projectActions';

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
        // console.log(this.state);
        this.props.createProject(this.state)
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

// map or convert dispatch to props
const mapDispatchToProps = (dispatch) => {
    return{
        // this method takes in the individual project passed in from above
        // and execute the createProject function from the projectActions
        createProject: (project) => dispatch(createProject(project))
    }
}

// connecting this component to the redux central store (a higher-order component)
// null is representing mapStateToProps since it does not exist here
export default connect(null, mapDispatchToProps) (CreateProject);