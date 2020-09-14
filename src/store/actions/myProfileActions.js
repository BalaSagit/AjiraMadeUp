export const setMyProfile = (data) => (dispatch) => {
  dispatch({
    type: "SET_MY_PROFILE",
    payload: data
  });
};
