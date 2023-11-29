
// Action constants.

export const ADD_NOTE="ADD Todo";
 export const DELETE_NOTE="Toggle Todo";

// Action Creators
export const addNote = (text)=>({text, type: ADD_NOTE});
export const deletNote = (index)=>({index, type: DELETE_NOTE});