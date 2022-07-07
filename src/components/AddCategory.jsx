/*===============INPUT BUSCADOR DE CATEGORIAS===================*/

import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) { 
            alert('Debe ingresar mas de un Caracter');
            return 
        };

        //Mutando el estado inicial recibido por props
        //setCategories((cate) => [inputValue, ...cate]);

        //Enviando el valor del input, a la funcion proveniente del padre (onNewCategory)
        onNewCategory(inputValue.trim()); 

        setInputValue('');
    }

    
    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    );
}
