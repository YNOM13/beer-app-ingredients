import React from 'react';
import "./Ingredients.css"
interface IIngredientsProps {
  ingredients:string[]
}
const Ingredients = ({ingredients}:IIngredientsProps) => {
  return (
    <>
      {ingredients.map((item,index) => <span className="ingredients-element" key={index}>
        {item}, &nbsp;
      </span>)}
    </>
  );
};

export default Ingredients;