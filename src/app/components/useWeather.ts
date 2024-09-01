// app/weather/useWeather.ts
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWeather } from "../../redux/weatherSlice";

const useWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const fetchWeather = async (id: String) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${id}`,
        {
          headers: {
            "X-Zomato-Api-Key": "9df8b25b014e8b74e8f9ab6efc2a477e",
          },
        }
      );
      const data = await response.json();

      if (data.error) {
        setError(data?.error?.message);
      } else {
        dispatch(
          setWeather({
            temperature: data?.locality_weather_data?.temperature,
            humidity: data?.locality_weather_data?.humidity,
            wind_speed: data?.locality_weather_data?.wind_speed,
            wind_direction: data?.locality_weather_data?.wind_direction,
            rain_intensity: data?.locality_weather_data?.rain_intensity,
            rain_accumulation:
              data?.locality_weather_data?.rain_accumulation,
          })
        );
      }
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchWeather };
};

export default useWeather;
