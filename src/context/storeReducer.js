const storeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload }
        case 'SET_USERS':
            return { ...state, users: action.payload }
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case 'SET_USER_STATUS':
            const usersCopy = state.users;
            const { id: userId, status } = action.payload;

            const userToUpdate = usersCopy.find(user => user.id === userId);
            userToUpdate.status = status;

            return { ...state, users: usersCopy };
        default:
            return state;
    }
};

export default storeReducer;