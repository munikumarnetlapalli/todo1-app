export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°`;
};

export const getTemperatureColor = (temp: number): string => {
  if (temp <= 0) return 'text-blue-500';
  if (temp <= 15) return 'text-blue-400';
  if (temp <= 25) return 'text-green-500';
  if (temp <= 30) return 'text-orange-500';
  return 'text-red-500';
};