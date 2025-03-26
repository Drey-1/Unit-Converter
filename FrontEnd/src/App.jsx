import { useState } from "react";

function App() {
  const measures = {
    length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"],
    weight: ["milligram", "gram", "kilogram", "ounce", "pound"],
    temperature: ["celsius", "fahrenheit", "kelvin"],
  };
  
  const valueMensure = {
    "millimeter": "Mm",
    "centimeter": "Cm",
    "meter": "M",
    "kilometer": "Km",
    "inch": "I",
    "foot": "F",
    "yard": "Y",
    "mile": "Mi",
    "milligram": "Mg",
    "gram": "G",
    "kilogram": "Kg",
    "ounce": "O",
    "pound": "P",
    "celsius": "C",
    "fahrenheit": "F",
    "kelvin": "K",
  };

  const [actuallyPag, setActuallyPag] = useState("length");
  const [result, setResult] = useState(null);
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");

  async function Convert() {
    try {
      const response = await fetch("http://localhost:3033/" + actuallyPag, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          value: value,
          fromUnit: fromUnit,
          toUnit: toUnit
        })
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const data = await response.json();
      setResult(data.convertedValue);
    } catch (error) {
      console.error("Error converting units:", error);
      setResult(null);
    }
  }

  return (
    <div className="w-screen h-screen bg-yellow-50 flex justify-center">
      <section className="w-2/5 h-11/12 bg-white border-blue-950 border-4 rounded-4xl self-center overflow-hidden">
        <div className="bg-blue-400 h-14 border-b-2 border-blue-900">
          <h1 className="text-white text-5xl font-bold font-sans text-center">Unit Converter</h1>
        </div>
        <nav className="flex justify-around mb-4 mt-4">
          {["length", "temperature", "weight"].map((category) => (
            <button
              key={category}
              onClick={() => setActuallyPag(category)}
              className={`text-lg cursor-pointer font-semibold transition-colors ${
                actuallyPag === category ? "text-blue-500" : "text-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </nav>
        <div className="flex-col flex ml-10 mr-10">
          <label htmlFor="value">Enter Value to convert:</label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border-2 rounded-md p-1 max-w-80 border-blue-500 focus:border-blue-500 focus:outline-none"
          />
          <label htmlFor="to">Enter the Unit to convert:</label>
          <select 
            className="select" 
            name="to" 
            id="to"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {measures[actuallyPag].map((value) => (
              <option key={value} value={valueMensure[value]}>
                {value}
              </option>
            ))}
          </select>
          <label htmlFor="from">Unit to convert from:</label>
          <select 
            className="select" 
            name="from" 
            id="from"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {measures[actuallyPag].map((value) => (
              <option key={value} value={valueMensure[value]}>
                {value}
              </option>
            ))}
          </select>
          <button 
            onClick={Convert} 
            className="bg-blue-500 active:bg-blue-700 cursor-pointer text-white p-2 w-40 rounded-2xl text-2xl mt-5"
          >
            Convert
          </button>
          
          {result !== null && (
            <div className="mt-4">
              <span>Result: </span>
              <h2 className="text-blue-500 text-3xl">{result}</h2>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;