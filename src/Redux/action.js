import { ADDNOTE } from "./actionType";

export const addNote = (date, title, body) => ({
    type: ADDNOTE,
    payload: { date, title, body, timestamp: new Date().getTime() },
  });
  