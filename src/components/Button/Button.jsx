import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './button.scss';

function Button({
  type,
  rounded,
  children,
  customClass,
  callback,
}) {
  const btnClass = classNames({
    button: true,
    [`button_color_${type}`]: type,
    [`button_rounded_${rounded}`]: rounded,
    [customClass]: customClass,
  });

  return (
    <button onClick={callback} type="button" className={btnClass}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  rounded: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
