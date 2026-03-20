import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/AtsAkanzaLogo.png';
import Icon from '@mdi/react';
import { mdiTrophy, mdiBookOpenPageVariant, mdiGithub, mdiTableTennis } from '@mdi/js';

function Footer({ onRulesClick }) {
  const navigate = useNavigate();

  return (
    <footer className="siteFooter">
      <div className="footerTop">
        

        <div className="footerCol footerNavCol">
          <h4 className="footerColTitle">Quick Play</h4>
          <button className="footerNavBtn" onClick={() => navigate('/leaderboard')}>
            <Icon path={mdiTrophy} size={0.7} color="rgba(255,255,255,0.45)" />
            Leaderboard
          </button>
          <button className="footerNavBtn" onClick={onRulesClick}>
            <Icon path={mdiBookOpenPageVariant} size={0.7} color="rgba(255,255,255,0.45)" />
            Game Rules
          </button>
        </div>

        <div className="footerCol footerInfoCol">
          <h4 className="footerColTitle">About</h4>
          <p className="footerText">
            A modern take on the classic table tennis game. Challenge the AI across three difficulty levels and climb the rankings.
          </p>
        </div>

        <div className="footerCol footerStatsCol">
          <h4 className="footerColTitle">Features</h4>
          <div className="footerFeature">
            <Icon path={mdiTableTennis} size={0.65} color="rgba(255,255,255,0.4)" />
            <span>3 Difficulty Modes</span>
          </div>
          <div className="footerFeature">
            <Icon path={mdiTrophy} size={0.65} color="rgba(255,255,255,0.4)" />
            <span>Global Leaderboard</span>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <span className="footerCopy">&copy; {new Date().getFullYear()} Akanza — All rights reserved</span>
        <span className="footerMadeWith">Made with passion for ping pong</span>
      </div>
    </footer>
  );
}

export default Footer;
