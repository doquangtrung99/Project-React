const initState = {
    user: [
        { id: '01', name: 'Trung' },
        { id: '02', name: 'Tu' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let user = state.user
                user = user.filter(item => item.id !== action.payload.id)
            return {
                ...state,user
            }
        case 'ADD_USER':
            let users = {id:Math.floor(Math.random()*100),name:`name: ${Math.floor(Math.random()*100)}`}
            console.log(users)
        return{
            ...state,user:[...state.user,users]
            } 
        default:
            return state;
    }
}

export default rootReducer;