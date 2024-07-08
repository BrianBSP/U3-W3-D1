const initialState = {
  jobSelected: {
    content: null,
  },
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_JOB":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
