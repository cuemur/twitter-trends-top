import api from 'utils/api';

function fetchingTrends() {
  return {
    type: 'FETCHING_TRENDS'
  };
}

function fetchingTrendsSuccess( data ) {
  return {
    type: 'FETCHING_TRENDS_SUCCESS',
    trends: data.trends['0'].trends,
  };
}

function fetchingTrendsError() {
  return {
    type: 'FETCHING_TRENDS_ERROR'
  };
}

export function resetTrendsState() {
  return ( dispatch ) => dispatch(
    { type: 'RESET_TRENDS_STATE' }
  );
}

export function getTrendsList( id ) {
  return ( dispatch ) => {
    dispatch( fetchingTrends() );
    api.getTrends( id )
      .then( data => dispatch( fetchingTrendsSuccess( data ) ) )
      .catch( err => dispatch( fetchingTrendsError() ) );
  }
}
