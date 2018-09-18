import React, { Component } from "react";
import { connect } from "react-redux";


class OldCheck extends Component {

  render() {
    return (
      <div>
        Check creation time: {this.props.checks[this.props.currentCheckIndex].date}
        {this.props.checks[this.props.currentCheckIndex].members.map(
          (member, index) => {
            return (
              <div key={member.memberId}>
              {member.memberName}

                {member.dishes.map(
                  (dish, index) => {
                    return (
                      <div key={index}>
                        {dish.dish}
                        {dish.price}
                      </div>
                    )

                  }
                )}
                <div>
                  {member.memberSum}
                </div>
              </div>
            );
          }
        )}
      </div>
    );

  }
}

const MapStateToProps = state => {
  return {
    currentCheckIndex: state.OldCheckIndex,
    checks: state.checks
  };
};

export default
  connect(
    MapStateToProps
  )(OldCheck)
  ;
