import React from "react";
import SingleRecipe from "./SingleRecipe.js"

function RecipeList( {recipes, handleDeleteRecipe} ) {
  
    let recipeList = recipes.map( (recipe, index) => (
   < SingleRecipe
        handleDeleteRecipe={() => handleDeleteRecipe(index)}
        key={index}
        recipe={recipe} 
     />
  ))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeList}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
