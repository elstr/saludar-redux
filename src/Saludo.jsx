import React, { Component } from "react";
import { connect } from "react-redux";
import { decirChau, decirHola } from "./State/actions";
import { Button } from "react-bootstrap";
class Saludo extends Component {
  constructor() {
    super();
    this.state = {
      nombre: ""
    };
    this.despacharHola = this.despacharHola.bind(this);
    this.despacharChau = this.despacharChau.bind(this);
    this.cambiarNombre = this.cambiarNombre.bind(this);
  }

  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  despacharHola() {
    this.props.decirHola(this.state.nombre);
  }
  despacharChau() {
    this.props.decirChau(this.state.nombre);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.cambiarNombre} />
        <Button onClick={this.despacharHola}>Despachar Hola!</Button>
        <Button onClick={this.despacharChau}>Despachar Chau!</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mensaje: state.mensaje
});
const mapDispatchToProps = dispatch => ({
  decirHola: params => dispatch(decirHola(params)),
  decirChau: params => dispatch(decirChau(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Saludo);
