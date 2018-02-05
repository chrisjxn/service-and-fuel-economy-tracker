import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../redux/reducer';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <div className="homeComponent">
                {!this.props.user.id ?
                    <div>
                        <a className="logInButton" href={process.env.REACT_APP_LOGIN}>Login</a>
                    </div>
                    :
                    <div className="loggedIn">
                        <div className="greeting">
                            Hi, {this.props.user.first_name}!
                        </div>
                        <Link className="enterRefuelLink" to='/add-refuel'>Enter refuel</Link>
                        <a className="logOutButton" href={process.env.REACT_APP_LOGOUT}>Logout</a>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Home);