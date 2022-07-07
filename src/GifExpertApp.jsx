import { useState } from "react";

import { AddCategory, GifGrip } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Bill Gates']);

  //Declarando funcion para agregar categorias al useState "categories"
  const onAddCategory = ( newCategory ) => {
    const newCategoryMinus = newCategory.toLowerCase();

    //Si el state "categories" incluye la nueva categoria (newCategory)
    if(categories.includes(newCategoryMinus)) { 
      alert('Has ingresado una categoria ya existente en la lista');  
      return 
    }

    setCategories([ newCategoryMinus, ...categories ]); //Forma 1
    //setCategories(cat => [ newCategory, ...cat ]);   //Forma 2 
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          //setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) } 
        />

        {/* Grip de gif (fila de cada categoria)*/}
        { categories.map((category) => (
            <GifGrip 
              key={ category } 
              category={ category } 
            />
          )) 
        }
    </>
  )
}
