import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { ItemWrapper } from "./index.style";
import classnames from "classnames";
import Randomize from "randomatic";

class Item extends Component {
  renderItem = (content, status) => {
    const { keyword } = this.props;
    return (
      <li>
        <span className={classnames(status)} onClick={this.handleAddClick}>
          {keyword ? this.splitContent(content, keyword) : content}
        </span>
        <span className='remove' onClick={this.handleRemoveClick}>
          x
        </span>
      </li>
    );
  };

  handleAddClick = e => {
    if (this.props.onAddClick) {
      this.props.onAddClick(e);
    }
  };

  handleRemoveClick = e => {
    if (this.props.onRemoveClick) {
      this.props.onRemoveClick(e);
    }
  };


  splitContent = (content, keywrod) => {
    let contentList = content
      .split(keywrod)
      .map(atom => <span key={Randomize("a0", 10)}>{atom}</span>)
      .reduce((prev, current) => [prev, this.renderKeywrod(keywrod), current]);
    return <Fragment>{contentList}</Fragment>;
  };

  renderKeywrod = keyword => {
    return (
      <span className="highlight" key={Randomize("a0", 10)}>
        {keyword}
      </span>
    );
  };

  render() {
    const { children, status } = this.props;
    return <ItemWrapper>{this.renderItem(children, status)}</ItemWrapper>;
  }
}

Item.propTypes = {
  status: PropTypes.string,
  keyword: PropTypes.string,
  onAddClick: PropTypes.func,
  onRemoveClick: PropTypes.func
};

Item.defaultProps = {
  status: "incompleted"
};

export default Item;
