// Calculator.tsx
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult(null);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-500 to-pink-500">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded-md text-right font-bold text-xl"
            type="text"
            value={result !== null ? result : input}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*'].map(
            (button) => (
              <button
                key={button}
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            )
          )}
          <button
            className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
            onClick={handleCalculate}
          >
            =
          </button>
          <button
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-2">
          <button
            className="w-full py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button
            className="w-full py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
          <button
            className="w-full py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
            onClick={handleClear}
          >
            C
          </button>
          <button
            className="w-full py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
            onClick={() => handleButtonClick('*')}
          >
            *
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
