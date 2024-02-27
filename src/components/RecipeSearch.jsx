import React, { useState } from 'react';

export function RecipeSearch() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const app_id = '995bf97d'; // replace with your app id
    const app_key = '1ee78c273dc42a9ca5a174f734944be2'; // replace with your app key
    const type = 'public';

    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=${type}&q=${ingredient}&app_id=${app_id}&app_key=${app_key}`);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingredient:
          <input type="text" value={ingredient} onChange={e => setIngredient(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.recipe.label}</h2>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
      ))}
    </div>
  );
};