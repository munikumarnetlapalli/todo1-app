import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg 
      shadow-sm dark:shadow-gray-900/10 group animate-slideUp transition-colors">
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
          ${todo.completed 
            ? 'bg-green-500 border-green-500 dark:bg-green-600 dark:border-green-600' 
            : 'border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400'}`}
      >
        {todo.completed && <Check size={14} className="text-white" />}
      </button>
      <span className={`flex-1 transition-colors ${
        todo.completed 
          ? 'line-through text-gray-400 dark:text-gray-500' 
          : 'text-gray-700 dark:text-gray-200'
      }`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 
          transition-all opacity-0 group-hover:opacity-100"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};