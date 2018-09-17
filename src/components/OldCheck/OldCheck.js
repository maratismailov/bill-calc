import React, { Component } from "react";
import { connect } from "react-redux";
import Member from '../../containers/Checks/Check/Member/Member'


class OldCheck extends Component {

  render() {
    return (
      <div>
        {/* Date: {props.date} */}
        Date: {this.props.checks[this.props.currentCheckIndex].date}
        Index: {this.props.checks[this.props.currentCheckIndex].id}
        {/* <Member params={this.props.checks} memberId={this.props.currentCheckIndex} /> */}
        {this.props.checks[this.props.currentCheckIndex].members.map(
          (member, index) => {
            return (
              <div key={member.memberId}>
              {member.memberName}

                {member.dishes.map(
                  (dish, index) => {
                    return (
                      <div>
                        {dish.dish}
                        {dish.price}
                      </div>
                    )

                  }
                )}
                {/* <Member params={this.props.checks} /> */}
                {/* <Member params={this.props.checks} memberId={index}/> */}
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


// Then you can access the state object from within your component:

// const {foo} = props.location.state

// console.log(foo) // "bar" */}
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
