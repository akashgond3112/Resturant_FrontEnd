import React, { useState, useEffect } from "react";

interface Props {
  weekdayText: string[];
}

const MatchingDaySpan: React.FC<Props> = ({ weekdayText }) => {
  const [matchingText, setMatchingText] = useState<string>("");

  useEffect(() => {
    // Get the current day as a number (0 for Sunday, 1 for Monday, etc.)
    const currentDay: number = new Date().getDay();

    // Define an array of weekday names
    const weekdays: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Get the text for the current day
    const currentDayText: string = weekdays[currentDay];

    // Find the matching text in the weekdayText array
    const matchingText: string | undefined =
      weekdayText.find((text: string) => text.startsWith(currentDayText)) ?? "";

    // Set the matching text to state
    setMatchingText(matchingText);
  }, [weekdayText]);

  return <span>{matchingText}</span>;
};

export default MatchingDaySpan;
