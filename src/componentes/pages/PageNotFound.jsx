import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {

    const navigate = useNavigate();

    setTimeout(
        () => {
        navigate ("/")
        },2000
    )

  return (
    <div>
        <h1>
            Pagina no econtrada 
        </h1>
        <small> te estamos redirigiendo a la homepage...</small>
    </div>
  )
}

export default PageNotFound