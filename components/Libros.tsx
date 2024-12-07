"use client"
import React from 'react'
import { useEffect } from 'react'


type librostype = {
  id: number
  titulo: string
  autor: string
  imagen: string
  categoria: string
}





const Libros:React.FC = () => {
    const [libros, setLibros] = React.useState<librostype[]>([])
    
useEffect(() => {
    const fetchLibros = async () => {
        try {
            const response = await fetch('/libros.json')
            const data = await response.json()
            setLibros(data)
        } catch (error) {
            console.error(error)
        }
    }
    fetchLibros()
}, [])

  return (
    <div>
        <h1>Libros</h1>
        <div>
            {libros.map((libro) => (
                <div key={libro.id}>
                    <h2>{libro.titulo}</h2>
                    <p>{libro.autor}</p>
                    <img src={libro.imagen} alt={libro.titulo} />
                    <p>{libro.categoria}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Libros