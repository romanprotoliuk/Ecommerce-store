import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  product: []
})

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState(PRODUCTS)
  const value = { product }

  return (
    <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
  )
}


