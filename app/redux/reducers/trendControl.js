const initialState = {
  trends: [],
  isLoading: false,
  error: ''
}

const trendControl = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'RESET_TRENDS_STATE':
      return {
        ...initialState,
      };
    case 'FETCHING_TRENDS':
      return {
        ...state,
        isLoading: true,
      }
    case 'FETCHING_TRENDS_SUCCESS':
      return {
        trends: action.trends,
        isLoading: false,
        error: ''
      }
    case 'FETCHING_TRENDS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Server error',
      }
    default:
      return state;
  }
}

export default trendControl;
