// src/pages/Games.tsx

import React from 'react';
import './Games.css'; // Import the external CSS

const games = [
  {
    id: 1,
    title: 'Memory Match',
    description: 'A classic memory game built with React.',
    icon: '🧠',
    link: 'https://memorygame-orcin.vercel.app/'
  },
  {
    id: 2,
    title: 'Snake Game',
    description: 'Classic snake game with canvas rendering.',
    icon: '🐍',
    link: 'https://snakegame-omega-tan.vercel.app/'
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    description: 'Simple two-player game with winning logic.',
    icon: '❌⭕',
    link: 'https://tictocfront.vercel.app/'
  }
];

const Games: React.FC = () => {
  return (
    <div className="games-container">
      <h2 className="games-title">Mini Games</h2>
      <p className="games-subtitle">
        Have fun and test your logic with these small, interactive games built using modern web technologies.
      </p>

      <div className="game-list">
        {games.map(game => (
          <div className="game-card" key={game.id}>
            <div className="game-icon">{game.icon}</div>
            <h3 className="game-title">{game.title}</h3>
            <p className="game-description">{game.description}</p>
            <a className="game-link" href={game.link} target="_blank" rel="noopener noreferrer">
              Play Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
