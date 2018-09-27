import React, { Component } from "react";
import { connect } from "react-redux";


class OldCheck extends Component {

  render() {
    return (
      <div className='Oldcheck'>
        Check creation time: {this.props.checks[this.props.currentCheckIndex].date}
        {this.props.checks[this.props.currentCheckIndex].members.map(
          (member, index) => {
            var oldCheckMember = 'Old-check-member1'
            const isEven = index => {
              return (index % 2)
            }
            if (isEven(index) === 0) {
              oldCheckMember = 'Old-check-member1'
            }
            else {
              oldCheckMember = 'Old-check-member2'
            }
            return (
              <div key={member.memberId} className={oldCheckMember}>
                {member.memberName}

                {member.dishes.map(
                  (dish, index) => {
                    return (
                      <div key={index}>
                        {dish.dish} {' '}
                        {(dish.price).toFixed(2)}
                      </div>
                    )
                  }
                )}
                <div>
                  {(member.memberSum).toFixed(2)}
                </div>
              </div>
            );
          }
        )}
        <div className='Old-check-bottom'>
          Collective dishes:
        {this.props.checks[this.props.currentCheckIndex].collectiveDishes.map(
            (dish, index) => {
              return (
                <div key={index}>
                  {dish.collectiveDishName} {' '}
                  {dish.collectiveDishPrice}
                </div>
              )
            }
          )}
        </div>
        <div>
            Service Charge: {this.props.checks[this.props.currentCheckIndex].serviceCharge}
          </div>
          <div>
            Check Total Sum: {(this.props.checks[this.props.currentCheckIndex].checkTotalSum).toFixed(2)}
          </div>
      </div>
    );

  }
}

const MapStateToProps = state => {
  return {
    currentCheckIndex: state.oldCheckIndex,
    checks: state.checks
  };
};

export default
  connect(
    MapStateToProps
  )(OldCheck)
  ;
