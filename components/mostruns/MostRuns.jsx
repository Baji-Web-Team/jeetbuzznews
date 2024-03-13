"use client";
import React, { useEffect, useState } from 'react';

const SeriesTopPagesRuns = () => {
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
    script.id = 'series_top_pages_script';

    const widgetConfig = {
        code: "4654436544",
        field: "entity_cricket",
        widget_type: "content_type",
        widget: "series_top_pages",
        id: "128410",
        more_one: "team_total_run100",
        widget_size: "large",
        where_to: "whereUwantToPutOnlyIdseries_top_pages",
        base_path: "",
        links: "",
        color_type: colorType,
        choosed_color: "",
        choosed_preset: "",
    };

    script.innerHTML = `Entity_sport.push(${JSON.stringify(widgetConfig)});`;
    script.defer = true; // Add the defer attribute

    const existingScript = document.getElementById('series_top_pages_script');
    if (existingScript) {
      existingScript.remove();
    }

    document.getElementById('whereUwantToPutOnlyIdseries_top_pages').appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      script.remove();
    };
  }, [colorType]);

  return <div id="whereUwantToPutOnlyIdseries_top_pages" className=" !p-2.5 !flex !flex-col !gap-2.5 !items-start !justify-start !self-stretch !shrink-0 !relative !overflow-hidden !w-full"/>;
};

export default SeriesTopPagesRuns;
