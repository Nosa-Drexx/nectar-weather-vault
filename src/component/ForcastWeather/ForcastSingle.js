import { useEffect, useState } from "react";
import DefaultWeatherData from "../DefaultData";
import ExternalImageRequest from "../ImageContainer";

function getDayFromDate(date = "2023-08-30'") {
  const dateArr = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const dateJs = new Date(date).getDay();
  const day = dateArr[dateJs];
  return day;
}

function getCurrentDate() {
  const date = new Date();
  const m =
    (date.getMonth() + 1).toString().length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const d =
    date.getDate().toString().length < 2
      ? `0${date.getDate()}`
      : date.getDate();
  const currentDate = `${date.getFullYear()}-${m}-${d}`;
  return currentDate;
}

const ForcastSingle = ({ data }) => {
  const [currentDate, setCurrentDate] = useState("");
  getDayFromDate();
  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, [data]);
  return (
    <div
      className={
        currentDate == data.date
          ? "forcast-container current-day-forcast"
          : "forcast-container"
      }
    >
      <div className="forcast-day">
        {getDayFromDate(data.date)}
        <span style={{ fontSize: "0.7rem" }}>
          {new Date(data.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
      <div className="forcast-condition">
        <ExternalImageRequest
          imgSrc={`https:${data?.day?.condition?.icon}`}
          width={100}
          height={100}
        />

        <h2 className="condition-degree" style={{ color: "white" }}>
          {data.day.maxtemp_c ? (
            <span style={{ position: "relative" }}>
              {data.day.maxtemp_c}
              <span
                style={{ fontSize: "1.2rem", position: "absolute", top: "0" }}
              >
                &deg;
              </span>
              &nbsp;c
            </span>
          ) : (
            <DefaultWeatherData />
          )}
        </h2>
      </div>
    </div>
  );
};

export default ForcastSingle;
