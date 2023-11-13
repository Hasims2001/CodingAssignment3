import { ADDNOTE } from "./actionType"

const init = {
    notes : JSON.parse(localStorage.getItem('notes')) || [],
}

const reducer = (state= init, {type, payload})=>{
    switch(type){
        case ADDNOTE:
            const new_state = {
                ...state,
                notes: [...state.notes, payload].sort((a,b)=> b.timestamp - a.timestamp),
            }
            localStorage.setItem('notes', JSON.stringify(new_state.notes))
            return new_state;
        default:
            return state;
    }
}

export default reducer;