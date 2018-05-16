const initialState = {
  beers: [],
};

export const Beer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BEERS_SUCCESS':
      return {
        ...state,
        beers: action.beers
      }
    default:
      return state
  }
}