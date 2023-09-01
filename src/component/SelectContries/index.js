"use client";
import { Context } from "@/context";
import React, { useContext, useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

// import { useQuery } from "react-query";

const SelectState = ({ clickEvent, ...config }) => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const { currentWeather, locationData, locationSet } = user;

  const [allCountries, setAllCountries] = useState(State.getAllStates());

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
        Use Current Location{" "}
        <span style={{ color: "black", fontSize: "0.9rem" }}>
          (Requires location access)
        </span>
      </button>

      {/* Help with auto keys  */}
      {React.Children.toArray(
        allCountries
          .sort((a, b) => {
            //sort by name
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
                value={coun.name}
                onClick={(evt) => {
                  handleClick(evt.target.value);
                }}
              >
                {coun.name}
              </button>
            );
          }),
      )}
    </div>
  );
};

export default SelectState;
