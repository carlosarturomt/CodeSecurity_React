import { useEffect, useState } from "react"

export default function UseState() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
        console.log('change');
      }, 3000)
    }
  }, [loading])

  return (
    <div>
      <h2>Eliminar UseState</h2>
      <p>Por favor escribe el código de seguridad.</p>

      {error && <p>Error: El código es incorrecto</p> // Si error es TRUE entonces...
      }

      {loading && <p>Cargando...</p> // Si loading es TRUE entonces...
      }

      <input placeholder="Código de segurtidad" />
      <button onClick={() => setLoading(!loading)}>Comprobar</button>
    </div>
  )
}
