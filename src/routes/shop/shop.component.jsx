import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"

import ProductCard from "../../componets/product-card/product-card.component"
import './shop.styles.scss'

const Shop = () => {
  
  const { product } = useContext(ProductsContext)
  
  const ShopData = product.map((product) => {
    return <ProductCard key={product.id} product={product} />
  }) 
  return (
    <div className="products-container">
      {ShopData}
    </div>
  )
}

export default Shop