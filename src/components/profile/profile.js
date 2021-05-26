import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getArchive2} from "../../store/actions/action-creators/profile";
import {PROFILE_ACTION_TYPES} from "../../store/actions/action-types/profile";

const Profile = () => {
  const archive = useSelector((state) => state.profileState.archiveList);
  const archiveStatus = useSelector((state) => state.profileState.request.status);
  const archiveError = useSelector((state) => state.profileState.request.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArchive2());
  }, []);

  if (archiveStatus === PROFILE_ACTION_TYPES.LOAD_PROFILE_START) {
    return <h3>LOADING...</h3>;
  }

  if (archiveError) {
    return <h3>ERROR: {archiveError}</h3>;
  }

  return (
    <>
      <div>PROFILE PAGE</div>
      {archive.map((archive) => (
        <div key={archive.id}>
          <h4>{archive.title}</h4>
          <div>{archive.text}</div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Profile;
