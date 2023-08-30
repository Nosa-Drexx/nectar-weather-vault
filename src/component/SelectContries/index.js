"use client";
import { Context } from "@/context";
import React, { useContext, useEffect, useState } from "react";
// import { useQuery } from "react-query";

const SelectState = ({ clickEvent, ...config }) => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const { currentWeather, locationData, locationSet } = user;
  const [allCountries, setAllCountries] = useState([
    "Lagos, Nigeria",
    "Abuja, Nigeria",
    "Edo, Nigeria",
    "Benin, Nigeria",
  ]);

  function handleClick(value) {
    dispatch({ type: "LOCATIONUDPATE", payload: { location: value } });
    clickEvent();
    // console.log(value);
  }
  //   const getAllCountries = async function () {
  //     const fetchCountries = await fetch("https://restcountries.com/v3.1/all", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     });
  //     const response = await fetchCountries.json();
  //     console.log(response.data);
  //     setAllCountries(response);
  //   };

  //   useEffect(() => {
  //     getAllCountries(setAllCountries);
  //   }, []);
  const handleLocation = () => {
    const successCallback = (position) => {
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

    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    clickEvent();
  };

  return (
    <div {...config} className="select-location">
      <button
        value="Current Location"
        className="select-location-options"
        onClick={() => {
          handleLocation();
        }}
      >
        Use Current Location
      </button>

      {/* Help with auto keys  */}
      {React.Children.toArray(
        allCountries
          .sort((a, b) => {
            //sort by name
            const nameA = a.toUpperCase(); // ignore upper and lowercase
            const nameB = b.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          })
          .map((coun) => {
            return (
              <button
                className="select-location-options"
                value={coun}
                onClick={(evt) => {
                  handleClick(evt.target.value);
                }}
              >
                {coun}
              </button>
            );
          }),
      )}
    </div>
  );
};

export default SelectState;
