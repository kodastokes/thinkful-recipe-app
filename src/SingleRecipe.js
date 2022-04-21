import React from "react";

function SingleRecipe({recipe, key, handleDeleteRecipe}){
  return (
    <tr key={key}>
      <td> 
        <p> {recipe.name} </p>
      </td>
      <td> 
        <p> {recipe.cuisine} </p>
      </td>
      <td> 
        <img alt={recipe.name} src={recipe.photo}/>
      </td>
      <td className="content_td"> 
        <p> {recipe.ingredients} </p>
      </td>
      <td className="content_td"> 
        <p> {recipe.preparation} </p>
      </td>
      <td>
        <button name="delete" onClick={handleDeleteRecipe}>Delete</button>
      </td>
    </tr>
  )
}




export default SingleRecipe;