const SET_SHOW_MODAL = "SET_SHOW_MODAL";

export const initialState = {
  showModal: false
};

const webbingtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: action.showModal
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

export default webbingtonReducer;
