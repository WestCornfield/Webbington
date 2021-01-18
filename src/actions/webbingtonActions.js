import { setShowModal } from "../reducers/webbingtonReducer";

export function updateShowModal(status) {
  return (dispatch) => {
    return dispatch(setShowModal(status));
  }
}
