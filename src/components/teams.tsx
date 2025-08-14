import React from 'react';
import './teams.css';

const teamMembers = [
  {
    name: 'Lavanya',
    role: 'Fullstack Developer',
    bio: 'Lavanya builds seamless fullstack applications using React, Node.js, and databases like MongoDB and PostgreSQL.',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Ram',
    role: 'Android Developer',
    bio: 'Ram is passionate about mobile development and specializes in building robust Android apps using Kotlin and Jetpack Compose.',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Manoj',
    role: 'iOS Developer',
    bio: 'Manoj crafts smooth and performant iOS applications with Swift and SwiftUI, focusing on user experience.',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Nagamani',
    role: 'Tester',
    bio: 'Nagamani ensures product quality through meticulous testing strategies, both manual and automated.',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const Teams: React.FC = () => {
  return (
    <div className="teams-container">
      <h1 className="teams-title">Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img className="team-avatar" src={member.photo} alt={member.name} />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
