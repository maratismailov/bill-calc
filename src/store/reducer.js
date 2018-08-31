const initialState = {
    checks: [],
    check: [],
    members: []
}
const reducer = (state = initialState, action) => {
    // console.log(action.allText)
    switch (action.type) {
        case 'ADD_CHECK':
            return {
                ...state,
                checks: [...state.checks, initialState.check]
            }

    };

    return state;
};

export default reducer;