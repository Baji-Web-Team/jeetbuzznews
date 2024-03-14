"use client";
import React, { useEffect, useState } from "react";

const LiveMatch = ({ searchParams }) => {
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
    script.id = "single_match_script";

    const widgetConfig = {
      code: "4654436544",
      field: "entity_cricket",
      widget_type: "content_type",
      widget: "match_center",
      id: searchParams?.id || '73531',
      more_one: "",
      widget_size: "large",
      where_to: "whereUwantToPutOnlyIdmatch_center",
      base_path: "",
      links: "",
      color_type: "light",
      choosed_color: "",
      choosed_preset: "",
    };

    script.innerHTML = `Entity_sport.push(${JSON.stringify(widgetConfig)});`;
    script.defer = true; // Add the defer attribute

    const existingScript = document.getElementById("single_match_script");
    if (existingScript) {
      existingScript.remove();
    }

    document
      .getElementById("whereUwantToPutOnlyIdmatch_center")
      .appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      script.remove();
    };
  }, [colorType]);

  return (
    <div id="whereUwantToPutOnlyIdmatch_center" className="!w-full !flex !flex-col" />
  );
};

export default LiveMatch;
