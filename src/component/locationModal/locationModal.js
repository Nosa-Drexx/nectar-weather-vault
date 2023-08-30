import SelectState from "../SelectContries";

const { default: WeatherLayout } = require("../Layout/weather-layout");

const LocationModal = ({ modalToggle }) => {
  return (
    <section
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        top: "0",
        zIndex: "999",
        left: "0",
      }}
    >
      <WeatherLayout
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <button
          onClick={() => modalToggle(false)}
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            color: "white",
            fontWeight: "bold",
          }}
          className="close-modal"
        >
          close
        </button>
        <div>
          <h2 style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>
            Set Location
          </h2>
          <p style={{ color: "white", fontWeight: "bold" }}>Choose State</p>
        </div>
        <div style={{ maxHeight: "500px", margin: "3rem 0px", height: "100%" }}>
          <SelectState clickEvent={() => modalToggle(false)} />
        </div>
      </WeatherLayout>
    </section>
  );
};

export default LocationModal;
