import {createSelector} from "reselect";

const selectUsere =state =>state.users;

export const selectCurrentUser =createSelector(
    [selectUsere],
    users=>users.currentUser
);