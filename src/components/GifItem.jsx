/* ----------COMPONENTE QUE SE ENCARGARA DE MANEJAR EL ITEM O CARD DE CADA GIF ------------ */


export const GifItem = ({ title, url }) => {
  
    //console.log(title, url);

    return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
