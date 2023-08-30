import Image from "next/image";

const ExternalImageRequest = ({
  imgSrc,
  width = 200,
  height = 200,
  alt = "condition-icon",
}) => {
  const externaImageLoader = ({ src }) => `${src}`;
  return (
    <Image
      loader={externaImageLoader}
      className="weather-icon"
      src={imgSrc ? imgSrc : "/assets/img/banners/default-weather.svg"}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ExternalImageRequest;
