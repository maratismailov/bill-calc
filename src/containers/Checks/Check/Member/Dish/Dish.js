import React, { Component } from "react";
import { connect } from "react-redux";
import { DebounceInput } from 'react-debounce-input';

class Dish extends Component {
  render() {
    return (
      <div>
        <DebounceInput
          debounceTimeout={800}
          onChange={this.props.changed}
          value={this.props.value}
          {...this.props}
          placeholder="Name"
        />
        {/* <input
          onChange={this.props.changed}
          value={this.props.value}
          {...this.props}
          placeholder="Price"
        /> */}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {};
};

const MapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Dish);
