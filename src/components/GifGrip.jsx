/*-----ESTE COMPONENTE TIENE COMO FINALIDAD SERVIR DE CONTENEDOR DE LOS GIFS OBTENIDOS 
DE LA API ---------*/

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrip = ({ category }) => {

    //Custom Hook
    const { images, isLoading } = useFetchGifs(category);    

    return (
        <>
            { (images.length >= 1) && (<h3>{ category }</h3>) }
            

            { (isLoading) && (<p>Cargando...</p>) }

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
