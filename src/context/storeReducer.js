const storeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, currentUser: action.payload }
        case 'SET_USERS':
            return { ...state, users: action.payload.filter(user => user.username !== state.currentUser.username) }
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
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