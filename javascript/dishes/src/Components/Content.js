import "../App.css";

function parseIngredients(data) {
  const keys = Object.keys(data);
  const ingredients = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.indexOf("strIngredient") !== -1 && data[key] !== "") {
      const ingredientNumber = parseInt(key.substring(13));
      const ingredient = data[key];
      const ingredientAmount = data["strMeasure" + ingredientNumber];
      ingredients.push(ingredient + " - " + ingredientAmount);
    }
  }
  return ingredients;
}

function getInstructions(data) {
    const instructions = data.strInstructions.split(".")
    instructions.pop()
    return instructions
}

const Content = ({ data }) => {
  return (
    <div class="container">
      <p class="dish-name">
        <strong>
          {data.strMeal} ({data.strArea})
        </strong>
      </p>
      <img className="image" src={data.strMealThumb} />
      <section>
        <ul class="ingredients-list">
          {parseIngredients(data).map((ingredient, index) => (
            <li key="index">{ingredient}</li>
          ))}
        </ul>
      </section>
      <section className="recipe">
        <h2>Recipe:</h2>
        <ul>
            {getInstructions(data).map(
                (sentence, index) => (
                    <li>{sentence}</li>
                )
            )}
        </ul>
      </section>
    </div>
  );
};

export default Content;
