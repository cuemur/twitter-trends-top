import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '../plugins/autocomplete.js';
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import woeid from 'woeid';

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      searchTextConverted: '',
      stateCountryName: '',
      countrySimpleName: ''
    }

    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ searchText: e.target.value })
  }

  submitForm(e) {
    const { onHandleSearch } = this.props;
    const { searchTextConverted } = this.state;
    const { searchText } = this.state;
    if (searchTextConverted === '') return alert('No Woeid , please choose diffrent place from search list');
    let searchVal = woeid.getWoeid(searchTextConverted).woeid;
    if (searchVal !== '') {
      this.props.history.push({
        pathname: `/trends/${searchVal}`,
        state: { stateCountryName: this.state.searchText ? this.state.searchText : this.state.countrySimpleName}
      });
    }
  }

  getCountryISO(addrComponents) {
    for (var i = 0; i < addrComponents.length; i++) {
      if (addrComponents[i].types[0] == "country") {
        return this.setState({ searchTextConverted: addrComponents[i].short_name });
      }
      if (addrComponents[i].types.length == 2) {
        if (addrComponents[i].types[0] == "political") {
          return this.setState({ searchTextConverted: addrComponents[i].short_name });
        }
      }
    }
    return this.setState({ searchTextConverted: '' });
  }

  render() {
    const { searchText } = this.state;

    return (


      <div className='search-block'>
        <h1 className='title'>Find trends by location</h1>
        <label>ADDRESS</label>
        <form onSubmit={this.submitForm}>
          <Autocomplete
            value={searchText}
            onChange={this.handleInputChange}
            placeholder='What are you looking for?'
            //searchTextConverted: place.address_components["0"].short_name
            onPlaceSelected={(place) => { this.setState({ searchText: place.formatted_address,
              countrySimpleName: place.name
            }); 
            this.getCountryISO(place.address_components); 
            this.submitForm();
          }}
            className='search'
          />
          <div className='search-icon'></div>

          <button className="hidden" onClick={this.submitForm}>
            <i className="hidden" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  onHandleSearch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    searchCountry: state.searchText,
  }
}

export default withRouter(connect(
  mapStateToProps,
)(SearchForm));
