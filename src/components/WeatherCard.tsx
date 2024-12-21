import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';
import { formatTemperature, getTemperatureColor } from '../utils/temperature';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const tempColor = getTemperatureColor(data.main.temp);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6 animate-slideUp">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold animate-fadeIn">{data.name}</h2>
          <p className={`text-5xl font-bold mt-2 transition-colors duration-300 ${tempColor}`}>
            {formatTemperature(data.main.temp)}
          </p>
          <p className="text-gray-500 mt-1 capitalize">{data.weather[0].description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="w-32 h-32 animate-float"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <Droplets className="text-blue-500 animate-bounce" />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold">{data.main.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <Wind className="text-blue-500 animate-pulse" />
          <div>
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p className="font-semibold">{data.wind.speed} m/s</p>
          </div>
        </div>
        <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <Cloud className="text-blue-500 animate-float" />
          <div>
            <p className="text-sm text-gray-500">Feels Like</p>
            <p className="font-semibold">{formatTemperature(data.main.feels_like)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};