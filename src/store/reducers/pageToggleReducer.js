const defaultState = {
  isHomePageActive: true
};

export default (state = defaultState, action) => {
  let updatedState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "SET_HOME_PAGE_ACTIVE":
      updatedState.isHomePageActive = action.payload;
      break;

    case "TOGGLE_HOME_PAGE_ACTIVE":
      updatedState.isHomePageActive = !updatedState.isHomePageActive;
      break;

    default:
      return updatedState;
  }

  return updatedState;
};
