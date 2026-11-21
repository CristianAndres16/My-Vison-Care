import { useState } from 'react'
import './App.css'

function App() {
  const [mostrarAviso, setMostrarAviso] = useState(false)
  return (
    <main>
      <header>
        <p>My Vision Care</p>
        <span>Atención optométrica</span>
      </header>

      <section>
        <p>Sistema de gestión optométrica</p>
        <h1>Bienvenida</h1>
        <p>Desde aquí podrás iniciar la atención de tus pacientes.</p>
        <button
          type="button"
          onClick={() => setMostrarAviso(!mostrarAviso)}
>
          {mostrarAviso ? 'Ocultar mensaje' : 'Nueva atención'}
        </button>

{mostrarAviso && (
  <p>Aquí construiremos el formulario para una nueva atención.</p>
)}
      </section>
    </main>
  )
}

export default App
