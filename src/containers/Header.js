import { connect } from 'react-redux';
import { addTodo, setKeywordFilter } from '../actions'
import SearchBar from '../components/SearchBar';

const mapStateToProps = (state) => ({
  keyword: state.keywordFilter
})

const mapDispatchToProps = {
  keywordChanged: setKeywordFilter,
  onAddClick: addTodo
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default Header
