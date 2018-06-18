import React, { Component } from 'react';
import { connect } from "react-redux";
import TrendList from '../components/TweetList';
import { Link } from 'react-router-dom';


import Loading from 'components/Loading';
import { getTrendsList, resetTrendsState } from '../redux/actions/tweets';


class Trends extends Component {
  constructor() {
    super();

    this.state = {
      stateCountryName: ''
    }
  }
  componentDidMount() {
    const { trendList, getTrendsList, location, isLoading } = this.props;
    if (!isLoading && !trendList.length) {
      const id = location.pathname.split('/')[2];
      this.setState({ stateCountryName: this.props.location.state.stateCountryName })
      getTrendsList(id);
    }
  }

  componentWillUnmount() {
    this.props.resetTrendsState()
  }

  render() {
    const { trendList, isLoading, getTrendsList } = this.props;
    const { stateCountryName } = this.state
    const tweetCheck = trendList.isLoading || (trendList.trends.length === 0 && trendList.error === '');
    return (
      <div className='trends'>
        <div className='content'>
          <div className='trend-block'>
            <div className="heading-top">TWITTER TRENDS IN</div>
            <div className="heading-bottom">{stateCountryName}</div>
            <div className="trend">
              {trendList.isLoading && <Loading />}
              {!tweetCheck && <TrendList trendList={trendList.trends} isLoading={trendList.isLoading} />}
            </div>
            <Link to='/' ><button className="trend-btn">Back</button></Link>
          </div>
        </div>
      </div >
    )
  }
}



const mapStateToProps = (state) => {
  return {
    trendList: state.trendList,
    searchCountry: state.searchText,
  }
}

export default connect(
  mapStateToProps,
  {
    getTrendsList,
    resetTrendsState,
  }
)(Trends);
