import React, {Component} from 'react';
import '../stylesheets/Sidebar.css';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li><Link to='/'><span>Home</span></Link></li>
                    <li><Link to='/team'><span>Team</span></Link></li>
                    <li><Link to='/join'><span>Join</span></Link></li>
                    <li><Link to='/partners'><span>Partners</span></Link></li>
                    <li><Link to='/contact'><span>Contact</span></Link></li>
                </ul>
            </div>
        );
    }
}
