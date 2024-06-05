import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const addToCart = (newProduct) => {
    const condition = inCart(newProduct.id)
    if(condition){
        const modifiedProducts = cart.map((productCart ) => {
          if(productCart.id === newProduct.id){
              return {...productCart, quantity: productCart.quantity + newProduct.quantity}
          }
          else{
            return productCart
          }
        })

        setCart(modifiedProducts) 
    }else{
      
      setCart([...cart, newProduct])
    }

  }

  const quantityTotal = () => {
    const quantityTotalProducts = cart.reduce((total, product) => total + product.quantity, 0)
    return quantityTotalProducts
  } 
  
const deleteAll = () => { 
    setCart([])
}

const inCart = (idProduct) => {
  const condition = cart.some((productCart) => productCart.id === idProduct )
  return condition
}

const deleteProduct = (idProduct) => {
  const productFilter = cart.filter((productCart) => productCart.id !== idProduct)
  setCart(productFilter)
}

const totalPrice = () => {
  const totalBuys = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0)
  return totalBuys
}


  return (
    <CartContext.Provider value={{ cart, addToCart, quantityTotal,deleteAll,deleteProduct, totalPrice }}>
        {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
