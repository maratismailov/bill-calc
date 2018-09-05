const initialState = {
    checks: [],
    check: [],
    // members: [],
    member: []
}
const reducer = (state = initialState, action) => {
    // console.log(action.allText)
    switch (action.type) {
        case 'ADD_CHECK':
            return {
                ...state,
                checks: [...state.checks, state.check],
                // check: [ ...state.check, initialState.members]
            }

        case 'ADD_MEMBER':
            return {
                ...state,
                check: [...state.check, state.member],
                // check: [ ...state.check, initialState.members]
            }

    };

    return state;
};

export default reducer;