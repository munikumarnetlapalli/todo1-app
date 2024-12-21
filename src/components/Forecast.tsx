import React from 'react';
import { ForecastData } from '../types/weather';
import { formatTemperature, getTemperatureColor } from '../utils/temperature';

interface ForecastProps {
  data: ForecastData;
}

export const Forecast: React.FC<ForecastProps> = ({ data }) => {
  const dailyForecast = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="mt-6 animate-slideUp" style={{ animationDelay: '200ms' }}>
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-4">
        {dailyForecast.map((day, index) => {
          const tempColor = getTemperatureColor(day.main.temp);
          return (
            <div
              key={day.dt}
              className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-gray-500">
                {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                  weekday: 'short',
                })}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].main}
                className="mx-auto w-12 h-12 animate-float"
              />
              <p className={`font-semibold ${tempColor}`}>
                {formatTemperature(day.main.temp)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};