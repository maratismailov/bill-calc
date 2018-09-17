import Check from "../containers/Checks/Check/Check";

const initialState = {
  checks: [],
  checkId: 0,
  initChecks: [],
  memberId: 0,
  dishId: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHECK":
      // const remappedChecks = JSON.parse(JSON.stringify(state.checks));

      const remappedChecks = state.checks.map((check, checkIndex) => {
        if (checkIndex === state.checkId - 1) {
          return {
            ...check,
            members: [...check.members]
          };
        }
        return check;
      });
      remappedChecks.push({
        date: new Date(),
        id: state.checkId,
        serviceCharge: 0,
        members: action.check
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
                    price: 0
                  },
                ],
                memberId: state.memberId,
                memberSum: 0
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
                    price: 0
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
            if (memberIndex === action.memberId-1) {
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

          const remappedcalculateMembers = check.members.map((member, memberIndex) => {
            // const add = (a, b) => a.price + b.price;

            member.memberSum = ((check.serviceCharge/100)+1)*member.dishes.reduce((prev, cur) => {
              return prev + cur.price;
            }, 0);

            // member.memberSum = member.dishes.reduce(add);
            // console.log(action.dishName)
            // console.log(action.dishId)
            const remappedCalculateDishes = member.dishes.map((dish, dishIndex) => {

              console.log(action.dishId);
              console.log(action.memberId)
              return {

                ...dish,
                price: action.dishPrice

              }

              return dish

            })
            // return {
            //   ...member,
            //   dishes: remappedDishesPricesInternal
            // }

            return member
          });

          return {
            ...check,
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
