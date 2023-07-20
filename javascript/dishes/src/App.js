import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Content from "./Components/Content";
import { Footer } from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  const fetchDish = async () => {
    setLoading(true);
    console.log("Started fetching");
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    console.log("Fetched");
    const currentDish = data.meals[0];
    setCurrentDish(currentDish);
    setLoading(false);
  };

  return (
    <>
      <Navbar onClick={fetchDish}/>
      {currentDish !== null ? (
        <Content data={currentDish}/>
      ) : (
        <div class="placeholder-text">
          <p><strong>Click Find me a recipe button to get a random recipe.</strong></p>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
