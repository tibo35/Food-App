import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsBump, setbuttonIsBump] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbuttonIsBump(true);
    const timer = setTimeout(() => {
      setbuttonIsBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${buttonIsBump ? classes.bump : ""}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
