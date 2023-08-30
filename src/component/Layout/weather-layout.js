const WeatherLayout = ({ children, ...config }) => {
  return (
    <div className="weather-bg" {...config}>
      {children}
    </div>
  );
};

export default WeatherLayout;
