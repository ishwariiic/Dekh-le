import React, { useState } from 'react';

export default function UseStateExamples() {

  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [newItem, setNewItem] = useState('');

  const [score, setScore] = useState(0);


  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 pt-4">
        useState Hook Examples
      </h1>

      {}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">1. Basic String State</h2>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-gray-700">Hello, {name || 'Anonymous'}!</p>
        </div>
      </div>

      {}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 mt-8">
        <h2 className="text-xl font-semibold text-green-800 mb-4">2. Number State - Counter</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            -
          </button>
          <span className="text-2xl font-bold text-gray-800">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            +
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Reset
          </button>
        </div>
      </div>

      {}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 mt-8">
        <h2 className="text-xl font-semibold text-purple-800 mb-4">3. Boolean State - Toggle</h2>
        <div className="space-y-3">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            {isVisible ? 'Hide' : 'Show'} Content
          </button>
          {isVisible && (
            <div className="p-4 bg-purple-100 rounded border-l-4 border-purple-500">
              <p>This content is now visible! Toggle the button to hide it.</p>
            </div>
          )}
        </div>
      </div>

      {}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 mt-8">
        <h2 className="text-xl font-semibold text-yellow-800 mb-4">4. Array State - Item List</h2>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Add new item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
              className="flex-1 p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleAddItem}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                <span className="text-gray-800 font-medium">{item}</span>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="px-3 py-1.5 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 mt-8">
        <h2 className="text-xl font-semibold text-teal-800 mb-4">5. Functional State Updates</h2>
        <div className="space-y-4">
          <div className="inline-block bg-teal-100 px-4 py-2 rounded-lg">
            <p className="text-lg font-medium text-teal-800">
              Score: <span className="font-bold text-2xl">{score}</span>
            </p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setScore(prevScore => prevScore + 10)}
              className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              +10 Points
            </button>
            <button
              onClick={() => setScore(prevScore => prevScore + 50)}
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              +50 Points
            </button>
            <button
              onClick={() => setScore(prevScore => Math.max(0, prevScore - 25))}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              -25 Points
            </button>
            <button
              onClick={() => setScore(0)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Reset Score
            </button>
          </div>
          <p className="text-sm text-gray-600">
         
          </p>
        </div>
      </div>
    </div>
  );
}
