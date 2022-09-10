import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import classes from "./Games.module.scss";

export const Games = () => {
  const games = ["Maze", "Shooting", "Dark Riddle", "Mario"];

  const navigate = useNavigate();

  // const redirectHandler = () => {
  //   <Navigate to={'/'} state={email} />
  // }

  return (
    <div className={classes.gamesContainer}>
      <div className={classes.gameList}>
        <ul>
          {games.map((game, ind) => (
            <li
              key={ind}
              className={classes.gameItem}
              onClick={() => navigate(`${game.toLowerCase()}`)}
            >
              {game}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
