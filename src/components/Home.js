import React, { Component } from 'react';
import '../stylesheets/Home.css';
import teamImg from '../assets/team.png';
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <div className="home-body">
              <span className="welcome-title">Welcome to New Orleans Cricket Club</span>
              <div className="team-img-container">
                  <img src={teamImg} alt="NOCC" className="team-img"/>
              </div>
              <p>
                  Formed in 2014, NOCC has grown into a mature cricket club providing a stage for the local cricket enthusiasts,
                  the goal of the club is to spread awareness to the local crowd about the sport and grow its popularity in the United States,
                  NOCC welcomes everybody, irrespective of age, gender and ethnicity to come and be a part of this amazing club.
              </p>
          </div>
      </div>
    );
  }
}

export default Home;
