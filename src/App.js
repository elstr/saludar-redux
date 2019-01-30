import React, { Component } from "react";
import { connect } from "react-redux";
import Botonera from "./Botonera";
import SideBar from "./SideBar";
class App extends Component {
  componentWillReceiveProps(nextProps) {
    console.log({ nextProps });
  }
  render() {
    console.log("render APP");
    return (
      <div className="App">
        <Botonera />
        <SideBar />
        {/* {mensaje && <p>{mensaje}</p>} */}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   mensaje: state.mensaje
// });
export default connect(
  null,
  null
)(App);
