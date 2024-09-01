"use client";
import { useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import useWeather from "../components/useWeather";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BounceLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WeatherPage: React.FC = () => {
  const { loading, error, fetchWeather } = useWeather();
  const router = useRouter();

  const { locality, weather } = useSelector((state: any) => state);

  const notify = () =>
    toast(
      "Some weather data are not available for this location at the moment !"
    );
  useEffect(() => {
    const { currentWeather } = weather;
    if (
      currentWeather &&
      (!currentWeather?.humidity ||
        !currentWeather?.temperature ||
        !currentWeather?.wind_speed ||
        !currentWeather?.rain_intensity ||
        !currentWeather?.rain_accumulation)
    )
      notify();
  }, [weather]);

  useEffect(() => {
    if (locality?.id) fetchWeather(locality.id);
    else router.push("/");
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
      {loading && (
        <p className="mt-4 flex items-center justify-center h-screen">
          <BounceLoader
            color="#000"
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </p>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {weather?.currentWeather && (
        <WeatherCard
          weather={weather.currentWeather}
          locality={locality.localityName}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default WeatherPage;
