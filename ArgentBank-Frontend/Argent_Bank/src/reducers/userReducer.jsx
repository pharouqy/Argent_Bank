const initialState = {
  userProfile: null,
  loading: false,
  error: null,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PROFILE_SUCCESS":
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_PROFILE_FAILURE":
      return {
        ...state,
        userProfile: null,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_PROFILE_SUCCESS":
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
        error: null,
      };
    case "UPDATE_PROFILE_FAILURE":
      return {
        ...state,
        userProfile: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
