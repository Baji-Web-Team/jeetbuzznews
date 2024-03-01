"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SliderWidget = () => {
  const router = useRouter();
  const [colorType, setColorType] = useState('light');

  useEffect(() => {
    // Function to handle theme change
    const handleThemeChange = () => {
      const themeMode = localStorage.getItem('theme');
      setColorType(themeMode === 'dark' ? 'dark' : 'light');
    };

    // Initial call to set the theme
    handleThemeChange();

    // Listen for theme changes
    window.addEventListener('storage', handleThemeChange);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    // Execute the script to initialize the widget
    const script = document.createElement('script');
    script.id = 'slider_widget_script';

    const widgetConfig = {
      code: "4654436544",
      field: "entity_cricket",
      widget_type: "url",
      widget: "slider_widget",
      id: "73748",
      more_one: "",
      widget_size: "large",
      where_to: "whereUwantToPutOnlyIdslider_widget",
      base_path: "https://jeetbuzznews.vercel.app/matches",
      links: "1",
      color_type: colorType,
      choosed_color: "",
      choosed_preset: "",
    };

    script.innerHTML = `Entity_sport.push(${JSON.stringify(widgetConfig)});`;

    const existingScript = document.getElementById('slider_widget_script');
    if (existingScript) {
      existingScript.remove();
    }

    document.getElementById('whereUwantToPutOnlyIdslider_widget').appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      script.remove();
    };
  }, [colorType]);

  // Function to handle click event on match details
  const handleMatchDetailsClick = (matchId) => {
    // Navigate to the dynamic route for match details
    router.push(`/livescore/${matchId}`);
  };

  return (
    <div id="whereUwantToPutOnlyIdslider_widget">
      {/* Your widget content */}
      <button onClick={() => handleMatchDetailsClick("exampleMatchId")}>View Match Details</button>
    </div>
  );
};

export default SliderWidget;
