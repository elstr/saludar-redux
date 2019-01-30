import React, { Component } from "react";
import { connect } from "react-redux";

class HijoDeSideBar extends Component {
  render() {
    console.log("render HijoDeSideBar")
    return (
      <div>
        <p>{this.props.mensaje}</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  mensaje: state.mensaje
});

export default connect(
  mapStateToProps,
  null,
)(HijoDeSideBar);
