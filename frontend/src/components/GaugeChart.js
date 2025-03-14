import React, { useState, useEffect } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { animate } from "framer-motion";

export default function GaugeChart({ value }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // Animate from current value to new value
    animate(animatedValue, value, {
      duration: 0.5, // Animation duration (seconds)
      onUpdate: (latest) => setAnimatedValue(latest),
    });
  }, [value]); // Runs when `value` changes

  // Define colors based on value
  const getColor = (value) => {
    if (value <= 45) return "#FF4D4D"; // Red for low values
    if (value <= 75) return "#FFC107"; // Yellow for medium values
    return "#52b202"; // Green for high values
  };

  return (
    <Gauge
      width={200}
      height={200}
      value={animatedValue} // Use animated value
      startAngle={-110}
      endAngle={110}
      cornerRadius="50%"
      sx={{
        animationDuration: "550ms",
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          transform: "translate(0px, 0px)",
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: getColor(animatedValue), // Dynamically change color with animation
        },
      }}
      text={({ value }) => `${Math.round(value)} %`} // Round value for smoother display
    />
  );
}
