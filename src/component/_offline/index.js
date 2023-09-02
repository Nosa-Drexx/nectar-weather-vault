import WeatherLayout from "@/component/Layout/weather-layout";
import Image from "next/image";

export default function OffLinePage() {
  return (
    <WeatherLayout>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "fixed", top: "50px", right: "30px" }}>
          <Image
            src="/assets/img/icons/offline.png"
            width={70}
            height={65}
            alt="nectar-logo"
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/icon-384x384.png"
            width={250}
            height={250}
            alt="nectar-logo"
            priority={true}
          />
        </div>
        <div
          style={{
            position: "fixed",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.1rem",
            bottom: "100px",
            textAlign: "center",
          }}
        >
          You are Offline, Please Check your Wifi/Data Connectivity!
        </div>
      </div>
    </WeatherLayout>
  );
}
