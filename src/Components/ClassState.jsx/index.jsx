import React from "react"
import Loading from "../Loading";

export default class ClassState extends React.Component {
  constructor(props) {
    super() //Se debe llamar la función super() cuando se quiere modificar sin todo lo que vive en React.Component. Las props ahora también viven en el constructor

    this.state = {
      error: false,
      loading: false,
    }
  }

  //componentWillMount() { //No se ejecuta una y otra vez al cambio de estado
  /* UNSAFE_componentWillMount() {
    console.log('componentWillMount')
  } */

  /* componentDidMount() { //No se ejecuta una y otra vez al cambio de estado
    console.log('componentDidMount');
  } */

  componentDidUpdate() { //Se ejecuta cada que se actualiza el estado
    console.log('componentDidUpdate = Actualización')

    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false })
        console.log('change')
      }, 3000)
    }

  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor escrie el código de seguridad.</p>

        {this.state.error && <p>Error: El código es incorrecto</p> // Si error es TRUE entonces...
        }

        {this.state.loading && <Loading /> // Si error es TRUE entonces...
        }

        <input placeholder="Código de segurtidad" />
        <button
          onClick={() => this.setState({ loading: true })}
        >Comprobar</button>
      </div>
    )
  }
}
