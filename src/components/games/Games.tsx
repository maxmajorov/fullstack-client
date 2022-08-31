import React from "react";
import classes from "./Games.module.scss";

export const Games = () => {
  const games = ["Maze", "Shooting", "Dark Riddle", "Mario"];

  return (
    <div className={classes.gamesContainer}>
      <div className={classes.gameList}>
        <ul>
          {games.map((game, ind) => (
            <li key={ind} className={classes.gameItem}>
              {game}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
