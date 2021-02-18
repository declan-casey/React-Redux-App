import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE} from "../actions/action"

const initialState = {
    character: [],
    fetching: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_CHARACTER_START):
            return({
                ...state,
                fetching: true
            })
        
        case(FETCH_CHARACTER_SUCCESS):
            return({
                ...state,
                fetching: false,
                character: [...action.payload]
            })
        
        case(FETCH_CHARACTER_FAILURE):
            return({
                ...state,
                fetching: false,
                error: 'Oh Jeez Rick. I Dont think we have that information'
            })

        default:
            return state;
    }
}