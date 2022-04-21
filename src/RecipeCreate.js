import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value)
  
  const [cuisine, setCuisine] = useState("");
  const handleCuisineChange = (event) => setCuisine(event.target.value)
  
  const [photo, setPhoto] = useState("");
  const handlePhotoChange = (event) => setPhoto(event.target.value)
  
  const [ingredients, setIngredients] = useState("");
  const handleIngredientsChange = (event) => setIngredients(event.target.value)
  
  const [preparation, setPreparation] = useState("");
  const handlePreparationChange = (event) => setPreparation(event.target.value)
  
  const handleSubmit = (event) => {
  event.preventDefault();
  createRecipe({name, cuisine, photo, ingredients, preparation})
  setName("");
  setCuisine("");
  setPhoto("")
  setIngredients("")
  setPreparation("")
};  
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" placeholder="Name" required={true} onChange={handleNameChange} value={name}></input>
            </td>
            <td>
              <input id="cuisine" name="cuisine" placeholder="Cuisine" required={true} onChange={handleCuisineChange} value={cuisine}></input>
            </td>
              <td>
              <input id="photo" name="photo" placeholder="URL" required={true} onChange={handlePhotoChange} value={photo}></input>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" required={true} onChange={handleIngredientsChange} value={ingredients}></textarea>
            </td>
             <td>
              <textarea id="preparation" name="preparation"placeholder="Preparation" required={true} onChange={handlePreparationChange} value={preparation}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
