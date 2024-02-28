"use client"
import React, { useEffect } from 'react';

const MatchDescription = () => {
  useEffect(() => {
    // Execute the script to initialize the widget
    const script = document.createElement('script');
    script.id = 'fixtures_widget_script';

    const widgetConfig = {
      code: "4654436544",
      field: "entity_cricket",
      widget_type: "content_type",
      widget: "fixtures",
      id: "73867",
      more_one: "bowling_top_wicket_takers",
      widget_size: "large",
      where_to: "whereUwantToPutOnlyIdfixtures",
      base_path: "/",
      links: "1",
      color_type: "light",
      choosed_color: "",
      choosed_preset: "",
    };

    script.innerHTML = `Entity_sport.push(${JSON.stringify(widgetConfig)});`;

    const existingScript = document.getElementById('fixtures_widget_script');
    if (existingScript) {
      existingScript.remove();
    }

    document.getElementById('whereUwantToPutOnlyIdfixtures').appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      script.remove();
    };
  }, []);

  return <div id="whereUwantToPutOnlyIdfixtures" />;
};

export default MatchDescription;
