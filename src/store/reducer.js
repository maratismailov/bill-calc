import Check from "../containers/Checks/Check/Check";

const initialState = {
  checks: [],
  checkId: 0,
  initChecks: [],
  memberId: 0,
  dishId: 0,
  OldCheckIndex: 0,
  checkTotalSum: 0,
  checkCollectiveDivided: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OLD_CHECK":
      return {
        ...state,
        OldCheckIndex: action.OldCheckIndex
      };

    case "ADD_CHECK":
      state.checkTotalSum = 0;
      // const remappedChecks = JSON.parse(JSON.stringify(state.checks));

      const remappedChecks = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          return {
            ...check,
            members: [...check.members],
            collectiveDishes: [...check.collectiveDishes],
            collectiveDisheId: 0
          };
        }
        return check;
      });
      remappedChecks.push({
        date: new Date().toLocaleString('ru-RU'),
        id: state.checkId,
        serviceCharge: 0,
        checkTotalSum: 0,
        collectiveDisheId: 0,
        members: action.check,
        collectiveDishes: action.collectiveDishes,
        collectiveDishesSum: 0,
        collectiveMembers: 0

      });
      return {
        ...state,
        checks: remappedChecks,
        checkId: state.checkId + 1,
        memberId: 1,
        dishId: 1
        // memberId: state.memberId +1
      };

    case "ADD_MEMBER":
      const remappedMembers = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          return {
            ...check,
            members: [
              ...check.members,
              {
                dishes: [
                  // ...check.members[state.memberId-1].dishes,
                  {
                    dish: action.member,
                    price: ''
                  },
                ],
                memberId: state.memberId,
                memberName: '',
                memberSum: 0,
                collectiveChecked: true
              }
            ]
          };
        }
        return check;
      });

      return {
        ...state,
        memberId: state.memberId + 1,
        checks: remappedMembers,
        // dishId:1
      };

    case "ADD_COLLECTIVE":
      const remappedCollective = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          return {
            ...check,
            collectiveDishes: [
              ...check.collectiveDishes,
              {
                collectiveDishName: '',
                collectiveDishPrice: ''
              },
            ],
            collectiveDisheId: check.collectiveDisheId + 1
          };
        }
        return check;
      });

      return {
        ...state,
        // collectiveDisheId: state.collectiveDisheId+1,
        checks: remappedCollective,
        // dishId:1
      };

      // case "COLLECTIVE_CHECKED":
      // if (action.collectiveChecked) {
      //   return {
      //     ...state,
      //     collectiveChecked: false
      //   }
      // }
      // else {
      //   return {
      //     ...state,
      //     collectiveChecked: true
      //   }
      // }

      case 'COLLECTIVE_CHECKED':
      const remappedCollectiveChecked = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedCollectiveCheckedInternal = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              if (action.collectiveChecked) {
                return {
                  ...member,
                  collectiveChecked: false
                }
              }
              else {
                return {
                  ...member,
                  collectiveChecked: true
                }
              }
            }
            return member;
          });

          return {
            ...check,
            members: remappedCollectiveCheckedInternal
          };
        }
        return check;
      });

      return {
        ...state,
        // dishId: state.dishId + 1,
        checks: remappedCollectiveChecked
      };
      

    case 'ADD_COLLECTIVE_NAME':
      const remappedCollectiveNames = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedCollectiveNamesInternal = check.collectiveDishes.map((dish, index) => {
            if (index === action.dishId) {
              return {
                ...dish,
                collectiveDishName: action.dishName
              }
            }
            return dish;
          });

          return {
            ...check,
            collectiveDishes: remappedCollectiveNamesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        // dishId: state.dishId + 1,
        checks: remappedCollectiveNames
      };

    case 'ADD_COLLECTIVE_PRICE':
      const remappedCollectivePrices = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          

          const remappedCollectivePricesInternal = check.collectiveDishes.map((dish, index) => {
            if (index === action.dishId) {
              return {
                ...dish,
                collectiveDishPrice: action.dishPrice
              }
            }
            return dish;
          });

          return {
            ...check,
            collectiveDishes: remappedCollectivePricesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        // dishId: state.dishId + 1,
        checks: remappedCollectivePrices
      };

    case 'ADD_DISH':
      const remappedDishes = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedDishesInternal = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              return {
                ...member,
                dishes: [
                  ...member.dishes,
                  {
                    dish: action.dish,
                    price: ''
                  }
                ]
              }
            }
            return member;
          });

          return {
            ...check,
            members: remappedDishesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedDishes
      };



    case 'ADD_DISH_NAME':
      const remappedDishesNames = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedDishesNamesMembers = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              // console.log(action.dishName)
              // console.log(action.dishId)
              const remappedDishesNamesInternal = member.dishes.map((dish, dishIndex) => {
                if (dishIndex === action.dishId) {
                  console.log(action.dishId);
                  console.log(action.memberId)
                  return {

                    ...dish,
                    dish: action.dishName

                  }
                }
                return dish

              })
              return {
                ...member,
                dishes: remappedDishesNamesInternal
              }
            }
            return member
          });

          return {
            ...check,
            members: remappedDishesNamesMembers
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedDishesNames
      };

    case 'ADD_DISH_PRICE':
      const remappedDishesPrices = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedDishesPricesMembers = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              // console.log(action.dishName)
              // console.log(action.dishId)
              const remappedDishesPricesInternal = member.dishes.map((dish, dishIndex) => {
                if (dishIndex === action.dishId) {
                  console.log(action.dishId);
                  console.log(action.memberId)
                  return {

                    ...dish,
                    price: Number(action.dishPrice)

                  }
                }
                return dish

              })
              return {
                ...member,
                dishes: remappedDishesPricesInternal
              }
            }
            return member
          });

          return {
            ...check,
            members: remappedDishesPricesMembers
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedDishesPrices
      };

    case 'ADD_MEMBER_NAME':
      const remappedMemberNames = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          const remappedMemberNamesInternal = check.members.map((member, memberIndex) => {
            if (memberIndex === action.memberId) {
              return {
                ...member,
                memberName: action.memberName
              }
            }
            return member;
          });

          return {
            ...check,
            members: remappedMemberNamesInternal
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedMemberNames
      };

    case 'CALCULATE':
      const remappedCalculate = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {

          

          // console.log(check.members.filter(member.collectiveChecked => member.collectiveChecked === true).length);

          const remappedCollectiveMembers = check.members.map((member, index) => {
            let collectiveMembers = 0;
            if (member.collectiveChecked===true) {
              collectiveMembers = collectiveMembers+1
            }
            return collectiveMembers
          })

          const membersFiltered = remappedCollectiveMembers.filter( member => member === 1)

          const dishCollectiveSum = ((check.serviceCharge / 100) + 1) * check.collectiveDishes.reduce((prev, cur) => {
            return prev + cur.collectiveDishPrice;
          }, 0);
          const collectiveMembersNumber = membersFiltered.length
          state.checkTotalSum = state.checkTotalSum + dishCollectiveSum;
          state.checkCollectiveDivided = dishCollectiveSum/collectiveMembersNumber
          console.log(state.checkCollectiveDivided)

          // console.log(membersFiltered.length)
          state
          state.checkTotalSum = 0;
          const remappedcalculateMembers = check.members.map((member, memberIndex) => {
            // const add = (a, b) => a.price + b.price;
            if (member.collectiveChecked===true){
              member.memberSum = (((check.serviceCharge / 100) + 1) * member.dishes.reduce((prev, cur) => {
                return prev + cur.price;
              }, 0))+state.checkCollectiveDivided;
            }
            else {
              member.memberSum = ((check.serviceCharge / 100) + 1) * member.dishes.reduce((prev, cur) => {
                return prev + cur.price;
              }, 0);
            }

            

            state.checkTotalSum = state.checkTotalSum + member.memberSum;

            return member
          });

          

          return {
            ...check,
            checkTotalSum: state.checkTotalSum,
            members: remappedcalculateMembers
          };
        }
        return check;
      });

      return {
        ...state,
        dishId: state.dishId + 1,
        checks: remappedCalculate
      };


    case 'ADD_SERVICE_CHARGE':
      const remappedServiceCharge = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          console.log(action.serviceCharge)
          return {
            ...check,
            serviceCharge: Number(action.serviceCharge)
          };
        }
        return check;
      });

      return {
        ...state,
        checks: remappedServiceCharge,
      };
    // case "ADD_DISH":
    //   const remappedDishes = state.checks.map((check, checkIndex) => {
    //     if (checkIndex === state.checkId - 1) {

    //       return {
    //         ...check,
    //         members: [
    //           ...check.members,
    //            {dishes: check.members.map((member, memberIndex) => {
    //             if (memberIndex = state.memberId - 1) {
    //               return {

    //                   // ...member.dishes,
    //                   dish: action.dish 


    //               }
    //             }
    //           })}

    //         ]
    //       };
    //     }
    //     return check;
    //   });

    //   return {
    //     ...state,
    //     DishId: state.DishId + 1,
    //     checks: remappedDishes
    //   };

  }
  return state;
};

export default reducer;
