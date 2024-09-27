import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  
  const handleCart = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={handleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
