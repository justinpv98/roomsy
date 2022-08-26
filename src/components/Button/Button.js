import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Button.module.scss";
import cx from "classnames";

import Icon from '../Icon/Icon';

function Button({variant, children, className, leadingIcon, trailingIcon, ...rest}) {


  const propClass = {
    [styles.hasLeadingIcon]: leadingIcon,
    [styles.hasTrailingIcon]: trailingIcon,
  }

 
  return (
    <button className={cx(styles[variant], propClass, className)} {...rest}>
      {leadingIcon && <Icon icon={leadingIcon} />}
      {children}
      {trailingIcon && <Icon icon={trailingIcon} />}
      </button>
  )
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    leadingIcon: PropTypes.string,
    trailingIcon: PropTypes.string
}

Button.defaultProps = {
    variant: "primary",
}


export default Button