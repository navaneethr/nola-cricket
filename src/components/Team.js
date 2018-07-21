import React, {Component} from 'react';
import Navbar from "./Navbar";
import '../stylesheets/Team.css';
import sri from '../assets/players/sri.jpg';
import sriram from '../assets/players/sriram.jpg';
import vira from '../assets/players/vira.JPG';
import vinod from '../assets/players/vinod.JPG';
import abdullah from '../assets/players/abdullah.jpg';
import saranyan from '../assets/players/saranyan.jpg';
import ram from '../assets/players/ram.jpg';
import humzah from '../assets/players/humzah.jpg';
import tarun from '../assets/players/tarun.JPG';

export default class Team extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="team-body">
                    <div className="player-content">
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={sri} />
                            </div>
                            <div className="player-info">
                                <span>Sridhar</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={sriram} />
                            </div>
                            <div className="player-info">
                                <span>Sriram</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={vira} />
                            </div>
                            <div className="player-info">
                                <span>Vira</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={vinod} />
                            </div>
                            <div className="player-info">
                                <span>Vinod</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={abdullah} />
                            </div>
                            <div className="player-info">
                                <span>Abdullah</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={saranyan} />
                            </div>
                            <div className="player-info">
                                <span>Saranyan</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={ram} />
                            </div>
                            <div className="player-info">
                                <span>Ram</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={humzah} />
                            </div>
                            <div className="player-info">
                                <span>Humzah</span>
                            </div>
                        </div>
                        <div className="player-parent">
                            <div className="player-img-container">
                                <img src={tarun} />
                            </div>
                            <div className="player-info">
                                <span>Tarun</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

