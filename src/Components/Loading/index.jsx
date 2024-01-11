import React from "react"

export default class Loading extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <p>Cargando...</p>
      </div>
    )
  }
}
