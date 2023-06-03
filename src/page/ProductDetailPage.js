import React from 'react'
import { useParams } from 'react-router-dom' /*  */

const ProductDetailPage = () => {

    // const params = useParams() ;
    const {id} =useParams(); //destruturing으로 바로 {id}로 작성
/*     console.log('params',params)  결과를 확인해보면, object가 반환 -> {id:2}이런식으로 확인된다. */

  return (
    <div>
        <h1>Show Product Detail{id}</h1>
    </div>
  )
}

export default ProductDetailPage