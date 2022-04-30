import { useContext, Fragment } from "react"
import { CategoriesContext } from "../../contexts/categories.context"

import CategoryPreview from "../../componets/category-preview/category-preview.component"

const CategoriesPreview = () => {
  
  const { categoriesMap } = useContext(CategoriesContext)

  const ShopData = Object.keys(categoriesMap).map((title) => {
    const products = categoriesMap[title]
    return <CategoryPreview key={title} title={title} products={products} />
  })
  return (

    <Fragment>
      {ShopData}
    </Fragment>
  )
}

export default CategoriesPreview