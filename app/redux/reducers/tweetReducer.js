const initialState = {
  data: {},
  isLoading: false,
  error: ''
};

const tweetReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'FETCHING_TWEET':
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case 'FETCHING_TWEET_SUCCESS':
      return {
        data: action.tweet,
        isLoading: false,
        error: ''
      }
    case 'FETCHING_TWEET_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Server error'
      }
    case 'RESET_TWEET':
      return {
        ...initialState
      }
    default:
      return state;
  }
};

export default tweetReducer;
