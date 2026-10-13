import "./Item.css"

export const Item = ({ name, price, description, image, children }) => {
  return (
    <article>
      <img src={image} alt="imagen_articulo" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>

      {children}
    </article>
  )
};