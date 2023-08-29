"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const fetchWeather = async (setResponse) => {
  const data = await fetch(
    `${process.env.API_ENDPOINT}/current.json?key=${process.env.WEATHER_KEY}&q=London&aqi=no`
  );
  const response = await data.json();
  console.log(response);
  setResponse(response);
};

export default function Home() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetchWeather(setTest);
  }, []);
  return <h1 className="test-h1">Hello</h1>;
}
