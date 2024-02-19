import React from "react";

const HeaderScore = ({ data }) => {
  // Access the required properties from the data object
  const { status, mid, live_score, team_batting, team_bowling } = data;

  return (
    <div className="border p-4">
      <h2>{`Match Status: ${status}`}</h2>
      <p>{`Match ID: ${mid}`}</p>
      <p>{`Batting Team: ${team_batting}`}</p>
      <p>{`Bowling Team: ${team_bowling}`}</p>
      <p>{`Live Score: ${live_score.runs}/${live_score.wickets}`}</p>
    </div>
  );
};

export default HeaderScore;