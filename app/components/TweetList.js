import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TweetCard from 'components/TweetCard';
import Loading from 'components/Loading';

class TrendList extends Component {
  render() {
    const { trendList, isLoading } = this.props;
    return (
      <div className="trend">
        {(!trendList.length && !isLoading) &&
          <div>No trends found. Please try again.</div>}
          {trendList.sort((a,b) => { return b.tweet_volume - a.tweet_volume }).slice(0, 10).map((trends) => (
            <TweetCard key={trends.name} trends={trends} />
          ))}
          {isLoading && <Loading />}
      </div>
    )
  }
}

TrendList.propTypes = {
  trendList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TrendList;
