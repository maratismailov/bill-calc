case 'ADD_DISH':
const remappedDishes = state.checks.map((check, checkIndex) => {
  if (checkIndex === state.checkId - 1) {
    
    const remappedDishesInternal = state.checks[checkIndex].members.map((member, memberIndex) => {
      
      if (memberIndex === state.memberId - 1) {
        return {
          ...member,
          dishes: [
            ...member.dishes,
            { dish: action.dish }
          ]
        }
      }
    });
    return {
      ...check,
      members: remappedDishesInternal
    };
  }
  return {
    check
  }
});

return {
  ...state,
  dishId: state.dishId + 1,
  checks: remappedDishes
};