import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { getTrendsList, resetTrendsState } from 'redux/actions/tweets';

import SearchForm from 'components/SearchForm';
import TrendList from 'components/TweetList';
import Loading from 'components/Loading';


class Home extends Component {
	constructor() {
		super();

		this.handleSearch = this.handleSearch.bind( this );
	}

	handleSearch( search ) {
		const { getTrendsList, resetTrendsState, getUserList } = this.props;
		getTrendsList( search );
		getUserList( search );
	}

	render () {
		 const { trendList, userList } = this.props;
		 const trendCheck = trendList.isLoading || (trendList.trends.length === 0 && trendList.error === '');

		return (
			<section className="container home">
				<SearchForm
					onHandleSearch={ this.handleSearch }
					/>
				{ <div className="content">
					{ userList.isLoading && <Loading /> }
					{ !trendCheck && <TrendList trendList={ trendList.trends } isLoading={ trendList.isLoading }/> }
				</div> }
			</section>
		)
	}
}

Home.propTypes = {
	trendList: PropTypes.shape({
		trends: PropTypes.array,
		isLoading: PropTypes.bool,
		error: PropTypes.string
	}).isRequired,
	getTrendsList: PropTypes.func.isRequired,
}

const mapStateToProps = ( state ) => {
	return {
		trendList: state.trendList,
		userList: state.userList,
	}
}

export default connect(
	mapStateToProps,
	{
		getTrendsList,
	}
)( Home );
