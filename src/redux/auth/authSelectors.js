export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectEmail = state => state.auth.user.email;
export const selectUser = state => state.auth.user;
export const selectIsFetching = state => state.auth.isFetching;
export const selectAuthError = state => state.auth.error;
