import React from "react";
import PropTypes from "prop-types";
import { SearchBarWrapper, Wrapper } from "./SearchBar.style";
import Button from '../components/Button';
import { connect } from 'react-redux';
import { addTodo, setKeywordFilter } from '../actions'

const SearchBarComponent = ({ keyword, keywordChanged, onAddClick }) => {
  const handleKeywordChanged = e => {
    const keyword = e.target.value;
    if (keywordChanged) {
      keywordChanged(keyword);
    }
  };

  const handleOnAddClick = () => {
    onAddClick(keyword);
    keywordChanged('')
  }

  const renderInput = () => {
    return <input value={keyword} onChange={handleKeywordChanged} />;
  };

  return (
    <Wrapper>
      <SearchBarWrapper>{renderInput()}</SearchBarWrapper>
      <Button
        type={'secondary'}
        onClick={handleOnAddClick}>
        Add
      </Button>
    </Wrapper>
  );
};

SearchBarComponent.propTypes = {
  keyword: PropTypes.string,
  keywordChanged: PropTypes.func,
  onAddClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  keyword: state.keywordFilter
})

const mapDispatchToProps = {
  keywordChanged: setKeywordFilter,
  onAddClick: addTodo
}

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarComponent)

export default SearchBar;
