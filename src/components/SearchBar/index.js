import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchBarWrapper, Wrapper } from "./index.style";
import Button from '../Button';

class SearchBar extends Component {
  state = {
    keyword: this.props.keyword
  };

  setKeyword = (keyword = "") => {
    this.setState({ keyword });
  };

  handleKeywordChanged = e => {
    const keyword = e.target.value;
    this.setKeyword(keyword);
    if (this.props.keywordChanged) {
      this.props.keywordChanged(keyword);
    }
  };

  handleOnAddClick = () => {
    this.props.onAddClick(this.state.keyword);
    this.setKeyword();
    this.props.keywordChanged('')
  }

  componentWillReceiveProps(nextProps) {
    this.setKeyword(nextProps.keyword);
  }

  renderInput = () => {
    const { keyword } = this.state;
    return <input value={keyword} onChange={this.handleKeywordChanged} />;
  };

  render() {
    return (
      <Wrapper>
        <SearchBarWrapper>{this.renderInput()}</SearchBarWrapper>
        <Button
          type={'secondary'}
          onClick={this.handleOnAddClick}>
          Add
        </Button>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChanged: PropTypes.func
};

SearchBar.defaultProps = {
  keyword: ""
};

export default SearchBar;
