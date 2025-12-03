import React from 'react'

const TarjetaRecomendacionComponent = (props) => {
    const {recomendacion,idx} = props

  return (
            <div key={idx}>
          <h3>Título: {recomendacion.title}</h3>
          <p>ISBN: {recomendacion.ISBN}</p>
          <p>Autor: {recomendacion.author}</p>
          <p>Descripción: {recomendacion.description}</p>
        </div>
  )
}

export default TarjetaRecomendacionComponent