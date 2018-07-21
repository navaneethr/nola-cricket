import React, {Component} from 'react';
import Navbar from "./Navbar";

export default class Partners extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginTop: "50px", display: "flex", height: "calc(100vh - 50px)"}}>
                    <span style={{margin: "auto"}}>You can partner with us soon</span>
                </div>
            </div>
        );
    }
}
