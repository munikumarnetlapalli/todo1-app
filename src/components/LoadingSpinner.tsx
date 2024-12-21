import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto">
        <div className="h-8 w-8 rounded-full border-b-2 border-blue-300 animate-spin absolute"></div>
      </div>
    </div>
  );
};