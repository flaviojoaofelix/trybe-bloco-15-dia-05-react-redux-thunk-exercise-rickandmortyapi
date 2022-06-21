import { FETCH_CHARACTERS_FAIL, FETCH_CHARACTERS_SUCCESS } from "../actions";

const INITIAL_STATE = {
  characters: [],
  isLoading: true,
  error: ""
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS:
      // console.log(action);
      return { characters: action.characters, isLoading: false, error: "" };

    case FETCH_CHARACTERS_FAIL:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
export default characterReducer;
