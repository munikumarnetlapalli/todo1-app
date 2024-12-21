import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const completed = todos.filter(todo => todo.completed).length;
  const active = todos.length - completed;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
          <Clock size={20} />
          <span className="font-medium">Total</span>
        </div>
        <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{todos.length}</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
          <CheckCircle2 size={20} />
          <span className="font-medium">Completed</span>
        </div>
        <p className="text-2xl font-bold text-green-700 dark:text-green-300">{completed}</p>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg col-span-2 md:col-span-1">
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
          <Circle size={20} />
          <span className="font-medium">Active</span>
        </div>
        <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{active}</p>
      </div>
    </div>
  );
};