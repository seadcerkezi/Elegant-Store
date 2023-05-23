import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("card-item", []);
  const [favourite, setFavourite] = useLocalStorage("favorite", []);

  const onAdd = (item, color, size) => {
    console.log("on add");
    const newProduct = { ...item, colors: color, size: size };
    // setCartItems((prev) => [...prev, item]);
    const exist = cartItems.find(
      (x) =>
        x.id === newProduct.id &&
        x.colors === newProduct.colors &&
        x.size === newProduct.size
    );
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === newProduct.id &&
          x.colors === newProduct.colors &&
          x.size === newProduct.size
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...newProduct, qty: 1 }]);
    }
  };

  const onDelete = (item) => {
    setCartItems(
      cartItems.filter(
        (x) =>
          x.id !== item.id || x.colors !== item.colors || x.size !== item.size
      )
    );
  };

  const onAddQuantity = (item) => {
    setCartItems(
      cartItems.map((x) =>
        x.id === item.id && x.colors === item.colors && x.size === item.size
          ? { ...item, qty: item.qty + 1 }
          : x
      )
    );
  };

  const onRemoveQuantity = (item) => {
    setCartItems(
      cartItems.map((x) =>
        x.id === item.id && x.colors === item.colors && x.size === item.size
          ? { ...item, qty: item.qty - 1 }
          : x
      )
    );
  };

  const addFavourite = (item) => {
    const favExist = favourite.find((fav) => item.id === fav.id);
    console.log(" : ", favExist ? "True" : "False");
    !favExist && setFavourite((prev) => [...prev, { ...item }]);
  };

  const deleteFavourite = (item) => {
    setFavourite(favourite.filter((product) => item.id !== product.id));
  };

  console.log(cartItems);
  return (
    <CartContext.Provider
      value={{
        onAdd,
        cartItems,
        favourite,
        onAddQuantity,
        onRemoveQuantity,
        onDelete,
        addFavourite,
        deleteFavourite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
