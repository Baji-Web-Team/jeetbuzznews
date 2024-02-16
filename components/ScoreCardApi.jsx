"use client"
import React, { useEffect } from 'react';

const ScoreCardApi = () => {
  useEffect(() => {
    // Move the script logic inside the useEffect hook
    Entity_sport.push({
      code: "4654436544",
      field: "entity_cricket",
      widget_type: "content_type",
      widget: "slider_widget",
      id: "66210",
      more_one: "",
      widget_size: "large",
      where_to: "whereUwantToPutOnlyIdslider_widget",
      base_path: "https://rest.entitysport.com/v2/matches/49689/live?token=568b09ee5227b045055e39889fd42b35",
      links: "0",
      color_type: "light",
      choosed_color: "",
      choosed_preset: "",
    });
  }, []); // Empty dependency array to mimic componentDidMount behavior

  return (
    <div id="whereUwantToPutOnlyIdslider_widget"></div>
  );
};

export default ScoreCardApi;
