import {API_URL} from "../../../utils/constants";
import {PROFILE_ACTION_TYPES} from "../action-types/profile";

export const nytArchiveStart = () => ({
  type: PROFILE_ACTION_TYPES.LOAD_PROFILE_START,

});

export const nytArchiveSuccess = (archive) => ({
  type: PROFILE_ACTION_TYPES.LOAD_PROFILE_SUCCESS,
  archive,
});

export const nytArchiveError = (error) => ({
  type: PROFILE_ACTION_TYPES.LOAD_PROFILE_ERROR,
  error,
});

export const getArchive = () => (dispatch) => {
  dispatch(nytArchiveStart());

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("request failed with status " + response.status);
      }

      return response.json();
    })
    .then((data) => {
      dispatch(nytArchiveSuccess(data));
    })
    .catch((err) => {
      dispatch(nytArchiveError(err.message));
    });
};

export const getArchive2 = () => async (dispatch) => {
  dispatch(nytArchiveStart());

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("request failed with status " + response.status);
    }

    const data = await response.json();

    dispatch(nytArchiveSuccess(data));
  } catch (err) {
    dispatch(nytArchiveError(err.message));
  }
};
