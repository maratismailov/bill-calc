const initialState = {
    checks: [],
    check: [],
    // members: [],
    member: [],
    checkId: 0
}
const reducer = (state = initialState, action) => {
    // console.log(state.checks)
    switch (action.type) {
        case 'ADD_CHECK':
            return {
                ...state,
                checks: state.checks.concat({date: new Date(), id: state.checkId, check: action.check}),
                // checkId:  state.checkId + 1,
            }

        case 'ADD_MEMBER':
            return {
                ...state,
                checks: state.checks[0].check.concat({member: action.member})
                // checks[0]: state.checks[0].check.concat({member: action.member})
            }

    };
    return state;
};

export default reducer;