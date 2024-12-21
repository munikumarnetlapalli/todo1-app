import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6 animate-fadeIn flex items-center gap-2">
      <AlertCircle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};