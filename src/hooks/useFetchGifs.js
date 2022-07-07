
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        
        if(newImages.length === 0) {
            alert('No hay Gifs');
        }
        
        setImages(newImages);
        setIsLoading(false);
    }
  
    useEffect(() => {
        setTimeout(() => {
            getImages(); 
        }, 3000);
    }, []);


    return {
        images,
        isLoading
    }
}