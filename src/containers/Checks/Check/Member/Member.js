import React, { Component } from "react";
import { connect } from "react-redux";
import { DebounceInput } from 'react-debounce-input';
import { addDishPriceToStore, addDishNameToStore, addDishToStore, collectiveCheckedToStore, showDelete, hideDelete, deleteFromStore } from '../../../../actions/index'


class Member extends Component {

  constructor(props) {
    super(props);
    this.state = { showMe: false };
  }

  handleCheck = (dishIndex) => {
    const memberId = this.props.memberId;
    const collectiveChecked = this.props.checks[this.props.checkId - 1].collectiveDishes[dishIndex].members[memberId].checked
    this.props.collectiveCheckedToStore(collectiveChecked, memberId, dishIndex);
  }

  addDishHandler = () => {
    const memberId = this.props.memberId;
    this.props.addDishToStore(memberId);
  };

  showDeleteHandler = index => {
    console.log('object');
    const memberId = this.props.memberId;
    this.props.showDelete(index, memberId);
  }

  hideDeleteHandler = index => {
    console.log('object');
    const memberId = this.props.memberId;
    this.props.hideDelete(index, memberId);
  }

  deleteHandler = (index) => {
    const memberId = this.props.memberId;
    this.props.deleteFromStore(index, memberId)
    console.log('2')
  }

  addDishNameHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addDishNameToStore(enteredValue, index, memberId);
  };

  addDishPriceHandler = (event, index) => {
    const enteredValue = event.target.value;
    const memberId = this.props.memberId;
    this.props.addDishPriceToStore(enteredValue, index, memberId);
  };

  render() {
    var showDelete = (
      <div className='Show-delete'>
        <div onClick={this.deleteHandler} className='Delete'> Delete?</div>
        <div>Cancel</div>
      </div>
    )
    var deleteDiv = (<div className='Delete' onClick={this.showDeleteHandler}> {'\u2715'} </div>);

    return (
      <div>
        <div>
          {this.props.checks[this.props.checkId - 1].members[this.props.memberId].dishes.map(
            (dish, index) => {
              return (
                <div key={index} className='Dish'>
                  <div >
                    <DebounceInput className='DishName'
                      debounceTimeout={800}
                      value={dish.dish}
                      onChange={(event) => {
                        this.addDishNameHandler(event, index)
                      }}

                      placeholder="Name"
                    />


                  </div>
                  <div >
                    <input className='DishPrice'
                      type='number'
                      onInput={(event) => {
                        this.addDishPriceHandler(event, index)
                      }}
                      value={dish.price}
                      placeholder="Price"
                    />
                  </div>
                  <div>
                    {(() => {
                      switch (dish.showDelete) {
                        case false: return (
                          <div className='Delete' onClick={() => this.showDeleteHandler(index)}> {'\u2715'} </div>
                        );
                        case true: return (
                          <div className='Show-delete'>
                            <div onClick={() => this.deleteHandler(index)} className='Delete'> Delete</div>
                            <div onClick={() => this.hideDeleteHandler(index)} className='Delete'>Cancel</div>
                          </div>
                        )
                      }
                    })()
                    }
                  </div>

                </div>
              )
            })
          }
          {this.props.checks[this.props.checkId - 1].collectiveDishes.map(
            (dish, dishIndex) => {
              return (
                <div key={dishIndex} className='slider-checkbox'>
                  <input
                    type="checkbox"
                    onChange={() => this.handleCheck(dishIndex)}
                    defaultChecked={dish.members[this.props.memberId].checked}
                    value={dish.members[this.props.memberId].checked}
                  />
                  <label className="label" for="1">{dish.collectiveDishName}</label>
                  {/* {dish.collectiveDishName} */}
                </div>
              )

            }
          )}
          {/* <div>
            <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.props.checks[this.props.checkId - 1].members[this.props.memberId].collectiveChecked} />
            <p>this box is {msg}.</p>
          </div> */}
        </div>
        <button className='Add-dish' onClick={this.addDishHandler}>
          add dish
        </button>
      </div>
    );
  }
}

const singleDish = '';

const MapStateToProps = state => {
  return {
    checks: state.checks,
    check: state.check,
    member: state.member,
    // memberId: state.memberId,
    checkId: state.checkId,
    collectiveChecked: state.collectiveChecked
  };
};


const MapDispatchToProps = dispatch => {
  return {
    addDishToStore: (memberId) =>
      dispatch(addDishToStore(singleDish, memberId)),

    addDishNameToStore: (enteredValue, index, memberId) =>
      dispatch(addDishNameToStore(enteredValue, index, memberId)),

    addDishPriceToStore: (enteredValue, index, memberId) =>
      dispatch(addDishPriceToStore(enteredValue, index, memberId)),

    collectiveCheckedToStore: (collectiveChecked, memberId, dishIndex) =>
      dispatch(collectiveCheckedToStore(collectiveChecked, memberId, dishIndex)),

    showDelete: (index, memberId) =>
      dispatch(showDelete(index, memberId)),

    deleteFromStore: (index, memberId) =>
      dispatch(deleteFromStore(index, memberId)),

    hideDelete: (index, memberId) =>
      dispatch(hideDelete(index, memberId))
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Member);
