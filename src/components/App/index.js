import React from "react";
import ActionBar from '../../containers/ActionBar'
import SearchBar from '../../containers/SearchBar'
import VisibleTodoList from '../../containers/VisibleTodoList'
import "./App.css";
import { Wrapper } from "./index.style";

const App = ({ list, actions}) => (
  <div className="App">
    <Wrapper>
      <SearchBar />
      <VisibleTodoList />
      <ActionBar />
    </Wrapper>
  </div>
)

export default App;
