import React from 'react';
import { CheckSquare } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilter } from './components/TodoFilter';
import { TodoStats } from './components/TodoStats';
import { ThemeToggle } from './components/ThemeToggle';
import { useTodos } from './hooks/useTodos';
import { useTheme } from './hooks/useTheme';

function App() {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo } = useTodos();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <CheckSquare className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Todo App</h1>
          </div>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <TodoInput onAdd={addTodo} />
        <TodoStats todos={todos} />

        <div className="mt-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            {filter === 'all' ? 'All Tasks' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks`}
          </h2>
          <TodoFilter current={filter} onChange={setFilter} />
        </div>

        <div className="mt-6 space-y-3">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
          {todos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                No {filter === 'all' ? '' : filter} tasks found
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Add a new task to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;