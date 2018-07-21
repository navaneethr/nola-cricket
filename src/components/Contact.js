import React, {Component} from 'react';
import Navbar from "./Navbar";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginTop: "50px", display: "flex", height: "calc(100vh - 50px)"}}>
                    <span style={{margin: "auto"}}>Contacts coming soon</span>
                </div>
            </div>
        );
    }
}
