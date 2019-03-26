import React, { Component } from 'react';
import Notifications from './notifications';
import ProjectList from '../projects/projectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        // using destructing to collect the whole project list
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        {/* pass in the project list props from above into the projectList component below*/}
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications /> 
                    </div>
                </div>
            </div>
        );
    }
}

// map or convert the state from the store to props
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

// connect the dashboard component to the store (a high-order component)
export default connect(mapStateToProps) (Dashboard);