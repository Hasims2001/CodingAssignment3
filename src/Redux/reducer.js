import { ADDNOTE } from "./actionType"

const init = {
    notes : [],
}

const reducer = (state= init, {type, payload})=>{
    switch(type){
        case ADDNOTE:
            return {
                ...state,
                notes: [...state.notes, payload].sort((a,b)=> b.timestamp - a.timestamp),
            };
        default:
            return state;
    }
}

export default reducer;