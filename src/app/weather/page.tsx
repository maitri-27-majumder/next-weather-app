"use client";
import { useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import useWeather from "../components/useWeather";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Image from "next/image";

const WeatherPage: React.FC = () => {
  const { loading, error, fetchWeather } = useWeather();

  const { locality, weather } = useSelector((state: any) => state);

  useEffect(() => {
    if (locality?.id) fetchWeather(locality.id);
  }, [locality?.id]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <div className="flex gap-10 items-center">
        <div>
          <Image
            src="/GoogleLogo.png"
            alt="google Logo"
            width={130}
            height={27}
            priority
          />
        </div>
        <SearchBar />
      </div>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
     
      {weather?.currentWeather && (
        <WeatherCard weather={weather.currentWeather} locality={locality.localityName} />
      )}
    </div>
  );
};

export default WeatherPage;
