import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
  let [query,setQuery] =useSearchParams();
  console.log("가져와주세요",query.get("q"))
  return (
    <div>
        <h1>Show all Products</h1>
    </div>
  )
}

export default ProductPage