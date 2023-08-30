"use client";
import { Context } from "@/context";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import ExternalImageRequest from "../ImageContainer";
import DefaultWeatherData from "../DefaultData";

const fetchWeather = async (
  state,
  dispatch,
  locationSet = "Benin, Nigeria",
  noOfForcast = 10,
) => {
  const data = await fetch(
    `${process.env.API_ENDPOINT}/forecast.json?key=${process.env.WEATHER_KEY}&q=${locationSet}&days=${noOfForcast}&aqi=no&alerts=no`,
  );
  const response = await data.json();
  dispatch({
    type: "WEATHER",
    payload: {
      locationData: response.location,
      currentWeather: response.current,
      forcast: response.forecast?.forecastday,
    },
  });
};

const WeatherDetails = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const { currentWeather, locationData, noOfForcast } = user;

  useEffect(() => {
    fetchWeather(state, dispatch, state.user.locationSet, noOfForcast);
  }, [state.user.locationSet]);

  const externaImageLoader = ({ src }) => `${src}`;
  return (
    <section>
      <div className="weather-icon-container">
        <ExternalImageRequest
          imgSrc={
            currentWeather.condition &&
            `https:${currentWeather.condition?.icon}`
          }
        />
        <p className="condition-text">
          {currentWeather.condition ? (
            `It's going to be ${currentWeather.condition?.text} today!`
          ) : (
            <DefaultWeatherData />
          )}
        </p>
        <h2 className="condition-degree">
          {currentWeather.temp_c ? (
            <span style={{ position: "relative" }}>
              {currentWeather.temp_c}
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
        <div className="w-100 user-condition-details">
          <div className="user-condition-location">
            <Image
              src={"/assets/img/icons/compass.svg"}
              width={20}
              height={20}
              alt="compass-icon"
            />
            {locationData.tz_id ? locationData.tz_id : <DefaultWeatherData />}
          </div>
          <div className="user-condition-location">
            <Image
              src={"/assets/img/icons/uv.svg"}
              width={20}
              height={20}
              alt="compass-icon"
            />
            {currentWeather.uv ? `${currentWeather.uv} uv` : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
