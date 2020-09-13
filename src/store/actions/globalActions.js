export const toggleProfileActive = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_PROFILE_ACTIVE",
    payload: "Toggling isProfileActive"
  });
};

export const toggleOrdersActive = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_ORDERS_ACTIVE",
    payload: "Toggling isOrdersActive"
  });
};
