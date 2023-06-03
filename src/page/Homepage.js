    import React from 'react'
    import {Link,useNavigate} from 'react-router-dom'

    const Homepage = () => {
        const navigate =useNavigate()
        const goProductPage= ()=> {
            navigate('/products?q=pants')
        }
    return (
        <div>
            <h1>Homepage</h1>
        <Link to ="/about"> Go To about page</Link> {/* 마치 a태그 처럼 사용 가능하게끔 해준다.  */}
        <button onClick={goProductPage}>go to product page</button>
        </div>
    )
    }

    export default Homepage