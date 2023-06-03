import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {

    const navigate =useNavigate();  /* 우선은 이렇게 선언해야 됨 */


    const goToHomepage = () => {
        navigate('/')
    }

  return (
    <div>
        <h1>About page</h1>
        <button onClick={goToHomepage}>Go to Homepage</button> {/* 버튼을 클릭해서 이동하고자 할때 */}
    </div>
  )
}

export default Aboutpage