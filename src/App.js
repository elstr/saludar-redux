import React, { Component } from "react";
import { connect } from "react-redux";
import Botonera from "./Botonera";
class App extends Component {
  componentWillReceiveProps(nextProps) {
    console.log({ nextProps });
  }
  render() {
    const { mensaje } = this.props;
    return (
      <div className="App">
        <Botonera />
        {mensaje && <p>{mensaje}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mensaje: state.mensaje
});
export default connect(
  mapStateToProps,
  null
)(App);
