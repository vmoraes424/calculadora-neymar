import { useState } from "react";

export default function App() {
  const [neymares, setNeymares] = useState(0);
  const [massa, setNeymassas] = useState(0);
  const [altura, setAltura] = useState<number | undefined>(undefined);
  const [peso, setPeso] = useState<number | undefined>(undefined);

  const alturaNey = 175
  const pesoNey = 68

  function handleClickAltura() {
    if (altura !== undefined) {
      setNeymares(altura / alturaNey);
    }
  }
  function handleClickPeso() {
    if (peso !== undefined) {
      setNeymassas(peso / pesoNey);
    }
  }

  return (
    <main>
      <h1>Calculadora Neymar</h1>
      <img src="./foto.jpeg" alt="" width={500} />
      <div className="container">
        <div className="altura">
          <label>Quantos centímetros você mede?</label>
          <input
            type="number"
            onChange={(e) => setAltura(Number(e.target.value))}
            value={altura !== undefined ? altura : ""}
          />
          <button onClick={handleClickAltura}>Calcular</button>
          {neymares > 0 && (
            <p>Você tem {neymares.toFixed(2)} Neymares de altura!</p>
          )}
        </div>
        <div className="peso">
          <label>Quantos você pesa?</label>
          <input
            type="number"
            onChange={(e) => setPeso(Number(e.target.value))}
            value={peso !== undefined ? peso : ""}
          />
          <button onClick={handleClickPeso}>Calcular</button>
          {massa > 0 && <p>Você pesa {massa.toFixed(2)} Neymassas!</p>}
        </div>
      </div>
    </main>
  );
}
