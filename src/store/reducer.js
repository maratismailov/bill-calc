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
                  { dish: action.member }
                ],
                memberId: state.memberId
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
                  { dish: action.dish }
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
                  console.log(action.dishName)
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
            return {
              member,
              // check: remappedDishesNamesMembers
            }
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
