import "./App.css";
import { Card } from "./components/cardComponent/Card";
import { FoodData } from "./interface/FoodData";

function App() {
  const data: FoodData[] = [];
  return (
    <div className="containeter">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data.map((foodData) => (
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
