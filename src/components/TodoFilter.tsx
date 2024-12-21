import React from 'react';
import { TodoFilter as FilterType } from '../types/todo';

interface TodoFilterProps {
  current: FilterType;
  onChange: (filter: FilterType) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ current, onChange }) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="flex gap-2">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-4 py-2 rounded-lg capitalize transition-all ${
            current === filter
              ? 'bg-blue-500 dark:bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};