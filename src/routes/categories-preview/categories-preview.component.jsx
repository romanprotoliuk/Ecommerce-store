import { Fragment } from "react"

import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/category.selector"

import CategoryPreview from "../../componets/category-preview/category-preview.component"

const CategoriesPreview = () => {
  
  const categoriesMap = useSelector(selectCategoriesMap)

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