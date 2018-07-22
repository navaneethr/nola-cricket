import React, {Component} from 'react';
import '../stylesheets/Navbar.css';
import {Link} from 'react-router-dom';
import Sidebar from "./Sidebar";
import menu from '../assets/menu.svg';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false
        }
    }

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="navbar-menu-icon-container" onClick={() => { this.setState({showSidebar: !this.state.showSidebar}) }}>
                        <img src={menu} width={30}/>
                    </div>
                    <ul>
                        <li><Link to='/'><span>Home</span></Link></li>
                        <li><Link to='/team'><span>Team</span></Link></li>
                        <li><Link to='/join'><span>Join</span></Link></li>
                        <li><Link to='/partners'><span>Partners</span></Link></li>
                        <li><Link to='/contact'><span>Contact</span></Link></li>
                    </ul>
                </div>
                {
                    this.state.showSidebar && <Sidebar/>
                }
            </div>
        );
    }
}
