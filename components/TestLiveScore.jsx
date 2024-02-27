"use client"
import React, { useEffect } from 'react';

const SliderWidget = () => {
  useEffect(() => {
    // Execute the script to initialize the widget
    const script = document.createElement('script');
    script.innerHTML = `
      Entity_sport.push({
        code: "4654436544",
        field: "entity_cricket",
        widget_type: "content_type",
        widget: "slider_widget",
        id: "73748",
        more_one: "",
        widget_size: "large",
        where_to: "whereUwantToPutOnlyIdslider_widget",
        base_path: "https://jeetbuzznews.vercel.app/matches",
        links: "1",
        color_type: "light",
        choosed_color: "",
        choosed_preset: "",
      });
    `;
    document.getElementById('whereUwantToPutOnlyIdslider_widget').appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.getElementById('whereUwantToPutOnlyIdslider_widget').removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div id="whereUwantToPutOnlyIdslider_widget"></div>;
};

export default SliderWidget;
