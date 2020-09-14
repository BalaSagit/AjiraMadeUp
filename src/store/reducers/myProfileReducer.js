// DEFAULT STATE WHEN THE APPLICATION STARTS
const defaultState = {
  myProfile: {
    firstName: "Balaji",
    lastName: "S",
    email: "bala.sagit@gmail.com",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  }
};

export default (state = defaultState, action) => {
  // DEEP COPYING THE CURRENT STATE TO THE NEW STATE
  let updatedState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "SET_MY_PROFILE":
      updatedState.myProfile.firstName = action.payload.firstName;
      updatedState.myProfile.lastName = action.payload.lastName;
      updatedState.myProfile.email = action.payload.email;
      updatedState.myProfile.phoneNumber = action.payload.phoneNumber;
      updatedState.myProfile.password = action.payload.password;
      updatedState.myProfile.confirmPassword = action.payload.confirmPassword;
      break;

    // RETURNING THE SAME-STATE AS DEFAULT
    default:
      return updatedState;
  }

  return updatedState;
};
