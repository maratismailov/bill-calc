case 'ADD_DISH':
    const checks = state.checks.map((check, checkIndex) => {
      if (checkIndex === state.checkId - 1) {

        const members = check.members.map((member, memberIndex) => {
          if (memberIndex === state.memberId-1) {
            return {
              ...member,
              dishes: [
                ...member.dishes,
                {dish: action.dish}
              ]
            };
          }
    return member;
        });

        return {
          ...check,
          members,
        };
      }
      return check;
    });

    return {
      ...state,
      dishId: state.dishId + 1,
      checks,
    };