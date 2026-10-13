import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const ItemList = ({products}) => {
  if (!products.length) {
    return <p>No hay productos</p>
  }

  return <div className="row">
    {products.map((product) => (
      <Link to={`/product/${product.id}`} key={product.id} className="col-4 border mr-2">
        <Item {...product}/>
      </Link>
    ))}
  </div>
};