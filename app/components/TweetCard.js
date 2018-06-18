import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TweetCard extends Component {
  constructor() {
    super();

  }

  render() {
    const { name, url, tweet_volume } = this.props.trends;

    return (
      <div className="trend-item">
        <div className='hashtag'>{name}</div>
        {tweet_volume ? <div className='hits'>{tweet_volume} Hints</div> : <div className='hits'>Hints Unknown</div>}
      </div>
    )
  }
}

TweetCard.propTypes = {
  trends: PropTypes.object.isRequired,
}

export default TweetCard;
