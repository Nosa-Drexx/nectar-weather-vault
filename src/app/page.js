"use client";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context";
import WeatherLayout from "@/component/Layout/weather-layout";
import HomePage from "@/component/weatherPages/homePage";

// const inter = Inter({ subsets: ["latin"] });

// const fetchWeather = async (setResponse) => {
//   const data = await fetch(
//     `${process.env.API_ENDPOINT}/current.json?key=${process.env.WEATHER_KEY}&q=London&aqi=no`,
//   );
//   const response = await data.json();
//   console.log(response);
//   setResponse(response);
// };

export default function Home() {
  // const [test, setTest] = useState([]);
  // const { state, dispatch } = useContext(Context);

  // useEffect(() => {
  //   fetchWeather(setTest);
  // }, []);
  return (
    <WeatherLayout>
      <HomePage />
    </WeatherLayout>
  );
}
