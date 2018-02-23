import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./index.style";

const Button = ({ actionType, type, onClick, children }) => {
  return (
    <ButtonWrapper
      className={classNames(actionType === type ? 'primary' : 'default')}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  actionType: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: "default",
};

export default Button;
