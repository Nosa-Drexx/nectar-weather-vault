"use client";
import { useContext, useEffect } from "react";
import SwipperWrapper from "../Swipper/SwipperWrapper";
import { Context } from "@/context";

const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
};

const WeatherForcast = () => {
  const { state } = useContext(Context);
  const { user } = state;
  const { forcast } = user;

  return (
    <div className="forcast-section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          paddingBottom: "0.5rem",
          fontWeight: "bold",
        }}
      >
        {`Today ${getCurrentDate()}`}
        <span>Next Ten days</span>
      </div>
      <SwipperWrapper contents={forcast} />
    </div>
  );
};

export default WeatherForcast;
