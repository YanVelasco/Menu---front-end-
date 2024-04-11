import "./App.css";
import { Card } from "./components/cardComponent/Card";
import { useFoodData } from "./hooks/useFoodData";

function App() {
  const { data } = useFoodData();
  console.log(data);
  
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            title={foodData.title}
            price={foodData.price}
            image={foodData.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
