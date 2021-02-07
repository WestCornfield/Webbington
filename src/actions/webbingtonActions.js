import { setShowModal, setShowVideo } from "../reducers/webbingtonReducer";

export function updateShowModal(status) {
  return (dispatch) => {
    return dispatch(setShowModal(status));
  }
}

export function updateShowVideo(status) {
  return (dispatch) => {
    return dispatch(setShowVideo(status));
  }
}
