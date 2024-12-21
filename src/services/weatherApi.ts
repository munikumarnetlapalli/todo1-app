import axios from 'axios';
import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = async (city: string): Promise<WeatherData> => {
  if (!API_KEY) {
    throw new Error('Weather API key is not configured');
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
      }
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      }
    }
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
};

export const getForecast = async (city: string): Promise<ForecastData> => {
  if (!API_KEY) {
    throw new Error('Weather API key is not configured');
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
      }
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      }
    }
    throw new Error('Failed to fetch forecast data. Please try again later.');
  }
};