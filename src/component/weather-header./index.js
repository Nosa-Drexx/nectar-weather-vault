"use client";
import Image from "next/image";
import Link from "next/link";
import LocationModal from "../locationModal/locationModal";
import { useContext, useState } from "react";
import { Context } from "@/context";

const ImageIcon = ({ src, alt = "icon" }) => {
  return <Image src={src} width={20} height={20} alt={alt} />;
};

const WeatherHeader = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const { state } = useContext(Context);
  const { user } = state;
  const { locationSet } = user;
  return (
    <div className="settings-wrapper">
      <div>
        <button
          onClick={() => {
            setShowLocationModal(true);
          }}
          className="settings-link"
        >
          <ImageIcon
            src={"/assets/img/icons/location.svg"}
            alt={"location-icon"}
          />
          {locationSet}
          <ImageIcon
            src={"/assets/img/icons/down-arr.svg"}
            alt={"down-arr-icon"}
          />
        </button>
        {showLocationModal && (
          <LocationModal modalToggle={setShowLocationModal} />
        )}
      </div>
      <div>
        <Link href="#" className="settings-link">
          <ImageIcon
            src={"/assets/img/icons/settings.svg"}
            alt={"location-icon"}
          />
        </Link>
      </div>
    </div>
  );
};

export default WeatherHeader;
