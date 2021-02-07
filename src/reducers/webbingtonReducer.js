const SET_SHOW_MODAL = "SET_SHOW_MODAL";
const SET_SHOW_VIDEO = "SET_SHOW_VIDEO";

export const initialState = {
  showModal: false,
  showVideo: false,
};

const webbingtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal
      });
    case SET_SHOW_VIDEO:
      return Object.assign({}, state, {
        showVideo: action.showVideo
      });
    default:
      return state
  }
};

export function setShowModal(showModal) {
  return {
    type: SET_SHOW_MODAL,
    showModal
  };
}

export function setShowVideo(showVideo) {
  return {
    type: SET_SHOW_VIDEO,
    showVideo
  };
}

export default webbingtonReducer;
