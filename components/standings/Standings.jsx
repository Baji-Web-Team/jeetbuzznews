"use client";
import React, { useEffect, useState } from "react";

const TeamStandings = () => {
  const [colorType, setColorType] = useState("light");

  useEffect(() => {
    // Function to handle theme change
    const handleThemeChange = () => {
      const themeMode = localStorage.getItem("theme");
      setColorType(themeMode === "dark" ? "dark" : "light");
    };

    // Initial call to set the theme
    handleThemeChange();

    // Listen for theme changes
    window.addEventListener("storage", handleThemeChange);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    // Execute the script to initialize the widget
    const script = document.createElement("script");
    script.id = "competetion_standings_script";

    const widgetConfig = {
      code: "4654436544",
      field: "entity_cricket",
      widget_type: "content_type",
      widget: "competetion_standings",
      id: "128410",
      more_one: "batting_most_runs",
      widget_size: "small",
      where_to: "whereUwantToPutOnlyIdcompetetion_standings",
      base_path: "",
      links: "",
      color_type: "light",
      choosed_color: "",
      choosed_preset: "",
    };

    script.innerHTML = `Entity_sport.push(${JSON.stringify(widgetConfig)});`;
    script.defer = true; // Add the defer attribute

    const existingScript = document.getElementById("competetion_standings_script");
    if (existingScript) {
      existingScript.remove();
    }

    document
      .getElementById("whereUwantToPutOnlyIdcompetetion_standings")
      .appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      script.remove();
    };
  }, [colorType]);

  return (
    <section
      id="whereUwantToPutOnlyIdcompetetion_standings"
      className="widget-aside"
    />
  );
};

export default TeamStandings;
