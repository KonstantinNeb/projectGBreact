import {REQUEST_STATUS} from "../../utils/constants";
import {PROFILE_ACTION_TYPES} from "../actions/action-types/profile";

const initialState = {
  archiveList: [],
  request: {
    status: REQUEST_STATUS.START,
    error: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_ACTION_TYPES.LOAD_PROFILE_START: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.START,
          error: "",
        },
      };
    }
    case PROFILE_ACTION_TYPES.LOAD_PROFILE_SUCCESS: {
      return {
        ...state,
        articlesList: action.archive,
        request: {
          status: REQUEST_STATUS.SUCCESS,
          error: "",
        },
      };
    }
    case PROFILE_ACTION_TYPES.LOAD_PROFILE_ERROR: {
      return {
        ...state,
        request: {
          status: REQUEST_STATUS.ERROR,
          error: action.error,
        },
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
