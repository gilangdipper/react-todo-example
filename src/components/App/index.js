import React from "react";
import ActionBar from '../ActionBar'
import Header from '../../containers/Header'
import VisibleTodoList from '../../containers/VisibleTodoList'
import "./App.css";
import { Wrapper } from "./index.style";

const App = ({ list, actions}) => (
  <div className="App">
    <Wrapper>
      <Header />
      <VisibleTodoList />
      <ActionBar />
    </Wrapper>
  </div>
)

export default App;
