export const toggleHomePageActive = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_HOME_PAGE_ACTIVE",
    payload: "Toggling isHomePageActive"
  });
};


export const setHomePageActive = (data) => (dispatch) => {
  dispatch({
    type: "SET_HOME_PAGE_ACTIVE",
    payload: data
  });
};
