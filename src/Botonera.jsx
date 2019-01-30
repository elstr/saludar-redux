import React, { Component } from "react";
import { connect } from "react-redux";
import { decirChau, decirHola, cambiarNombre } from "./State/actions";
import { Button } from "react-bootstrap";
class Botonera extends Component {
  constructor() {
    super();
    this.state = {
      nombre: ""
    };
    // this.despacharHola = this.despacharHola.bind(this);
    // this.despacharChau = this.despacharChau.bind(this);
    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.despacharCambiarNombre = this.despacharCambiarNombre.bind(this);
  }

  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  // despacharHola() {
  //   this.props.decirHola();
  // }
  // despacharChau() {
  //   this.props.decirChau();
  // }
  despacharCambiarNombre() {
    this.props.cambiarNombre(this.state.nombre);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.cambiarNombre} />
        <Button onClick={() => this.props.decirHola()}>Despachar Hola!</Button>
        <Button onClick={() => this.props.decirChau()}>Despachar Chau!</Button>
        <Button onClick={this.despacharCambiarNombre}>Cambiar nombre!</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mensaje: state.mensaje,
  nombre: state.nombre
});

const mapDispatchToProps = dispatch => ({
  decirHola: () => dispatch(decirHola()),
  decirChau: () => dispatch(decirChau()),
  cambiarNombre: params => dispatch(cambiarNombre(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Botonera);
