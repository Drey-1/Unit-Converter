import { useState } from "react";

function App() {
  const measures = {
    length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"],
    weight: ["milligram", "gram", "kilogram", "ounce", "pound"],
    temperature: ["celsius", "fahrenheit", "kelvin"],
  };

  const [actuallyPag, setActuallyPag] = useState("length"); // Estado da categoria ativa
  const [value, setValue] = useState(""); // Estado do valor a converter
  const [fromUnit, setFromUnit] = useState(""); // Estado da unidade de origem
  const [toUnit, setToUnit] = useState(""); // Estado da unidade de destino
  const [result, setResult] = useState(null); // Estado para armazenar o resultado da conversão

  const handleConvert = async () => {
    if (!value || !fromUnit || !toUnit) {
      alert("Preencha todos os campos antes de converter!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3033/${actuallyPag}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          value: Number(value),
          fromUnit,
          toUnit,
        }),
      });

      const data = await response.json();
      setResult(data.result); // Atualiza o estado com o resultado da conversão
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao converter. Tente novamente.");
    }
  };

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
              className={`text-lg font-semibold transition-colors ${
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
            <option value="">Select unit</option>
            {measures[actuallyPag].map((unit) => (
              <option key={unit} value={unit}>
                {unit}
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
            <option value="">Select unit</option>
            {measures[actuallyPag].map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <button
            onClick={handleConvert}
            className="bg-blue-500 active:bg-blue-700 cursor-pointer text-white p-2 w-40 rounded-2xl text-2xl mt-5"
          >
            Convert
          </button>

          {/* Exibir o resultado abaixo do botão se existir */}
          {result !== null && (
            <div className="mt-5 text-xl font-bold text-blue-600">
              Result: {result}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;

