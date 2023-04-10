import "./CartCard.css";
import { remove } from "../store/slice";
import { useDispatch,useSelector } from "react-redux";

export const CartCard = ({product}) => {
  const {name, price, image} = product;
  const dispatch = useDispatch()


  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>dispatch(remove(product))}>Remove</button>
      </div>
  )
}
