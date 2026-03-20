import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LeaderBoard.css";
import { BACKEND_BASE_URL } from './apiConfig.js'; 
import Icon from "@mdi/react";
import { mdiTrophy, mdiArrowLeft } from "@mdi/js";

function LeaderBoard() {
  const [leaderboardData, setLeaderboardData] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_BASE_URL}/api/getgamescore`) 
      .then((res) => res.json())
      .then((data) => setLeaderboardData(data))
      .catch((err) =>
        console.error("Nie udalo sie zaladowac wynikow ", err)
      );
  }, []);

  return (
    <div className="leaderBoardPage">
      <div className="leaderBoardContainer">
        <button className="backButton" onClick={() => navigate('/')}>
          <Icon path={mdiArrowLeft} size={1} color="white" />
        </button>

        <div className="leaderHeader">
          <Icon path={mdiTrophy} size={1.4} color="#FFD700" />
          <h1 className="tablicaWynikow">LEADERBOARD</h1>
          <Icon path={mdiTrophy} size={1.4} color="#FFD700" />
        </div>

        <div className="leaderListHeader">
          <span className="colRank">#</span>
          <span className="colName">Player</span>
          <span className="colScore">Score</span>
          <span className="colDiff">Difficulty</span>
          <span className="colDate">Date</span>
        </div>

        <div className="leaderList">
          {leaderboardData.map((entry, index) => {
            let placeClass = '';
            if (index === 0) placeClass = 'gold';
            else if (index === 1) placeClass = 'silver';
            else if (index === 2) placeClass = 'bronze';

            return (
              <div className={`leaderEntry ${placeClass}`} key={index}>
                <span className="position">{index + 1}</span>
                <span className="playerNamee">{entry.playerName}</span>
                <span className="score">{entry.score} pts</span>
                <span className="diff">{entry.difficulty}</span>
                <span className="date">{new Date(entry.date).toLocaleDateString()}</span>
              </div>
            );
          })}
          {leaderboardData.length === 0 && (
            <div className="emptyState">No scores yet. Be the first!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
