// DEFAULT STATE WHEN THE APPLICATION STARTS
const defaultState = {
  currentRoute: "Home / My Profile",
  isProfileActive: true,
  isOrdersActive: false
};

export default (state = defaultState, action) => {
  // DEEP COPYING THE CURRENT STATE TO THE NEW STATE
  let updatedState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    // TOGGLES THE IsProfileActive FLAG
    case "TOGGLE_PROFILE_ACTIVE":
      // updatedState.isProfileActive = !updatedState.isProfileActive;

      if (!updatedState.isProfileActive) {
        updatedState.isProfileActive = true;
        updatedState.isOrdersActive = false;
        updatedState.currentRoute = "Home / My Profile";
      }

      // if (!updatedState.isOrdersActive && !updatedState.isProfileActive) {
      //   updatedState.currentRoute = "Home";
      // }

      break;

    // TOGGLES THE isOrdersActive FLAG
    case "TOGGLE_ORDERS_ACTIVE":
      // updatedState.isOrdersActive = !updatedState.isOrdersActive;

      if (!updatedState.isOrdersActive) {
        updatedState.isOrdersActive = true;
        updatedState.isProfileActive = false;
        updatedState.currentRoute = "Home / My Orders";
      }
      // if (!updatedState.isOrdersActive && !updatedState.isProfileActive) {
      //   updatedState.currentRoute = "Home";
      // }
      break;

    // RETURNING THE SAME-STATE AS DEFAULT
    default:
      return updatedState;
  }

  return updatedState;
};
