import React from "react";
import "./aboutteam.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";

const AboutTeam = () => {
  const teamData = [
    { img: team1, name: "John Smith", role: "CEO" },
    { img: team2, name: "Simon Adams", role: "CTO" },
    { img: team3, name: "Paul Jones", role: "Design Lead" },
    { img: team4, name: "Sara Hardin", role: "Project Manager" },
  ];

  return (
    <div className="team-section">
      <h2 className="team-title">Meet our team</h2>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} className="team-img" />
              <div className="overlay">
                <div className="icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaInstagram />
                </div>
              </div>
            </div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
