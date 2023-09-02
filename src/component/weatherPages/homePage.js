import { useContext, useEffect, useState } from "react";
import WeatherDetails from "../weather-details";
import WeatherHeader from "../weather-header.";
import WeatherForcast from "../weatherForcast";
import { Context } from "@/context";
import Image from "next/image";

const HomePage = () => {
  const { state, dispatch } = useContext(Context);

  const successCallback = (position) => {
    // console.log(position.coords);
    dispatch({
      type: "LOCATIONUDPATE",
      payload: {
        location: `${position?.coords?.latitude},${position.coords?.longitude}`,
      },
    });
  };

  const errorCallback = (error) => {
    // console.log(error);
  };

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <section
      style={{ display: "flex", flexFlow: "column nowrap", gap: "2rem" }}
    >
      <div style={{ display: "none" }}>
        <Image
          src="/icon-384x384.png"
          width={250}
          height={250}
          alt="nectar-logo"
          priority={true}
        />{" "}
        <Image
          src="/assets/img/icons/offline.png"
          width={70}
          height={65}
          alt="nectar-logo"
          priority={true}
        />
      </div>
      <WeatherHeader />
      <WeatherDetails />
      <WeatherForcast />
    </section>
  );
};

export default HomePage;
