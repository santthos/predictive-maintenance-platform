import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState<any>({});
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:8000/live');
      setData(res.data);

      const pred = await axios.get('http://localhost:8000/predict');
      setPrediction(pred.data.prediction);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Predictive Maintenance Dashboard</h1>
      <div className="bg-white shadow rounded p-4 mb-4">
        <p><strong>Sensor 1:</strong> {data.sensor1}</p>
        <p><strong>Sensor 2:</strong> {data.sensor2}</p>
        <p><strong>Prediction:</strong> {prediction}</p>
      </div>
    </div>
  );
}

export default App;