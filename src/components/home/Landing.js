import React, { Component } from "react";
import {connect} from 'react-redux'
import SearchFor from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import Spinner from "../layout/Spinner";

class Landing extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div className="container">
        <SearchFor />
        {loading ? <Spinner/> : <MoviesContainer/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);
