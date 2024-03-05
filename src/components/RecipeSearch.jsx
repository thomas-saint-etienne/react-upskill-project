import React, { useState } from 'react';

export const RecipeSearch = () => {
    const [ingredient, setIngredient] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [numRecipes, setNumRecipes] = useState(10); // Default to 10 recipes
  
    const fetchRecipes = async () => {
      const app_id = '995bf97d';
      const app_key = '1ee78c273dc42a9ca5a174f734944be2'; 
      const type = 'public';
  
      try {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=${type}&q=${ingredient}&app_id=${app_id}&app_key=${app_key}`);
        const data = await response.json();
        setRecipes(data.hits.slice(0, numRecipes)); // Slice the array to limit the number of recipes
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchRecipes();
    };

    const handleImageClick = (event) => {
        event.target.classList.toggle('spin'); // Toggle the 'spin' class on click
      };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Ingredient:
            <input type="text" value={ingredient} onChange={e => setIngredient(e.target.value)} />
          </label>
          <label>
            Number of Recipes:
            <input type="number" value={numRecipes} onChange={e => setNumRecipes(e.target.value)} />
          </label>
          <button type="submit">Search</button>
        </form>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipe.label}</h2>
            <img className='recipe-image' src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.calories} calories </p>
          </div>
        ))}
      </div>
    );
};