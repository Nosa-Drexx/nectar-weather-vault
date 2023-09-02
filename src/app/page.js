"use client";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context";
import WeatherLayout from "@/component/Layout/weather-layout";
import HomePage from "@/component/weatherPages/homePage";
import OffLinePage from "@/component/_offline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  let isOnline;
  const [online, setOnline] = useState(true);
  const [showOnlineToast, setShowOnlineToast] = useState(null);

  //State updates when user is either offline or online
  useEffect(() => {
    isOnline = "onLine" in navigator ? navigator.onLine : true;
    setOnline(isOnline);
    window.addEventListener("online", () => {
      isOnline = true;
      setOnline(isOnline);
      setShowOnlineToast(true);
    });
    window.addEventListener("offline", () => {
      isOnline = false;
      setOnline(isOnline);
      setShowOnlineToast(false);
    });
  }, []);

  //Toast for when users is back online
  useEffect(() => {
    if (online && showOnlineToast) {
      toast(
        <div
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Welcome back online!
          <p>
            <span style={{ fontSize: "50px" }}>&#127882;</span>
          </p>
        </div>,
      );
    }
  }, [online, showOnlineToast]);

  return (
    <>
      <ToastContainer position="top-center" />
      {online ? (
        <WeatherLayout>
          <HomePage />
        </WeatherLayout>
      ) : (
        <OffLinePage />
      )}
    </>
  );
}
