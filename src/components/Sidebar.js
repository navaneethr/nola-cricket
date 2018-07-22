import React, {Component} from 'react';
import '../stylesheets/Navbar.css';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Link to='/'><span>Home</span></Link>
                <Link to='/team'><span>Team</span></Link>
                <Link to='/join'><span>Join</span></Link>
                <Link to='/partners'><span>Partners</span></Link>
                <Link to='/contact'><span>Contact</span></Link>
            </div>
        );
    }
}
